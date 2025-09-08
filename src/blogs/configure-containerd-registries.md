---
title: "How to Configure Containerd for HTTP and Private Registries (With Examples)"
date: "2025-08-24"
summary: "Step-by-step guide to configure Containerd's CRI plugin to securely pull container images from insecure HTTP and authenticated private registries like GitLab. Includes troubleshooting tips."
tags: ["containerd", "container-registry", "kubernetes", "devops", "docker", "gitlab", "cri", "container-runtime", "insecure-registry", "Unauthorized", "401"]
category: "kubernetes"
---

# Configuring Containerd to Pull Images from HTTP and Private Registries

When working with private container registries, especially those using HTTP or self-signed certificates, configuring your container runtime is a critical step. This guide provides two practical methods to configure Containerd to pull images from both **insecure HTTP registries** and **authenticated private registries**


## Video Tutorial

Watch the complete tutorial on YouTube:

[![Containerd Configuration Tutorial](https://img.youtube.com/vi/oOnMJL9erjQ/maxresdefault.jpg)](https://youtu.be/oOnMJL9erjQ)

*Click the thumbnail above to watch the video on YouTube*







## Prerequisites

Before you begin, ensure you have:
*   A running Containerd service.
*   Credentials for your private registry (e.g., a GitLab Deploy Token or user account).
*   Network access to your registry server.

**Important:** For a local registry, ensure its hostname is resolvable. Add it to your `/etc/hosts` file if necessary:
```bash
echo "172.27.103.113   git.zaraamad.ir registry.zaraamad.ir" | sudo tee -a /etc/hosts
```



## Method 1: The Modular Approach (Recommended)

This method uses the `/etc/containerd/certs.d/` directory, which is more organized and easier to manage for multiple registries. Each registry gets its own directory and configuration file.

### Step-by-Step Guide

To resolve the following error you can create a secret:

```bash
Failed to pull image "registry.name.ir:5005/project-name/image:latest": failed to pull and unpack image "registry.name.ir:5005/project-name/image:latest": failed to resolve reference "registry.name.ir:5005/project-name/image:latest": failed to authorize: failed to fetch oauth token: unexpected status from GET request to http://git.name.ir/jwt/auth?scope=repository%3Aproject-name%2Fimage%3Apull&service=container_registry: 401 Unauthorized
```



#### secret creation

Create base64

```bash
echo -n '{"auths":{"registry.zaraamad.ir:5005":{"username":"test-user1","password":"yF6zUG976yRwO8Loc2Z+p3u","auth":"'$(echo -n test-user1:yF6zUG976yRwO8Loc2Z+p3u | base64)'"}}}' | base64 -w 0
```



Create secret manifest



```yaml
vim test-be-regcred.yaml
apiVersion: v1
kind: Secret
metadata:
  name: regcred
  namespace: test
type: kubernetes.io/dockerconfigjson
data:
  .dockerconfigjson: eyJhdXRocyI6eyJyZWdpc3RyeS56YXJhYW1hZC5pcjo1MDA1Ijp7InVzZXJuYW1lIjoidGVzdC11c2VyMSIsInBhc3N3b3JkIjoieUY2elVHOTc2eVJ3TzhMb2MyWitwM3UiLCJhdXRoIjoiZEdWemRDMTFjMlZ5TVRwNVJqWjZWVWM1TnpaNVVuZFBPRXh2WXpKYUszQXpkUT09In19fQ==
```



Create the secret 

```bash
kubectl create -f test-be-regcred.yaml
```





#### CRI configuration



To resolve the following error you have configure the CRI 

```bash
Failed to pull image "registry.name.ir:5005/project-name/image:latest": failed to pull and unpack image "registry.name.ir:5005/project-name/image:latest": failed to resolve reference "registry.name.ir:5005/project-name/image:latest": failed to do request: Head "https://registry.name.ir:5005/v2/project-name/image/manifests/latest": http: server gave HTTP response to HTTPS client
```





1. **Generate a default configuration** (if you don't have one):

```bash
sudo containerd config default | sudo tee /etc/containerd/config.toml > /dev/null
```

2. **Create a directory structure for your registry**.
   The directory name must match the registry's host and port precisely.

```bash
sudo mkdir -p /etc/containerd/certs.d/registry.zaraamad.ir:5005
```

3. **Create the `hosts.toml` configuration file** inside the new directory.

```bash
sudo vim /etc/containerd/certs.d/registry.zaraamad.ir:5005/hosts.toml
```

4. **Add the following configuration**, adjusting the credentials and URL for your environment:

```bash
server = "http://registry.zaraamad.ir:5005"

[host."http://registry.zaraamad.ir:5005"]
  capabilities = ["pull", "resolve", "push"] # Add "push" if needed
  skip_verify = true # Bypasses TLS verification for HTTP/insecure HTTPS

```

### Key Configuration Directives

- `server`: The base URL for the registry.
- `capabilities`: Defines what operations the client can perform (`pull`, `resolve`, `push`).
- `skip_verify = true`: Crucial for registries using HTTP or HTTPS with self-signed certificates.
- `[auth]`: Section for providing username/password credentials.

## Method 2: The Single File Approach

You can also configure everything directly in the main `config.toml` file. This can be useful for centralized management but can become cluttered.

1. **Generate or edit the main configuration file**:

```bash
sudo containerd config default | sudo tee /etc/containerd/config.toml >/dev/null
sudo vim /etc/containerd/config.toml
```

2. **Locate the `[plugins."io.containerd.grpc.v1.cri".registry]` section** and modify it to match the structure below:

```bash
version = 2

[plugins."io.containerd.grpc.v1.cri".registry]

  # Define registry mirrors (for insecure HTTP)
  [plugins."io.containerd.grpc.v1.cri".registry.mirrors]
    [plugins."io.containerd.grpc.v1.cri".registry.mirrors."registry.zaraamad.ir:5005"]
      endpoint = ["http://registry.zaraamad.ir:5005"]

  # Define registry configs (auth and TLS)
  [plugins."io.containerd.grpc.v1.cri".registry.configs]
    [plugins."io.containerd.grpc.v1.cri".registry.configs."registry.zaraamad.ir:5005".tls]
      insecure_skip_verify = true
    [plugins."io.containerd.grpc.v1.cri".registry.configs."registry.zaraamad.ir:5005".auth]
      username = "test-user1"
      password = "yF6zUG976yRwO8Loc2Z+p3u"
```



## Applying the Configuration and Testing

After configuring either method, restart Containerd to apply the changes.

```bash
sudo systemctl restart containerd
sudo systemctl status containerd # Verify it restarted successfully
```



**Test the configuration** by pulling an image using `ctr`:

```bash
sudo ctr images pull registry.zaraamad.ir:5005/zaraavand/rahtal-be:latest
```

List the images to confirm it was pulled successfully:

```bash
sudo ctr image list
```

## Troubleshooting and Debugging

If you encounter issues, enabling debug logging is the best first step.

1. **Enable Debug Logging**:
   Edit `/etc/containerd/config.toml` and add/ensure the following section exists:

```bash
[debug]
  level = "debug"
```



Restart Containerd (`sudo systemctl restart containerd`) and then check the logs in real-time:



```bash
sudo journalctl -u containerd -f
```

1. The debug logs will show detailed information about the image pull process, including authentication attempts and any connection errors.
2. **Test Without Configuration**:
   You can test a pull with explicit flags using the `ctr` command, which is useful for validating credentials before writing the config file.

```bash
sudo ctr --debug images pull \
  --plain-http \
  --user test-user1:yF6zUG976yRwO8Loc2Z+p3u \
  registry.zaraamad.ir:5005/zaraavand/rahtal-be:latest
```



## Conclusion

Configuring Containerd for private and insecure registries is straightforward once you understand the two primary methods. For most use cases, **the modular `/etc/containerd/certs.d/` approach (Method 1)** is preferred for its cleanliness and scalability across multiple registries. Remember to use `skip_verify` or `insecure_skip_verify` for HTTP registries and always secure your credentials properly.

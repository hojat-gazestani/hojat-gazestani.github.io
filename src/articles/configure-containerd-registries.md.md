---
title: "Configuring Containerd to Pull Images from HTTP and Private Registries"
date: "2025-08-24"
summary: "A practical guide to configuring Containerd's CRI plugin to pull container images from both insecure HTTP registries and authenticated private registries"
tags: ["containerd", "container-registry", "kubernetes", "devops", "docker"]
category: "kubernetes"
---



# Configure containerd to pull images from  HTTP registries



![Scenario]()



I've also created a YouTube video tutorial for this setup:  

[![containerd-gitlab]]()



You need to have a user in you Gitlab server to push and pull images.

In you Gitlab `Admin area` create a new user `test-user` with `password` to use for containerd



!!! For local registry it is required to resolve the name

```bash
grep git /etc/hosts
172.27.103.113   git.zaraamad.ir registry.zaraamad.ir
```



Test the registry before configuring the configuration 

```bash
 sudo ctr image list
REF TYPE DIGEST SIZE PLATFORMS LABELS

sudo ctr --debug images pull \
	--plain-http \
  --user test-user1:yF6zUG976yRwO8Loc2Z+p3u \
  registry.zaraamad.ir:5005/zaraavand/rahtal-be:latest
  
sudo ctr image list
REF                                                  TYPE                                                 DIGEST                                                                  SIZE      PLATFORMS   LABELS
registry.zaraamad.ir:5005/zaraavand/rahtal-be:latest application/vnd.docker.distribution.manifest.v2+json sha256:3319e688ab43b14adc58c45ca38a30350628fac33db900a475e1f6c7612d0858 571.4 MiB linux/amd64 -
```



### Understanding the Configuration Structure

Containerd offers two primary methods for configuring registry access:

1. **Config Directory (`/etc/containerd/certs.d/`)**: A more modular approach, where each registry has its own configuration file in a structured directory.
2. **Single Configuration File** (`/etc/containerd/config.toml`)



### Method 1: The Modular Approach (Using `/etc/containerd/certs.d/`) 

generate a default configuration

```bash
sudo containerd config default | sudo tee /etc/containerd/config.toml > /dev/null
```



Now, create `/etc/containerd/certs.d/registry.zaraamad.ir:5005/hosts.toml` and add

```bash
sudo vim /etc/containerd/certs.d/registry.zaraamad.ir:5005/hosts.toml
server = "http://registry.zaraamad.ir:5005"

[host."http://registry.zaraamad.ir:5005"]
  capabilities = ["pull", "resolve"]
  skip_verify = true

  [host."http://registry.zaraamad.ir:5005".auth]
    username = "test-user1"
    password = "yF6zUG976yRwO8Loc2Z+p3u"
```



### Applying the Configuration and Testing

```bash
sudo systemctl restart containerd
sudo systemctl status containerd
```



### Method 2: The Single File Approach (Using `config.toml`)

generate a default configuration

```bash
sudo containerd config default | sudo tee /etc/containerd/config.toml > /dev/null
```



Now, edit `/etc/containerd/config.toml` and find the`[plugins."io.containerd.grpc.v1.cri".registry]` section.



```bash
version = 2

[plugins."io.containerd.grpc.v1.cri".registry]

  [plugins."io.containerd.grpc.v1.cri".registry.mirrors]
    [plugins."io.containerd.grpc.v1.cri".registry.mirrors."my-registry.local:5000"]
      endpoint = ["http://my-registry.local:5000"] # Define mirror endpoint as HTTP
    [plugins."io.containerd.grpc.v1.cri".registry.mirrors."private.registry.com"]
      endpoint = ["https://private.registry.com"]

  [plugins."io.containerd.grpc.v1.cri".registry.configs]

    [plugins."io.containerd.grpc.v1.cri".registry.configs."my-registry.local:5000".tls]
      insecure_skip_verify = true 

    [plugins."io.containerd.grpc.v1.cri".registry.configs."private.registry.com".auth]
      username = "myusername"
      password = "mysecretpassword"

```



### Applying the Configuration and Testing

```bash
sudo systemctl restart containerd
sudo systemctl status containerd
```



Test pulling an image from your HTTP registry:



```bash
sudo ctr image pull my-registry.local:5000/nginx:alpine
```



### Tshout

In your `config.toml`, add:

```bash
[debug]
  level = "debug"
```



Then restart Containerd and check the logs:

```bash
sudo journalctl -u containerd -f
```



## 


---
title: "How I Used CephFS to Sync NGINX Configurations Across Multiple Servers"
date: "2024-10-15"
summary: "A guide to synchronizing NGINX configurations across multiple servers using CephFS distributed file storage"
tags: ["cephfs", "nginx", "distributed-storage", "configuration-management", "load-balancing"]
category: "ceph"
---

# How I Used CephFS to Sync NGINX Configurations Across Multiple Servers

![CephFS and NGINX](https://miro.medium.com/v2/resize:fit:1000/1*nGE8kTAmiBU8f6Z-upTCMw.png)

> If you need a starting point, I explained how to create a CephFS volume on a fresh Ceph cluster in the following story:  
> [Set up, configure, and test Cephfs distributed file storage with proper permission management and...](https://medium.com/@hojat_gazestani/the-complete-cephfs-tutorial-for-2024-2d0e3d161fa4)

I've also created a YouTube video tutorial for this setup:  

[![Build a Content Delivery Network Using CephFS and NGINX](https://i.ytimg.com/vi/T0DW0Sd8yss/hqdefault.jpg)](https://www.youtube.com/watch?v=T0DW0Sd8yss)

All commands are available through my [GitHub](https://github.com/hojat-gazestani/openstack/blob/main/Ceph/octapus/08-cephfs-file-storage.md).

## 📡 Cluster Monitoring Commands
Here are monitoring commands to observe the health and state of ceph cluster and CephFS. These tools help you to keep an eye on the cluster status and changes.

```bash
ceph -w
watch ceph orch ps
watch ceph osd pool ls
watch ceph orch ls
```

## 📦 Create and Authorize CephFS Volume
Create a new CephFS volume `cephfs-nginx` and take a look at its status.

```bash
ceph fs volume create cephfs-nginx

ceph fs ls
ceph mds stat
ceph fs status
```
---

title: "Understanding Linux Special Permissions: SUID, SGID, and the Sticky Bit"
date: 2025-09-03
summary: "A clear guide to Linux's special permission bits - SUID, SGID, and Sticky Bit - and how to use them for system security and collaboration."
tags: ["linux", "permissions", "suid", "sgid", "sticky-bit", "bash", "command-line", "sysadmin"]
category: "Linux-Core"
---

## Table of Contents
1.  [Overview](#overview)
2.  [The SUID (Set User ID) Bit](#the-suid-set-user-id-bit)
3.  [The SGID (Set Group ID) Bit](#the-sgid-set-group-id-bit)
4.  [The Sticky Bit](#the-sticky-bit)
5.  [How to Set These Permissions](#how-to-set-these-permissions)
6.  [Numeric Notation Cheat Sheet](#numeric-notation-cheat-sheet)
7.  [Security Best Practices](#security-best-practices)


**🔔 Prerequisite Reading:** This article covers **special** Linux permissions. Before diving in, ensure you understand how the kernel uses Real, Effective, Saved, and Filesystem UIDs to manage permissions and security for processe, please read our foundational guide:
[**linux Read, Effective, saved, and Filesystem UID**](https://hojat-gazestani.github.io/articles/Linux-Standard-UNIX-Access-Control)




## Overview <a name="overview"></a>

In linux `SUID`, `GUID` or (`SGID`), and **sitcky bit** are **special permission bits** used to control **how files and directories behave**, specially with respect to **user/group privilege and deletion rules**.



### Summary Table

![stuid-setgid-stickybit-table](/ProjectPic/stuid-setgid-stickybit-table.png)



## The SUID (Set User ID) Bit <a name="the-suid-set-user-id-bit"></a>

When **a file is executed**, it runs with the **file owner's privileges, not the user who runs it**.

### How it Works

It changes the **effective UID and GID** of the resulting process to the UID or GID of the file containing the program image rather than the UID and GID of the user that ran the command.


### Example:

```sh
❯ ls -la /usr/bin/passwd
-rwsr-xr-x 1 root root 64152 May 30  2024 /usr/bin/passwd

```

+ The `s` in `-rws` means it's a `setuid` binary is set.

+ The owner is root, so anyone running passwd gets temporary root privileges to update the /etc/shadow file and change their password.





## The SGID (Set Group ID) Bit <a name="the-sgid-set-group-id-bit"></a>

When **a file is executed**, it runs with the **file owner's privileges, not the user who runs it**.

📍 Applies to: Executable files

🔍 Example:

```sh
ls -l /usr/bin/passwd
-rwsr-xr-x 1 root root 54256 Jul 15 13:00 /usr/bin/passwd
```

+ `s` in place of owner's `x` : **SUID is set**
+ Owner is `root`, so anyone running `passwd` gets **temporary root privileges** too update their password



📍**on files:**

+ Runs with **group's privileges **, not the user's

📍**On Directories:**

+ new files/directories created inside **inherit the group** of the parent dir (not the user's group)



🔍 Example:

Setting `SGID` for a shared directory

```sh
# Set SGID on a shared directory
sudo chmod g+s /shared
```



New files inside will belong to `developers ` group.

```
ls -ld /shared
drwxr-sr-x 2 root developers 4096 Jul 15 18:00 /shared
```

- The `s` in the group execute field (`r-s`) indicates the SGID bit is set.
- New files created in `/shared` will automatically belong to the `developers` group.





## The Sticky Bit <a name="the-sticky-bit"></a>

In shared directories (e.g `/tmp`), prevents users from **deleting other's files** , even if they have write permission on the directory.



📍 Applies to: Directories



🔍 Example:

```sh
ls -ld /tmp
drwxrwxrwt 10 root root 4096 Jul 15 18:00 /tmp
```

+ 
+ The `t` in the others' execute field (`rwt`) means the **sticky bit is set**.
+ Without it, any user could delete any file in `/tmp`. With the sticky bit, **only the file owner (or root)** can delete a file.



## How to Set These Permissions <a name="how-to-set-these-permissions"></a>



#### ✅ SUID

```sh
chmod u+s file
chmod 4755 file
```



#### ✅ SGID

```sh
chmod g+s file_or_dir
chmod 2755 file_or_dir
```



✅ Sticky Bit

```sh
chmod +t directory
chmod 1755 directory
```



## Numeric Notation Cheat Sheet <a name="numeric-notation-cheat-sheet"></a>



The special permissions are added as a fourth digit before the standard permission octal.

**Examples:![suid-guid-stickybig-table2](/ProjectPic/suid-guid-stickybig-table2.png)**



*   `chmod 4755 file` → SUID + rwxr-xr-x
*   `chmod 2755 dir` → SGID + rwxr-sr-x
*   `chmod 1755 dir` → Sticky Bit + rwxr-xr-t
*   `chmod 6755 file` → SUID + SGID (4+2=6)



## Security Best Practices <a name="security-best-practices"></a>

While powerful, these permissions can be a security risk if misconfigured.

- **Use SUID/SGID Sparingly:** Every SUID binary is a potential path to privilege escalation. Audit your system regularly with `find / -type f -perm /4000` (SUID) and `find / -type f -perm /2000` (SGID) to see what's set.
- **Prefer Groups over SUID:** Often, giving a group write permission to a directory (with `chgrp` and `chmod g+w`) is safer than setting SUID on a binary.
- **Ownership Matters:** The effectiveness of SGID depends on correct directory and file ownership. Always double-check the group owner (`chgrp`).
- **The Sticky Bit is Your Friend:** Always set the sticky bit (`chmod +t`) on world-writable directories like `/tmp` to prevent accidental or malicious file deletion.
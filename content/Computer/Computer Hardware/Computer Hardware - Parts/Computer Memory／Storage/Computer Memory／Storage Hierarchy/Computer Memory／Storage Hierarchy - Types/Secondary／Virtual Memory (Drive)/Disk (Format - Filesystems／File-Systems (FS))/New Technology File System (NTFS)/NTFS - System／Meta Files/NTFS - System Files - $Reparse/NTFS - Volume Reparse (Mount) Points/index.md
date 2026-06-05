---
publish: true
title: NTFS - Volume Reparse (Mount) Points
created: 2020-06-15T22:53:48.059-05:00
modified: 2020-06-15T22:59:09.607-05:00
---

###### Volume Reparse (Mount) Points

reparse points are similar to Unix Mount Points

![[Computer/Computer Hardware/Computer Hardware - Parts/Computer Memory／Storage/Computer Memory／Storage Hierarchy/Computer Memory／Storage Hierarchy - Types/Secondary／Virtual Memory (Drive)/Disk (Format - Filesystems／File-Systems (FS))/New Technology File System (NTFS)/NTFS - System／Meta Files/NTFS - System Files - $Reparse/NTFS - Volume Reparse (Mount) Points/ntfs-reparse-mount-points.png|301]]

directory on NTFS is actually a root of another volume

allows a directory tree to replace multiple drive letters

similar to multiple hard drives, CD/DVD ROM, and floppy drives as they appear as subdirectories on [[UNIX|Unix]] as a single tree: <span style="white-space: pre-wrap"><code>    /dev/hda</code><br><code>    /dev/hdb</code><br><code>    /dev/cdrom</code><br><code>    /dev/floppy</code></span>

Those same four devices would be appearing as C:, D:, E:, A:, respectively, on [[Windows]]

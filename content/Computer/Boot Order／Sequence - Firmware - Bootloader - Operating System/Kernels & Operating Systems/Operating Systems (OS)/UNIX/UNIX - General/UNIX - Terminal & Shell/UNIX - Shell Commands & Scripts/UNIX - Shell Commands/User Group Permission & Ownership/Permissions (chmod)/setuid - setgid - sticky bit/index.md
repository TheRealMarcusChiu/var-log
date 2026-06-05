---
publish: true
title: setuid - setgid - sticky bit
created: 2019-11-16T14:28:28.523-06:00
modified: 2019-11-16T14:46:22.472-06:00
---

the [[Ownership (chown)|ownership]] of files also depends on the <code>uid</code> (user ID) and the <code>gid</code> (group ID) of the creator. Similarly, when we launch a process, it runs with the <code>uid</code> and <code>gid</code> of the user who launched it.

# <strong>setuid - setgid</strong>This bit is present for files which have executable permissions. The <code>setuid</code> bit simply indicates that when running the executable, it will set its permissions to that of the user who created it (owner), instead of setting it to the user who launched it. Similarly, there is a <code>setgid</code> bit which does the same for the <code>gid</code>.

###### setuid

![[Computer/Boot Order／Sequence - Firmware - Bootloader - Operating System/Kernels & Operating Systems/Operating Systems (OS)/UNIX/UNIX - General/UNIX - Terminal & Shell/UNIX - Shell Commands & Scripts/UNIX - Shell Commands/User Group Permission & Ownership/Permissions (chmod)/setuid - setgid - sticky bit/chmod-setuid.png]]

###### setgid

![[Computer/Boot Order／Sequence - Firmware - Bootloader - Operating System/Kernels & Operating Systems/Operating Systems (OS)/UNIX/UNIX - General/UNIX - Terminal & Shell/UNIX - Shell Commands & Scripts/UNIX - Shell Commands/User Group Permission & Ownership/Permissions (chmod)/setuid - setgid - sticky bit/chmod-setgid.png]]

# <strong>sticky bit</strong>

When a directory has the sticky bit set, its files can be deleted or renamed only by the file owner, directory owner and the root user. The command below shows how the sticky bit can be set. <span style="white-space: pre-wrap"><code>chmod +t directory/</code></span>

![[Computer/Boot Order／Sequence - Firmware - Bootloader - Operating System/Kernels & Operating Systems/Operating Systems (OS)/UNIX/UNIX - General/UNIX - Terminal & Shell/UNIX - Shell Commands & Scripts/UNIX - Shell Commands/User Group Permission & Ownership/Permissions (chmod)/setuid - setgid - sticky bit/chmod-sticky-bit.png]]

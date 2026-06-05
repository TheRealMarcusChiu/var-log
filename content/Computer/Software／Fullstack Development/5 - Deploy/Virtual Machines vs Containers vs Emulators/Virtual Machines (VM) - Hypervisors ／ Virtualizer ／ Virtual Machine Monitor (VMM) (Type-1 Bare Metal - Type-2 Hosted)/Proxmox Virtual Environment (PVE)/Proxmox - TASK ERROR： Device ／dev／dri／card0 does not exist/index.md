---
publish: true
title: Proxmox - TASK ERROR： Device ／dev／dri／card0 does not exist
created: 2025-09-18T12:52:39.935-05:00
modified: 2025-09-18T12:55:36.807-05:00
---

# Problem

![[Computer/Software／Fullstack Development/5 - Deploy/Virtual Machines vs Containers vs Emulators/Virtual Machines (VM) - Hypervisors ／ Virtualizer ／ Virtual Machine Monitor (VMM) (Type-1 Bare Metal - Type-2 Hosted)/Proxmox Virtual Environment (PVE)/Proxmox - TASK ERROR： Device ／dev／dri／card0 does not exist/proxmox-error.png|900]]

# Solution

```
ssh into proxmox server
ls /dev/dri
# to see that no card0 exist and that card1 exists

# create a permanent symlink
vim /etc/udev/rules.d/99-my-gpu.rules

# add the following into that file
SUBSYSTEM=="drm", KERNEL=="card1", SYMLINK+="dri/card0"
# this line symlinks card0 to the existing card1
```

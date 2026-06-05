---
publish: true
title: Network Booting (NetBoot)
created: 2019-11-13T08:44:15.872-06:00
modified: 2023-04-21T18:46:00.681-05:00
---

###### Network Booting (NetBoot)

```excerpt
- is the process of booting, installing, and deploying an [[Operating Systems (OS)|operating system]] from a network rather than a [[Secondary／Virtual Memory (Drive)|local drive]]
```

^excerpt

# Typical Process

The initial software to be run is loaded from a server on the network; for [[Internet Protocol (IP)|IP]] networks this is usually done using the [[Trivial File Transfer Protocol (TFTP)]]. The server from which to load the initial software is usually found by broadcasting a Bootstrap Protocol or [[Dynamic Host Configuration Protocol (DHCP)|Dynamic Host Configuration Protocol (DHCP)]] request. Typically, this initial software is not a full image of the operating system to be loaded, but a small network boot manager program such as PXELINUX which can deploy a boot options menu and then load the full image by invoking the corresponding second-stage [[Boot Order／Sequence - Firmware - Bootloader - Operating System|bootloader]].

# Implementations

---
publish: true
title: NTFS - System Files - $MFT - Master File Table (MFT)
created: 2020-06-10T23:22:14.586-05:00
modified: 2025-06-10T16:36:11.648-05:00
---

###### Master File Table (MFT)

```excerpt
- is a database-like structured file internally named <code><font style="color: rgb(122,134,154);">\$MFT</font></code>
- contains a [[NTFS - MFT File Record／Entry|MFT record]] for every file and folder in the NTFS volume
- first 16 MFT records are reserved for NTFS metadata (i.e. [[NTFS - System／Meta Files|NTFS System Files]])
- when number of files grows, the size of the MFT increases
- when a file is deleted, the <code><font style="color: rgb(122,134,154);">\$MFT</font></code> entry is marked free (to be reused by a new file in the future)
```

^excerpt

# MFT - Diagram

![[Computer/Computer Hardware/Computer Hardware - Parts/Computer Memory／Storage/Computer Memory／Storage Hierarchy/Computer Memory／Storage Hierarchy - Types/Secondary／Virtual Memory (Drive)/Disk (Format - Filesystems／File-Systems (FS))/New Technology File System (NTFS)/NTFS - System Files - $MFT - Master File Table (MFT)/master-file-table.png]]

# MFT - Records

- each record is 1024 bytes in length
- see [[NTFS - MFT File Record／Entry|MFT File Record/Entry]] for more details

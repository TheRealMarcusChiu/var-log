---
publish: true
title: Error Detection - Internet Checksum
created: 2019-09-04T00:10:34.290-05:00
modified: 2019-09-04T00:11:09.767-05:00
---

- internet checksum idea:
  - data is separated into a sequence of 16-bit integers
  - the 16-bit integers are added together using 16-bit ones complement arithmetic
  - then take the ones complement of result
  - that 16-bit number is the [[Error Detection - Checksum|checksum]]
- not as good at detecting errors than CRC, but is used because it is easier to implement than CRC

  ignore the white 1s

![[Computer/Cryptography & Cryptanalysis/Error - Detection & Correction/Error Detection/Error Detection - Internet Checksum/2.png|706x400]]

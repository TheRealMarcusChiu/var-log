---
publish: true
title: Derivative of Logarithm Function
created: 2021-11-21T06:22:53.441-06:00
modified: 2021-11-21T06:48:54.257-06:00
---

- 𝑑(𝑙𝑜𝑔<sub>𝑎</sub>𝑥)/𝑑𝑥 = 1/(𝑥·𝑙𝑛(𝑎))

# Proof

Let us assume that:

- 𝑓(𝑥) = 𝑙𝑜𝑔<sub>𝑎</sub>𝑥

The derivative of a function 𝑓(𝑥) (which is denoted by 𝑓'(𝑥)) is given by the limit:

- 𝑓'(𝑥) = 𝑙𝑖𝑚<sub>ℎ→0</sub> \[𝑓(𝑥 + ℎ) - 𝑓(𝑥)] / ℎ
- 𝑓'(𝑥) = 𝑙𝑖𝑚<sub>ℎ→0</sub> \[𝑙𝑜𝑔<sub>𝑎</sub>(𝑥 + ℎ) - 𝑙𝑜𝑔<sub>𝑎</sub>(𝑥)] / ℎ
- 𝑓'(𝑥) = 𝑙𝑖𝑚<sub>ℎ→0</sub> \[𝑙𝑜𝑔<sub>𝑎</sub>\[(𝑥 + ℎ)/𝑥]] / ℎ<font style="color: rgb(122,134,154);"> # Using a property of logarithms: logₐm - logₐn = logₐ(m/n)</font>
- 𝑓'(𝑥) = 𝑙𝑖𝑚<sub>ℎ→0</sub> \[𝑙𝑜𝑔<sub>𝑎</sub>\[1 + (ℎ/𝑥)]] / ℎ
- 𝑓'(𝑥) = 𝑙𝑖𝑚<sub>𝑡→0</sub> 𝑙𝑜𝑔<sub>𝑎</sub>(1 + 𝑡) / 𝑥𝑡 <font style="color: rgb(122,134,154);"># ℎ = 𝑥𝑡 and ℎ→0, ℎ/𝑥→0 <strong>⇒</strong> 𝑡→0</font>
- 𝑓'(𝑥) = 𝑙𝑖𝑚<sub>𝑡→0</sub> \[1/(𝑥𝑡)]·𝑙𝑜𝑔<sub>𝑎</sub>(1 + 𝑡)
- 𝑓'(𝑥) = 𝑙𝑖𝑚<sub>𝑡→0</sub> 𝑙𝑜𝑔<sub>𝑎</sub>\[(1 + 𝑡)<sup>1/(𝑥𝑡)</sup>] <font style="color: rgb(122,134,154);"># using the property of logarithm, m·logₐa = logₐa<sup>m</sup></font>
- 𝑓'(𝑥) = 𝑙𝑖𝑚<sub>𝑡→0</sub> 𝑙𝑜𝑔<sub>𝑎</sub>\[\[(1 + 𝑡)<sup>1/𝑡</sup>]<sup>1/𝑥</sup>] <font style="color: rgb(122,134,154);"># using a property of exponents, a<sup>mn</sup> = (a<sup>m</sup>)<sup>n</sup></font>
- 𝑓'(𝑥) = 𝑙𝑖𝑚<sub>𝑡→0</sub> (1/𝑥)·𝑙𝑜𝑔<sub>𝑎</sub>\[(1 + 𝑡)<sup>1/𝑡</sup>] <font style="color: rgb(122,134,154);"># using the property of logarithm logₐa<sup>m</sup> = m·logₐ a</font>
- 𝑓'(𝑥) = (1/𝑥)·𝑙𝑖𝑚<sub>𝑡→0</sub> 𝑙𝑜𝑔<sub>𝑎</sub>\[(1 + 𝑡)<sup>1/𝑡</sup>] <font style="color: rgb(122,134,154);"># the variable of the limit is 𝑡. So we can write (1/𝑥) outside of the limit</font>
- 𝑓'(𝑥) = (1/𝑥)·𝑙𝑜𝑔<sub>𝑎</sub>\[𝑙𝑖𝑚<sub>𝑡→0</sub>(1 + 𝑡)<sup>1/𝑡</sup>]
- 𝑓'(𝑥) = (1/𝑥)·𝑙𝑜𝑔<sub>𝑎</sub>(𝑒) <font style="color: rgb(122,134,154);"># see </font>[[number e (Euler's number)|Euler's number]]
- 𝑓'(𝑥) = (1/𝑥)·\[1/𝑙𝑜𝑔<sub>𝑒</sub>(𝑎)]
- 𝑓'(𝑥) = 1/\[𝑥·𝑙𝑜𝑔<sub>𝑒</sub>𝑎]
- 𝑓'(𝑥) = 1/\[𝑥·𝑙𝑛(𝑎)]

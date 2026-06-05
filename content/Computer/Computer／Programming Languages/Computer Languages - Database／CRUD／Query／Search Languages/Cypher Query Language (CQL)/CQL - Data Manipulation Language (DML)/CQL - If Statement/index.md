---
publish: true
title: CQL - If Statement
created: 2021-06-16T22:52:48.171-05:00
modified: 2021-06-16T22:53:31.986-05:00
---

```
FOREACH ( ignoreMe in CASE WHEN n.age>20 THEN [1] ELSE [] END | merge (n) set n.status='deleted' );
```

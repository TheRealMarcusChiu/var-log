---
publish: true
title: Java - util - stream
created: 2020-12-21T16:08:21.023-06:00
modified: 2021-10-27T02:43:23.991-05:00
---

# Subpages

# Examples

```
String result = Stream.of(1,2,3)        // Stream<Integer>
        .filter(i -> i % 2 == 0)        // Stream<Integer>
        .findAny()                      // Optional<Integer>
        .map(i -> "FOUND")              // Optional<String>
        .orElseGet(() -> "NOT FOUND");  // String
```

# Resources

- <https://winterbe.com/posts/2014/07/31/java8-stream-tutorial-examples/>

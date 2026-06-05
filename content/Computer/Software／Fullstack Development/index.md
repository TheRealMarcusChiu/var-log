---
publish: true
title: Software／Fullstack Development
created: 2019-03-15T23:55:53.064-05:00
modified: 2021-09-21T02:18:04.871-05:00
---

- <https://martinfowler.com/>
- <https://www.artima.com/articles>

![[Computer/Software／Fullstack Development/software development cycle.png]]

# Tips

> [!expand]- Click here to expand... <span style="white-space: pre-wrap"><code>CREATE TABLE test (</code><br><code>  nonempty VARCHAR NOT NULL UNIQUE CONSTRAINT non\_empty CHECK(length(nonempty)>0)</code><br><code>)</code></span>
>
> - design schema first for all APIs and Events, Data Schema
>   - use both OpenAPI/Swagger and gRPC
>   - consume events (not API) by default)
>   - data
>     - change database to UTF-8
>     - consistent CHECKS, metadata
>     - enable a global feature like 'hash\_code' to minimize writes
> - invest in automation
>   - deployment, code generation, dependency management
> - enable teams to write amazing and simple tests
>   - drives quality, streamlines maintenance, enables continuous delivery
>
> ###### Back Pressure
>
> <https://medium.com/@jayphelps/backpressure-explained-the-flow-of-data-through-software-2350b3e77ce7>

# Subpages

- [[Git Strategies]]
- [Reducing Costs of HTTPS API AWS](https://gameanalytics.com/blog/reduce-costs-https-api-aws.html/amp)

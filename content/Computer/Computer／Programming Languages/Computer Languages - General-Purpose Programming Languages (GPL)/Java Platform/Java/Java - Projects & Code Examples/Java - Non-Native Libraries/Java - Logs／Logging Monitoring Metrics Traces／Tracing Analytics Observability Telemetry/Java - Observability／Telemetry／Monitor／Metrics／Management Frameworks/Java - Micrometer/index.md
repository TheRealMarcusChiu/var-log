---
title: "Java - Micrometer"
created: 2026-06-24T17:48:02.073-05:00
modified: 2026-06-24T17:53:58.751-05:00
parent: "[[Java - Observability／Telemetry／Monitor／Metrics／Management Frameworks]]"
children: []
---
###### Micrometer
````excerpt
- is a vendor-neutral "[[Facade Pattern|facade]]" for application metrics
- think of it as [[Java - Simple Logging Facade for Java (SLF4j)|SLF4J]], but for observability
- provides a standardized API to instrument your application code to track performance and behavior (like request rates, error counts, or method execution times)
- It prevents "vendor lock-in." You write your code once using the Micrometer API, and you can then send that data to any monitoring backend—such as [[Prometheus]], [[Grafana]], [[Datadog]], [[New Relic]], or [[Azure Monitor]]—simply by changing a configuration
````
^excerpt

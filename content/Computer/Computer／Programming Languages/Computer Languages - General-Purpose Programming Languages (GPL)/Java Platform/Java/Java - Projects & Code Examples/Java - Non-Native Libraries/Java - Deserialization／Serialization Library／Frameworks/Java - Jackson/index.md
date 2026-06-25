---
title: "Java - Jackson"
created: 2026-06-24T16:30:40.973-05:00
modified: 2026-06-24T16:33:51.830-05:00
parent: "[[Java - Deserialization／Serialization Library／Frameworks]]"
children:
  - "[[Java - Jackson 2 (Codehaus vs FasterXML) - ObjectMapper]]"
  - "[[Java - Jackson 3]]"
---
###### Jackson
````excerpt
- is the industry-standard suite of data-processing tools for Java. While it is most famous for being a high-performance JSON processor, it is actually a comprehensive framework for handling various data formats.
- at its core, Jackson serves as the bridge between Java’s static, object-oriented world and the flexible, text-based world of data formats like [[JavaScript Object Notation (JSON)|JSON]], [[Extensible Markup Language (XML)|XML]], [[YAML Ain't Markup Language (YAML)|YAML]], and CSV
````
^excerpt

# Version Differences

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Feature</strong>",
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Jackson 2.x</strong>",
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Jackson 3.x</strong>",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Java Baseline",
        "bg": "#F4F5F7"
      },
      "[[Java - Versions|Java 8]]",
      "[[Java - Versions|Java 17]]"
    ],
    [
      {
        "content": "Mapper",
        "bg": "#F4F5F7"
      },
      "Mutable <code><font style=\"color: rgb(122,134,154);\">ObjectMapper</font></code>",
      "Immutable <code><font style=\"color: rgb(122,134,154);\">JsonMapper</font></code> (via [[Builder Pattern|Builder]])"
    ],
    [
      {
        "content": "Exceptions",
        "bg": "#F4F5F7"
      },
      "[[Java - Throwable - Errors vs Exceptions - Unchecked vs Checked|Checked]] (<code><font style=\"color: rgb(122,134,154);\">IOException</font></code>)",
      "[[Java - Throwable - Errors vs Exceptions - Unchecked vs Checked|Unchecked]] (<code><font style=\"color: rgb(122,134,154);\">JacksonException</font></code>)"
    ],
    [
      {
        "content": "Package",
        "bg": "#F4F5F7"
      },
      "<code><font style=\"color: rgb(122,134,154);\">com.fasterxml.jackson</font></code>",
      "<code><font style=\"color: rgb(122,134,154);\">tools.jackson</font></code>"
    ],
    [
      {
        "content": "Java 8 Modules",
        "bg": "#F4F5F7"
      },
      "Separate dependencies",
      "Built-in"
    ]
  ],
  "tableStyle": "margin-left: 0.0px;"
}
```
# Subpages
- [[Java - Jackson 2 (Codehaus vs FasterXML) - ObjectMapper]]
- [[Java - Jackson 3]]

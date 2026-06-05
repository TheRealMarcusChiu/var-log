---
publish: true
title: Java - Spring - Property／Properties - @PropertySource @PropertySources
created: 2021-09-25T03:35:43.355-05:00
modified: 2021-09-25T03:47:44.194-05:00
---

# @PropertySource - Code Examples

```
@Configuration
@PropertySource("classpath:config.properties", ignoreResourceNotFound=true)
public class AppConfig {}
```

```
@Configuration
@PropertySource("file:${app.home}/app.properties")
public class AppConfig {}
```

# @PropertySources - Code Examples

```
@Configuration
@PropertySources({
	@PropertySource("classpath:config.properties"),
	@PropertySource("classpath:db.properties")
})
public class AppConfig {}
```

# Subpages

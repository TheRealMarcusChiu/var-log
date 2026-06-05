---
publish: true
title: Spring Data Neo4j (SDN) 5 - Custom Complex @Query Auto-Map POJO Objects
created: 2021-09-22T00:30:56.948-05:00
modified: 2021-09-28T00:33:15.049-05:00
---

# Problem Statement

Let's say we have the following data in Neo4j

![[Computer/Computer／Programming Languages/Computer Languages - General-Purpose Programming Languages (GPL)/Java Platform/Java/Java - Projects & Code Examples/Java - Non-Native Libraries/Java - Spring Family/Java - Spring Data/Java - Spring Data - Spring Data Modules (Builtin)/Java - Spring - Spring Data Neo4j (SDN)/Spring Data Neo4j (SDN) 5 - Custom Complex @Query Auto-Map POJO Objects/sdn5-complex-query-example.png|400]]

We want to return a person node along with:

- all the movies that person DIRECTED
- all the props for each DIRECTED movie
- <font style="color: rgb(255,0,0);">SHOULD NOT return any movies that person ACTED\_IN</font>

# Failed Solution (using Depth feature)

the simple solution is utilizing the depth feature

```
@Repository
public interface PersonRepository extends Neo4jRepository<Person, String> {

    Optional<Person> findByUuid(String uuid, @Depth int depth);
}
```

<font style="color: rgb(255,0,0);">This query FAILS because it also returns movies the person ACTED\_IN :\[</font>

# Solution (without using Depth)

```
@Repository
public interface PersonRepository extends Neo4jRepository<Person, String> {

    @Query("MATCH (p:Person {uuid: $uuid})-[d:DIRECTED]->(m:Movie)-[h:HAS]->(prop:Prop)" +
            " return p, collect(d), collect(hh), collect(m), collect(prop)")
    Optional<Person> getPersonWithDirectedMovies(String uuid);
}
```

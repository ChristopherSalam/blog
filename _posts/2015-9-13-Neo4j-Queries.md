---
layout: post
title: Neo4j Queries
tags:
- neo4j
---

[part 1](http://chrissalam.com/Try-Neo4j/) This is part 2 of a three part series. [part x]

<img src="portland.jpg"/>

Neo4J is a graph database and it specializes in showing relationships between each data nodes.You can checkout the final product of our one week of work here at <a href="http://six-dribbles.herokuapp.com">six-dribbles</a>. If you click on the about page, you can see some beautiful neo4j-d3 generated moving graphs. In this post I will teach you how to pull some of those images from a neo4j browser, using our (hopefully already installed) dataset!

The 2 commands we ran in part 1 brought all the data in as nodes then mapped relationships between them. Now we will explore the shortest path query, the golden gem of any six degrees of separation project. Throughout the process of this project, I found myself typing in Kobe and Lebron on loop to test the query. The moment the database produced the intended result it was like fireworks.

<br>

<img src="lbjkobe.png"/>

```sql
MATCH (p1:Player {name:"lebron james" }),
      (p2:Player{name:"kobe bryant" }),
       p = shortestPath((p1)-[*]-(p2)) RETURN 
       EXTRACT(n in nodes(p) | n.name), 
       EXTRACT(n in nodes(p) | n.year), 
       RELATIONSHIPS(p)
```

**MATCH** Is the powerful cypher statement that lets us join our information together and get back relationships.

**(p1:Player {name:"lebron james" }),** is the way we give cypher our starting point,
**(p2:Player{name:"kobe bryant" }),** is the end point,
**p = shortestPath((p1)-[*]-(p2))** is the key part of the query
**RETURN EXTRACT(n in nodes(p) | n.name),** tells us what to return once the match is made.
**EXTRACT(n in nodes(p) | n.year),** We like to use the name in the first query, 
**RELATIONSHIPS(p)** then years in the second, and relationships third.

The information comes back as three arrays with each bit of information in a particular spot, which we can render to the page.

**This is a stub... there's more to come**


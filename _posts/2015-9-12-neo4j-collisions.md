---
layout: post
title: neo4j collisions
tags:
- neo4j
- database
---

Six Dribbles has been hosting and serving people with their six degrees of separation for some time, however, we have been noticing a collision problem. We have had numerous short circuits on our shortest path query and the source of this error is something I'd call "name collision". Name collision in an SQL database is unlikely because of primary keys, however, in a graph database we don't have this luxury. In our database, we had a few culprits, one of the most notorious was Luke Jackson.

<img src="luke4.png"/>

It's pretty clear to me that Luke Jackson probably didn't play in 1969 and 2004. We probably have two people with the same name. Looking through the dataset confirms this thought. Below we have already changed the much older Luke Jackson to his full name, Lucious.

<img src="luke.png"/>

Greg Smith was another name that showed up twice and really interrupted some of our processing.

<img src="luke2.png"/>

Our solution was pretty simple, I went through the data and changed each to be another name that was fitting, either a full name from one player or an initial. None of these players were names I imagined being common queries. 

The next step was to remove all the data in the database at first and reload the players. I didn't do this at first, and no connections were repaired despite all my work. This was because the other nodes were still present, and duplicate nodes formed, making the database have nearly 80,000 nodes. The solution is remove all the data from the database and start over. The command to do that is here, cd into this folder: 

/usr/local/Cellar/neo4j/community-x.x.x-unix/libexec/data

and use this command:

rm -rf data/*

There is also a cypher command to do this but I find this a lot faster and easier. 

Then reload the data from the corrected CSV. If you go through the steps on this blog in part 1, that file has already been corrected. 

The results of the correction are significant.

Here's a Bob Cousy to James Harden before the change:

<img src="cous-hardenWrong.png"/>

After correcting the clash with Greg Smith, the query went from being a 4 node relationship to a 6 node relationship.

<img src="cous-hardenCORR.png"/>

Just for good measure, here's the longest shortest path query I've found yet. It's between George Mikan, one of the oldest players in the game and Dante Exum, one of the youngest.

<img src="danteMikan.png"/>

I'll be back soon to discuss adding a new node and relationship to the database: NBA Coaches!
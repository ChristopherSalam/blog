---
layout: post
title: /[RegExp]/osure
---

Here I will detail some sample uses of regular expressions to solve interview questions. I would not recommend attempting to solve problems during interviews using this approach, though I will admit I'm fascinated by this, and will enjoy trying to think about RegExp approaches to problems.

RegExp is something I immediately think of when the problem being asked of me involves string matching with a distinct pattern or something that could possibly be a pattern.

<img alt="Plaza Hotel NYC NYPL Digital Gallery. Licensed under Public Domain" src="https://upload.wikimedia.org/wikipedia/commons/6/61/Plaza_Hotel_NYC.jpg" />

```javascript
var plotSummary = 'As the summer progresses, Nick eventually..... receives an invitation to one of Gatsby\'s parties. Nick encounters Jordan Baker at the party, and they meet Gatsby himself, an aloof and surprisingly young man who recognizes Nick from their same division in World War I. Through Jordan, Nick later learns that Gatsby knew Daisy from a romantic encounter in 1917 and is deeply in love with her. He spends many nights staring at the green light at the end of her dock, across the bay from his mansion, hoping to one day rekindle their lost romance. Gatsby\'s extravagant lifestyle and wild parties are an attempt to impress Daisy in the hope that she will one day appear again at Gatsby\'s doorstep. Gatsby now wants Nick to arrange a reunion between himself and Daisy. Nick invites Daisy to have tea at his house, without telling her that Gatsby will also be there. After an initially awkward reunion, Gatsby and Daisy reestablish their connection. They begin an affair and, after a short time, Tom grows increasingly suspicious of his wife\'s relationship with Gatsby. At a luncheon at the Buchanans\' house, Daisy speaks to Gatsby with such undisguised intimacy that Tom realizes she is in love with Gatsby. Though Tom is himself involved in an extramarital affair, he is outraged by his wife\'s infidelity. He forces the group to drive into New York City and confronts Gatsby in a suite at the Plaza Hotel, asserting that he and Daisy have a history that Gatsby could never understand. In addition to that, he announces to his wife that Gatsby is a criminal whose fortune comes from bootlegging alcohol and other illegal activities. Daisy realizes that her allegiance is to Tom, and Tom contemptuously sends her back to East Egg with Gatsby, attempting to prove that Gatsby cannot hurt him.'

plotSummary.match(/(gatsby)/ig).length		   // --> 16
plotSummary.match(/(gatsby|daisy)/ig).length   // --> 24
plotSummary.match(/\d/g)	   // --> ["1", "9", "1", "7"]
plotSummary.match(/\d+/g)					   // --> 1917
plotSummary.match(/\w+/g).length			   // --> 308
```
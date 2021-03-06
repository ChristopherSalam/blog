---
layout: post
title: try regexp
tags:
- try
- regexp
---

I love regular expressions!

This post is part 1 in a 4 part series. Read the other posts:

Part 1 | **[Part 2 - O(r)](/O(r) "O dot R notation")** | **[Part 3 - regexp.js](/regexp.js "Using lookaheads to remove filetypes")** | **[Part 4 - Regexp at work](/regexp@work "RegExp at work")**

The meme itself is a regular expression in a way.

<div  style="text-align: center;">
<a href="http://www.catonmat.net/blog/recursive-regular-expressions/"><img src="yo-dawg-regex.jpg"></a>
</div>

New programmers seem afraid of regular expressions. I love these particular tools and wanted to offer  a full primer from abc to <a href="http://stackoverflow.com/questions/800813/what-is-the-most-difficult-challenging-regular-expression-you-have-ever-written"> ^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$ </a>. Regular expressions are a very old computer science concept that uses patterns to match subsets of strings. They are language agnostic, and can be a tool that you use for matching and modifying urls and other strings within your applications and for solving interview questions in a quirky manner.

In JavaScript, the regular expression is a distinct type of Object, and can be created with a literal or a new RegExp constructor. Regular expressions are encased with forward slashes, or /.

```javascript
  var es6 = new RegExp('es6')    // --> /es6/
  typeof es6                     // --> object
  es6 instanceof Object;         // --> true
  es6 instanceof RegExp;         // --> true
```

5 Native JavaScript functions use RegExp, so you've been using regular expressions this whole time for some time now! They are replace, search, match, exec, and test. Match is the most flexible and the primary one I use, but replace is also extremely useful. Both of these can be used globally or through the whole string, other wise Regular Expressions typically search until they find a match.

  --REPLACE--

```javascript
  "plains".replace(/i/, "");     // -->    "plans"
  "plains".replace(/in/,"nt");   // -->    "plants"
  "savannah".replace(/a/g,"A");  // -->    "sAvAnnAh"
```

  --SEARCH--

```javascript
  "island".search(/l/);          // -->     2
  "island".search(/nd/);         // -->     4
  "tundra".search(/[tr]/);       // -->     0
```

Search matches to first index and disregards the global tag. Brackets around any number of characters indicate optionality. [tr] means the same as t || r, in our case, it matched for the t in the zeroth index first, and never gets to find the fifth indexed r.

 --TEXT--

```javascript
  /s/.test('swamp')              // -->    ["s"]
  /S/i.test('swamp')              // -->    true;
```

The i flag used above is useful for case insensitive matching. Test is a useful function for quick checks as it returns true or false rather than a match object. A match object contains many special parameters but appears visually as an array, with brackets rather than curly braces.

--EXEC--

```javascript
  /(.+).jpg/.exec("swamp.jpg")[1] // -->    "swamp"
  /S/i.test('swamp')              // -->    true;
```

Execute is a function of any regexp pattern and will run a function with the parameter being the string to test. For match, the syntax is reversed, the string to match goes first and match is called on it with a pattern is it's parameter. Additionally exec is typically used to strip the file type from a file. The above example matches 'swamp.jpg' and 'swamp', but accessing the '1' key gave us just swamp by itself, which we can use.
What exactly is a complete match object?

 --MATCH--

```javascript
  "forest".match(/e/)             // -->    ["e"]
  "forest".match(/e/).index       // -->      3
  "forest".match(/e/).input       // -->    "forest"
  "taiga".match(/a/g)             // -->    ['a','a']
  "taiga".match(/a/g).index       // -->    undefined
  "taiga".match(/a/g).input       // -->    undefined
```

The match for a single or any other object is looks alot like an array. It is not. The match object is returned for single (i.e. non global matches that have found 2 or more matches) positive matches have a few hidden features. If you check the object keys, you will expose some of these features.

```javascript
  /mountain/.source               // --> "mountain"
  Object.keys("badlands".match(/a/))
  //   --> ["0", "index", "input"]
```

These keys are available to you as a object even though the result looks like array.
If you match to more than one item successfully, the object will lose this formatting.

<!-- ```javascript
  var quote = "Enter this palace-gate and ask the news of
  greatness fallen into dust and clay."
  quote.match(/(and)/)            ["and","and"]

Here I am using a group for the first time. The group (and) or /and/g will only return global matches for groups that are "and". Using /[and]/ would get you matches for a, n or d, and /and/g will get you all of them. /and/ will get you the first and in the string. -->


```javascript
  quote.match(/[and]/g);
  //   --> ["n", "a", "a", "a", "a", "n", "d",
  //        "a", "n", "a", "n", "a", "n", "n",
  //        "d", "a", "n", "d", "a"]
```

If I wanted to exactly an exact amount of letters, I could use a quantifier.

```javascript
  quote.match(/l{2,}/)            // --> ["ll"]
```

In addition to quantifiers here, I'm going to introduce metacharacters. These are some of the main tools I use on toy problems. Using \w or \w+ are metacharacters,


```javascript
  quote.match(/[A-Za-z]{5,}/g) or
  quote.match(/[A-Za-z0-9]{5,}/g) or
  quote.match(/[A-Za-z0-9_]{5,}/g) or
  quote.match(/\w{5,}/g)
  //   --> ["Enter" "palace", "greatness", "fallen"]
  quote.match(/\w{6,}/g)
  //   --> ["palace", "greatness", "fallen"]
  quote.match(/\w{7,}/g)          // --> ["greatness"]
```

You can find even more if you dig into it's constructor's keys.
You can search for all alphabetic characters in a range.

```javascript
  Object.keys(RegExp) -->
            ["input", "multiline", "lastMatch",
             "lastParen", "leftContext",
             "rightContext", "$1", "$2", "$3",
             "$4", "$5", "$6", "$7", "$8", "$9"]
```

<img alt="Plaza Hotel NYC NYPL Digital Gallery. Licensed under Public Domain" src="https://upload.wikimedia.org/wikipedia/commons/6/61/Plaza_Hotel_NYC.jpg" />


```javascript
var plotSummary = 'As the summer progresses, Nick eventually..... receives an invitation to one of Gatsby\'s parties. Nick encounters Jordan Baker at the party, and they meet Gatsby himself, an aloof and surprisingly young man who recognizes Nick from their same division in World War I. Through Jordan, Nick later learns that Gatsby knew Daisy from a romantic encounter in 1917 and is deeply in love with her. He spends many nights staring at the green light at the end of her dock, across the bay from his mansion, hoping to one day rekindle their lost romance. Gatsby\'s extravagant lifestyle and wild parties are an attempt to impress Daisy in the hope that she will one day appear again at Gatsby\'s doorstep. Gatsby now wants Nick to arrange a reunion between himself and Daisy. Nick invites Daisy to have tea at his house, without telling her that Gatsby will also be there. After an initially awkward reunion, Gatsby and Daisy reestablish their connection. They begin an affair and, after a short time, Tom grows increasingly suspicious of his wife\'s relationship with Gatsby. At a luncheon at the Buchanans\' house, Daisy speaks to Gatsby with such undisguised intimacy that Tom realizes she is in love with Gatsby. Though Tom is himself involved in an extramarital affair, he is outraged by his wife\'s infidelity. He forces the group to drive into New York City and confronts Gatsby in a suite at the Plaza Hotel, asserting that he and Daisy have a history that Gatsby could never understand. In addition to that, he announces to his wife that Gatsby is a criminal whose fortune comes from bootlegging alcohol and other illegal activities. Daisy realizes that her allegiance is to Tom, and Tom contemptuously sends her back to East Egg with Gatsby, attempting to prove that Gatsby cannot hurt him.'

plotSummary.match(/(gatsby)/ig).length       // --> 16
plotSummary.match(/(gatsby|daisy)/ig).length   // --> 24
plotSummary.match(/\d/g)     // --> ["1", "9", "1", "7"]
plotSummary.match(/\d+/g)            // --> 1917
plotSummary.match(/\w+/g).length         // --> 308
```

I'm interested in wrting more about regular expressions, and I hope you appreciated that this started at the absolute beginning. There's a few other links that I've found that have helped me get really into regexp and I've included them here. <a target="_blank" href="http://bjorn.tipling.com/state-and-regular-expressions-in-javascript"> This is a javascript specific link that goes into lots of detail inner functionality. </a> To answer the bigger question of why should I bother learning regular expressions, here's a helpful link that shows some of the most commonly used regexp that are used  <a target="_blank" href="http://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149"> for validation.</a> <a target="_blank" href="http://geniuscarrier.com/common-regular-expressions-in-javascript/" > Here's a similar link.</a>

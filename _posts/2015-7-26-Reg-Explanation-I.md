---
layout: post
title: /[RegExp]/lanation 
---
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

 --EXEC--&--TEXT--

```javascript
  /S/i.exec('swamp')              // -->    ["s"]
  /S/i.test('swamp')              // -->    true;
  / /.exec('underground sea')     // -->    [" "]
```

The i flag used above is useful for case insensitive matching. Exec and Test are similar functions that are native to a regex object, exec similar to search in that global checks are ignored, and test returning simply true and false rather than a complete match object.  What exactly is a complete match object?

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

```javascript
  var quote = "Enter this palace-gate and ask the news of
  greatness fallen into dust and clay."
  quote.match(/(and)/)            // --> ["and","and"]
```

Here I am using a group for the first time. The group (and) or /and/g will only return global matches for groups that are "and". Using /[and]/ would get you matches for a, n or d, and /and/g will get you all of them. /and/ will get you the first and in the string.

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

<a target="_blank" href="http://bjorn.tipling.com/state-and-regular-expressions-in-javascript"> Helpful link </a>

<a target="_blank" href="http://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149"> Helpful link 2 </a>

<a target="_blank" href="http://geniuscarrier.com/common-regular-expressions-in-javascript/" >  Helpful link 3 </a>
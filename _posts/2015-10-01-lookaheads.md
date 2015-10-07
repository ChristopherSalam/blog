---
layout: post
title: lookaheads(?:\.js)
tags:
- regexp
- javascript
---

**<a href="http://demesheo.github.io/">Demesheo Wilson II</a>** approached me with help on a regexp problem which was a very small part of the for the project his team was working on called **<a href="http://gogitit.co/">Go Git it!</a>**, which keeps track of the JavaScript frameworks people are using. He needed to match the js files that he parsed through in index.html files and in package.json files. A pretty reasonable enough challenge!

I immediately thought the solution was going to involve a regexp technique I was not that familiar with called lookaheads. Lookaheads are a rarely used **<a href="http://www.maratbn.com/blogs/2011/04/12/regex-lookaheads-str-len/" target="_blank">feature of the regular expression syntax </a>**, but seemed to be a good way to approach this problem to start. The concept is this, first the regexp matches the lookahead value, then proceeds to match for the rest of the desired search quantity. If the first match doesn't happen, the second match is not needed. 

Here's the case Demesheo presented to me: how do I read a javascript framework such as react.js from a index.html?

```html
react.js
```

If you've never used **<a href="http://regexr.com/">regexr</a>**, now's a good time.

```html
we want to use react.js
```

Ideally, we just want the word react from the above sentence.

```javascript
/\w+(?:\.js)/g
```

 will help me look through a code snippet and pull out the framework name needed. \w+ looks for all the words going before the .js, the ?:\.js looks for anyword that ends that way. One of the first problems I notice with this method did not pick up all the different queries everyone is making. What about a CDN for a minified JS?

 ```javascript
https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js
 ```

This is fine for bringing in the libraries but now the regular expression doesn't work. Our solution and pick your battles wisely.

**This is a stub... there's more to come**
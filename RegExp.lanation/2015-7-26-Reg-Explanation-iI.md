---
layout: post
title: (RegExp)lanation  part II
---

I wanted to start off this part of the tutorial by saying succinctly and firmly that I believe using regular expressions are often more time complex, certainly less intuitive, and often only effective for niche situations when it comes to solving coding challenges and interview questions... however, I am still fasincated with it. Here are some explanations of recent approaches.

```javascript
var firstNonRepeatedCharacter = function (string) {
  var i;
  for (i = 0; i < string.length; i++) {
    //begin travelling through each member of the string
    //create a checking string for each character, and search globally
    if (string.match(new RegExp(string[i], 'g')).length === 1) {
      // if any match produces exactly one answer, it's perfect.
      return string[i];
    }
    // if none of them do, i.e. all singletons or multiples
  } return "none";
};
```

Write a function `f(a, b)` which takes two strings as arguments and returns a string containing the characters found in both strings (without duplication), in the order that they appeared in `a`. Remember to skip spaces and characters you have already encountered!
Example: commonCharacters('acexivou', 'aegihobu')
Returns: 'aeiou'

Extra credit: Extend your function to handle more than two input strings.

```javascript
var commonCharacters = function (string1, string2) {
  var myReg = new RegExp('[' + string1 + ']', 'g'), // regExp
    set = string2.match(myReg),
    setUniq = {}; //this loop removes duplicates in the solution
    for (var key in set) { setUniq[set[key]] = true; };
    return Object.keys(setUniq).join('')
};

var commonCharacters = function () {
  var strings = Array.prototype.slice.call(arguments, 1), //extra credit
    myReg = new RegExp('[' + arguments[0] + ']', 'g'), // regExp
    setUniq = {}, //duplicates
    set; // extra credit, first for loops througb string2 to stringx...
    for (var i in strings) { set = strings[i].match(myReg).join('');  }
    //this loop removes duplicates in the solution
    for (var key in set) { setUniq[set[key]] = true; };
    return Object.keys(setUniq).join('')
};
```


```javascript
var longestRun = function (string) {
  var length,
    targetIndex = null;
  for (var i = 0; i < string.length; i++) {
    var reg = new RegExp(string[i]+ '{2,}')
    if (string.match(reg)) {
      length = string.match(reg)[0].length - 1;
      targetIndex = string.match(reg).index + 1;
    };
  }
  return (targetIndex === null) ? [0, 0] : [targetIndex, targetIndex + length];
};
```

```javascript
var longestRun = function (string) {
  var theRun = string.match(/([a-zA-Z])\1{1,}/);
  return (theRun === null) ? [0, 0] : [ theRun.index, theRun[0].length ];
};
```
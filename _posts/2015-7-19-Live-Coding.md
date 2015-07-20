---
layout: post
title: Live Coding
---

In in my few weeks in Telegraph Academy, I've discovered I learn best from live coding. <a href="https://en.wikipedia.org/wiki/Live_coding" target="_blank">Live coding</a> is a programming practice centered on the use of improvising interactive programming. Rather than slides or contrived exercises or doing the problem myself, it helps to see that a quote-enquote professional programmer also makes typos, forgets keywords, and needs a moment to look at documentation. Live coding also helps me establish patterns to look for and methods of approaching the problem. <br /><br />For example, I have been struggling with the concept of call, apply, and bind and a snippet of live coding in class went a long way towards demistifying it for me. Open your console and try this out: <br /><br />

```javascript
var alice = {teeth:"dirty"};
```
Alice is a javaScript object with dirty teeth. She needs to brush, and we've decided this needs to be method of Alice.

```javascript
alice.brush = function () { this.teeth = "clean"; }
```
90% of the time 'this' refers to the object to the left of the dot during the invocation of the function, meaning for us, alice.

```javascript
alice.brush()
alice --> 
			Object {teeth: "clean"}
```
This will change the teeth property of the alice object. What if we wanted to change the condition of alice's teeth without using a native method? Let's bring in mouthwash.

```javascript
mouthwash = function () { this.teeth = "clean"; }
```
Calling alice.mouthwash() will not work anymore. Mouthwash is not available to alice, and the this is not targeting alice, it is incorrectly targetting the window. We can use either the method **call** or **apply** to reset this, and make it target the first argument of call or apply. Assuming alice's teeth have been reverted to dirty:

```javascript
mouthwash.call (alice) // or mouthwash.apply (alice) 
alice -->
			Object {teeth: "clean"}
```
There's more good things that happen with **call** and **apply**, they allow us to add arguments. Call let's us additional arguments as additional parameters. Here's an example using flavored mouthwash: 

```javascript
flavoredMouthwash = function (isCoolMint, isSoftMint) { 
  this.teeth = (isCoolMint) ? "cool mint clean" : (isSoftMint) ? "soft mint clean" : "clean" }
}
flavoredMouthwash.call(alice, true); -->
			Object {teeth: "cool mint clean"}
flavoredMouthwash.call(alice, null, true); -->
			Object {teeth: "soft mint clean"}
```
Call lets us capture our arguments from the function and apply them as arguments following the redirected "this". Apply is a similar function that lets us capture the arguments of our function.
```javascript
potentMouthwash = function() {
var howClean = ""
    for (var i in arguments) {
      console.log("swish");
      howClean = howClean + "very "
    } 
  this.teeth = howClean + "clean";
}
```
 The arguments of a function is an array-like object which keeps track of all the additional information passed in at call time. For us, using potentMouthwash, this will keep track of how much extra work the mouthwash will do.

 ```javascript
 potentMouthwash.apply(alice,["extra","extra","extra"]) -->
 			(3) swish
 alice -->
 			Object {teeth: "very very very clean"}
```
<br /><br />
I will return shortly to discuss bind...
<br /><br />
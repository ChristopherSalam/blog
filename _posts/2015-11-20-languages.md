---
layout: post
title: languages
tags:
- intro
---

**Even if we all speak a different language we find a way to communicate**

<img src="notes.jpg" alt="">

<a href="http://fizzed.com/oss/font-mfizz">The cool icons you see on this page can be found here.</a>

I am preparing for software engineering interviews outside of JavaScript ( <i class="icon-javascript-alt"></i>).

**[Links for job seekers](/job-seekers "Qualitative Language Characteristics")** | Languages

While attending a <i class="icon-javascript-alt"></i> bootcamp you do run into a bit of the dogma surrounding <i class="icon-javascript-alt"></i> as the *<i class="fa fa-quote-left"></i> Language of the Future <i class="fa fa-quote-right"></i>*.

That's all fine and dandy and perhaps true to some extent, but low and behold we live in the present. And in the present, I've got these annoying interviews asking me about the other languages.

So I've started work on them. Some questions deal with whether language is interpreted and compiled.

*Compiled vs. Interpreted Languages.*

This is a pretty common question so let's be somewhat exhaustive.

**Compiled languages require a compiler (a translator) that convert source code into machine code pre-runtime.**

Examples of compiled languages include all <i class="icon-c"></i> family languages, such as <i class="icon-c"></i>,
<i class="icon-csharp"></i> (*which compiles to Intermediary Language (IL) then is just-in-time (JIT) compiled to Assembly language*), Objective-C <i class="icon-objc"></i>, D,
Erlang <i class="icon-erlang"></i>, Go, Haskell <i class="icon-haskell"></i>, Java <i class="icon-java-bold"></i>, Lisp (can be both), Scala <i class="icon-scala"></i>, and Swift in addition to the ones on **<a href="https://en.wikipedia.org/wiki/Compiled_language">this list</a>**.

Advantages of Compiled Languages

* (1) They run very quickly, as opposed to translated/interpretation.
* (2) Opportunity to apply powerful optimizations during the compile stage.

Disadvantages of Compiled Languages

* (1) Writing a compiler is difficult.
* (2) Code can't be run without compilation

**Interpreted or scripted languages have instead of a compiler the ability to process the language on the machine and the code is read step by step.**

Advantages of  Interpreted/Scripted Languages

* (1) Platform independent, i.e. being standalone.
* (2) Reflection, which means you can use the language to inspect and fix itself.
* (3) Dynamic typing which means that types can be set at runtime.
* (4) **<a href="https://en.wikipedia.org/wiki/Scope_(computer_science)#Dynamic_scoping">Dynamic scoping which I'm going to leave to wikipedia</a>**
* (5) Generally a smaller executable program size.

Disadvantages of Interpreted/Scripted Languages

* (1) Bugs from a lack of static type-checking
* (2) Susceptibility to code injection attacks
* (3) Slower execution except where JIT takes place
* (4) Can be read and copied in the case of commercial advantages (bleh)

Examples of Intrepreted Languages are <i class="icon-javascript"></i> and other languages in the EMCAscript tree (like ActionScript, JScript). This is understanding that <i class="icon-javascript"></i> doesn't have to be interpreted. Chrome uses compiled just-in-time(JIT), Perl <i class="icon-perl"></i>, PHP <i class="icon-php"></i>, Python <i class="icon-python"></i>, Lisp (can be both), Ruby <i class="icon-ruby"></i>, and R and the **<a href="https://en.wikipedia.org/wiki/Interpreted_language">other languages</a>** here.

HTML <i class="icon-html"></i> is the markup language most web pages and applications have some small bit of. Angular began a process of creating special unique <i class="icon-html"></i> elements, but d3 and other <i class="icon-javascript"></i> frameworks were making <i class="icon-svg"></i> and other elements on the page prior to that. New frameworks such as React don't even use <i class="icon-html"></i> or the DOM until reading a <i class="icon-javascript"></i> object containing all information of what should be in the DOM (the Shadow DOM) and that allows diff evaluations to take place such that only the changes to the Shadow DOM will be rendered to the DOM.

**This is a stub, there's more coming**

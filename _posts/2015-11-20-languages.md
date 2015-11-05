---
layout: post
title: languages
tags:
- intro
- javascript
---

**Even if we all speak a different language we find a way to communicate**

<img src="notes.jpg" alt="">

Preparing for software engineering interviews:

**[Links for job seekers](/job-seekers "Qualatative Language Characteristics")** | Languages

While attending a JavaScript bootcamp you do run into a bit of the dogma surrounding JavaScript as the...

*quote Language of the Future endquote*.

That's all fine and dandy and perhaps true to some extent, but low and behold we live in the present. And in the present, I've got these annoying interviews asking me about the other languages.

So I've started work on them. Some questions deal with whether language is interpreted and compiled.

*Compiled vs. Interpreted Languages.*

This is a pretty common question so let's be somewhat exhaustive.

**Compiled languages require a compiler (a translator) that convert source code into machine code pre-runtime.**

All C family languages, such as C,
C#, which compiles to Intermediary Language (IL) then is just-in-time(JIT) compiled to Assembly language.,
Objective-C, D.
Erlang, Go, Haskell, Java, Lisp, Scala, Swift in addition to the ones on **<a href="https://en.wikipedia.org/wiki/Compiled_language">this list</a>**.

Advantages of Compiled Languages

They run very quickly, as opposed to translated/interpretation.
Opportunity to apply powerful optimizations during the compile stage.

Disadvantages of Compiled Languages

Writing a compiler is difficult.
Code can't be run without compilation

**Interpreted languages have instead of a compiler the ability to process the language on the machine and the code is read step by step.**

Advantages

Platform independent, i.e. being standalone.
Reflection, which means you can use the language to inspect and fix itself.
Dynamic typing which means that types can be set at runtime.
**<a href="https://en.wikipedia.org/wiki/Scope_(computer_science)#Dynamic_scoping">Dynamic scoping which I'm going to leave to wikipedia</a>**
Generally a smaller executable program size.

Disadvantages

Bugs from a lack of static type-checking
Susceptibility to code injection attacks
Slower execution except where JIT takes place
Can be read and copied in the case of commercial advantages (bleh)

JavaScript (and EMCAscript, ActionScript, JScript). This is understanding that JS doesn't have to be intepreted. Chrome uses compiled just-in-time(JIT), Perl, PHP, Python, Lisp, Ruby, and R and the **<a href="https://en.wikipedia.org/wiki/Interpreted_language">other languages</a>** here.

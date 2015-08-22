---
layout: post
title: Live Coding II
tags:
- js
---

Tonight, I watched <a href="http://alicekamada.github.io/" >Cassandra's</a> talk on functional programming, and I got pretty excited about currying, composing, and piping functions. I wanted to live code some practical examples, as I must admit it took seeing this several times for me to really wrap my head around this topic and I hope this helps!

I would recommend going to Ramda.js's website and pulling up a console there. Another option would be to npm install ramda and try these functions there. If you use sublime and do not have a JS build system, try this link from my classmate <a href="http://jdlawrence.github.io/javascript/closures/2015/08/03/console-inside-sublime-text.html">Jamil</a>. You can also grab it from CDN via

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/ramda/0.17.1/ramda.min.js"></script>
```

<!-- Anyways, we had a toy problem earlier in the program that asked us to write the functions for piping and composing functions. A pipe function asked us to create a function such that 

```javascript
var newfunc =  R.pipe(func1, func2, func3)
```

where the newfunc(args_provided_to_function_one) =  -->
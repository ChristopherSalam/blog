---
layout: post
title: job seekers
tags:
- tips
---

new Software Engineering Job Seekers: So you've finally started to look for a job or have a job already. Great! This is only the beginning of the journey...

#Continuing Education

## &nbsp; &nbsp; 1. Dive into your next role.

The worst thing you can do is be worried about your next step before doing a great job where you are. Dive into it and be excited about coming to work everyday. If you can't find some aspect about your current place that you love and get excited about, it won't change at a different job.

## &nbsp; &nbsp; 2. Continue to learn

Another trap is to be complacent. This is a tough job but there barriers to entry are really low. Don't think that you can stop learning. I've experienced this firsthand. Since getting hired it can be tough to bring yourself to have the energy afterwork to read, learn, and blog more, but please push yourself. I've been reading books, such as 'Cracking the Coding Interview', 'Programming Pearls', and Data Structures and Algoriths in Python, to prepare for my future and to keep learning.

## &nbsp; &nbsp;  3. Contribute to open source

Contributing to open source is even better than resume, it shows that you love what you work on enough to work on it after work. I've been excited about maintaining my open source repos and adding features and helping document tools I've started to use already.

## &nbsp; &nbsp;  4. Attend groups and meetups

Since beginning to work, another trap is to go home and not take advantage of the great meetups and cultures available locally. You can meet great connections for future jobs as well as interesting people at meetups. I've gotten interviews, ones I certainly wasn't qualified for, simply by walking up to people at groups, inviting yourself to dinner, and making myself a part of the network.

#Finding jobs

One of the most interesting and helpful aspects of the coding bootcamp process is that there are plenty of job resources and people that you can connect to instantly. I was hired where I work now primarily from within this network (from one of my cohort friends in fact) so it always pays to be kind and on good terms with all your connections.

## &nbsp; &nbsp;  1. Really dig deep into your own network.

Did deep. Every person you've ever met will need to be called upon throughout the process. I've been talking to many of the friends I had in college and graduate school, and many have been crucial to getting me interviews and helping me pursue opportunities. Be open with your needs and remember to thank them and let them know when you find something and return the favor.

### &nbsp; &nbsp; &nbsp; &nbsp;  a. Run each company through Linkedin and see who you know there, and directly ask for help.

I've often had the experience where I've never heard of a company, then ran the company through linkedin, and found that someone I know works there. The moment I've contacted my friend there, they were happy to help, even though we had not talked for years. Ultimately, I think people are happy to spread real opportunity and get people they are comfortable with rather than hit the open market. One ancedote I think of immediately is I had a friend mention shortly after they post a job nearly 150 resumes come within a day, but only 3 were through referral, and all three were indeed better suited, got interviews, and one was chosen. Be one of the three recommended. I can tell you that of my interviews and offers, a super majority of them came when I asked someone on the inside.

## &nbsp; &nbsp;  2. Expand your own network.

Recently after accepting a job offer, I proceeded to go into San Francisco, and meet with three people working at three different companies simply to discuss what they were doing and learn more about them. I told them I had a gig, and learned a bunch of the stuff I'm writing here. Addtionally, I had the chance to turn the tables and interview them. This may be optimistic, but in all honesty I don't think the companies like interviewing the way they do anyways. Some of the people I talked to mentioned that their subsequent jobs were offered through more informal interview means, and I think it makes a lot of sense.

## &nbsp; &nbsp;  3. Pay it forward.

Remember how hard your job search was when people come down the pipeline. I've met quite a few former bootcamp students as well as classically trained engineers and it's remarkable how quickly people can forget when they needed help and how they got to where they got. I will not and I intend to help as many people learn this industry. Ultimately, social networks are a tyranny ruled by it's weakest member (<a href="http://izquotes.com/quote/385182">appropriated from Shaw</a>).

## &nbsp; &nbsp;  4. Take a good offer. There may not be a great offer coming.

I have interviewed at big companies, at Github, at Uber, and Youtube, as well as numerous smaller companies. I utlimately chose Ziploop, the company I work for now, primarily because of the optimization of opportunity (Ziploop, where I'm the 4th engineer, gave me the opportunity to work fullstack from day one, and learn an entire codebase), as well as it was the only offer I had. I would recommend to anyone looking to take the offer they have, it's better to be working than looking, and I think you'll find great things about each opportunity. Breaking through to the first job is the hardest leap and it will be very tough for most.

#Preparing for software engineering interviews:

Links for job seekers | **[Language characteristics](/languages "Qualitative Language Characteristics")**

I wanted this space to be a location where I could post all the things that I'm reading as I prepare for my interviews... there has been a significant amount of preparation especially since many of the large companies I'm targeting really are steeped into deep computer science interview questions, so much so that even company representatives and my friends on the inside have been slipping me leads to get a chance. Here is a brief collection:

<!-- load the d3.js library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js" charset="utf-8"></script>
<div id="diagram"></div>

<script>

var treeData = [
{ "name": "Job Links", "site": "https://news.ycombinator.com/item?id=10492086", "children":[
  { "name": "meltdown", "site": "http://www.globalnerdy.com/2013/10/19/i-has-the-dumb-or-how-i-embarrassed-myself-in-my-interview-with-google/" },
  { "name": "recursion", "site": "http://ruckt.info/how-to-implement-a-recursive-algorithm/", "children": [
    { "name": "SASS vs LESS", "parent": "https://gist.github.com/chriseppstein/674726"},
    { "name": "Globals?", "site": "https://www.google.com/search?q=What%E2%80%99s+the+difference+between+local+and+global+variables%3F&oq=What%E2%80%99s+the+difference+between+local+and+global+variables%3F&aqs=chrome..69i57j0l5.740j0j7&sourceid=chrome&es_sm=91&ie=UTF-8", "children": [
      { "name": "140 ?", "site": "http://www.impactinterview.com/2009/10/140-google-interview-questions/" },
      { "name": "Java MC", "site": "http://www.dynatrace.com/en/javabook/how-garbage-collection-works.html" }
      ]
    },
    { "name": "Memory", "site": "https://en.wikipedia.org/wiki/Memory_management#HEAP" }
    ]
  },
  { "name": "Dead Beef", "site": "http://stackoverflow.com/questions/2907262/what-does-dead-beef-mean" }
  ]
},
{ "name": "Sundries", "site": "https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95#.sb8fvdn5t", "children": [
  { "name": "Big O", "site": "http://bigocheatsheet.com/" },
  { "name": "Cheat Sheet", "site": "https://gist.github.com/TSiege/cbb0507082bb18ff7e4b", "children": [
    { "name": "QuickSort >", "site": "http://cs.stackexchange.com/questions/3/why-is-quicksort-better-than-other-sorting-algorithms-in-practice" },
    { "name": "Web Security", "site": "http://greendark-team.blogspot.com/2011/04/web-browser-security-models.html", "children": [
      { "name": "When you...", "site": "https://github.com/alex/what-happens-when" },
      { "name": "When you...2", "site": "http://www.glassdoor.com/Interview/What-happens-when-you-type-www-google-com-in-your-browser-QTN_56396.htm" },
      { "name": "Thrds vs Prcs", "site": "http://stackoverflow.com/questions/200469/what-is-the-difference-between-a-process-and-a-thread" },
      { "name":"Clients", "site": "http://www.geekinterview.com/Interview-Questions/Networking/Client-Server-Computing" }
      ]
    },
    { "name": "Min Cost Path", "site": "http://www.geeksforgeeks.org/dynamic-programming-set-6-min-cost-path/" }
    ]
  },
  { "name":"MALLOC", "site": "http://stackoverflow.com/questions/2308751/what-is-a-memory-heap" }
  ]
},
{ "name": "CS Prep", "site": "http://www.google.com/about/careers/lifeatgoogle/hangout-on-air-tech-interviewing.html", "children": [
  { "name": "Get that job", "site": "http://steve-yegge.blogspot.com/2008/03/get-that-job-at-google.html" },
  { "name": "Dev Rel", "parent": "https://medium.com/google-developers/why-do-we-pay-these-people-anyway-d7ed706d6d55", "children": [
    { "name": "Competency", "site": "https://medium.com/google-developers/the-core-competencies-of-developer-relations-f3e1c04c0f5b"},
    { "name": "node-neo4j", "parent": "#neo4j" }
    ]
  },
  { "name": "Dev Rel", "parent": "https://medium.com/google-developers/why-do-we-pay-these-people-anyway-d7ed706d6d55" }
  ]
},
{ "name": "Practice", "site": "#javascript", "children": [
  { "name": "Euler's", "site": "https://projecteuler.net/"},
  { "name": "#paths", "site": "#structures", "children": [
    { "name": "matrix paths", "site": ""},
    { "name": "Caches", "site": "https://en.wikipedia.org/wiki/Cache_algorithms", "children":[
      { "name": "Structures", "site": "http://www.thatjsdude.com/interview/linkedList.html"},
      { "name": "NP Complete", "site": "http://c2.com/cgi/wiki?NpComplete"},
      { "name": "Final,ly,ize", "site": "http://stackoverflow.com/questions/7814688/in-java-what-purpose-do-the-keywords-final-finally-and-finalize-fulfil" }
      ]
    },
    { "name": "array paths", "site": "#structures" }
    ]
  },
  { "name": "Career Cup", "site": "http://www.careercup.com" }
  ]
},
{ "name": "Stack v Heap", "site": "http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html", "children": [
  { "name": "Semaphore", "site": "http://jacopretorius.net/2010/12/google-interview-questions-and-answers.html" },
  { "name": "Sorting", "site": "http://www.sorting-algorithms.com/", "children": [
    { "name": "QuickSort >", "site": "http://cs.stackexchange.com/questions/3/why-is-quicksort-better-than-other-sorting-algorithms-in-practice" },
    { "name": "Shortest Path", "site": "https://en.wikipedia.org/wiki/Shortest_path_problem", "children":[
      {"name": "More BST", "site": "http://khan4019.github.io/front-end-Interview-Questions/bst.html"},
      {"name": "BST", "site": "http://khan4019.github.io/front-end-Interview-Questions/bst.html"}
      ]
    },
    { "name": "MALLOC", "site": "http://stackoverflow.com/questions/2308751/what-is-a-memory-heap" }
    ]
  },
  { "name":"Mutex", "site": "http://jacopretorius.net/2010/12/google-interview-questions-and-answers.html" }
  ]
},
{ "name": "Trees", "site": "http://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393", "children": [
  { "name": "BST", "site": "https://en.wikipedia.org/wiki/Binary_search_tree"},
  { "name": "JS BST", "site": "https://gist.github.com/trevmex/821973", "children": [
    { "name": "LCA C++", "site": "https://www.youtube.com/watch?v=LFjCr2yDJdc" },
    { "name": "BT vs BST", "site":"http://stackoverflow.com/questions/6380231/difference-between-binary-tree-and-binary-search-tree", "children": [
      { "name":"Red Black", "site": "https://en.wikipedia.org/wiki/Red%E2%80%93black_tree"},
      { "name": "LCA Python", "site": "https://www.youtube.com/watch?v=bl-gwEwm8CM" },
      { "name":"LCA", "site": "https://www.youtube.com/watch?v=NBcqBddFbZw" },
      { "name": "BST II", "site": "https://www.cs.princeton.edu/~rs/AlgsDS07/08BinarySearchTrees.pdf"}         
      ]
    },
    { "name":"LCA in Java", "site": "http://www.fusu.us/2013/06/p2-lowest-common-ancestor-in-binary-tree.html"}
    ]
  },
  {"name": "BST vs Hash", "site":"http://stackoverflow.com/questions/4128546/advantages-of-binary-search-trees-over-hash-tables"}
  ]
}


];

// ************** Generate the tree diagram  *****************
// var width = document.getElementById('main').offsetWidth;

var vwidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var vtop = (vwidth > 410) ? 80 : 50;
var vwidth = (vwidth > 410) ? 410 : vwidth;
var vheight = vwidth + 180;

function makeMeSomeTrees(eachRoot){

  var margin = {top: vtop, right: 5, bottom: 5, left: 5},
  width = vwidth - margin.right - margin.left,
  height = vheight - margin.top - margin.bottom;

  var i = 0;

  var tree = d3.layout.tree()
  .size([width, height]);

  var diagonal = d3.svg.diagonal()
 // .projection(function(d) { return [d.y, d.x]; });

  var svg = d3.select("#diagram").append("div").append("svg")
  .attr("width", width + margin.right + margin.left)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  root = treeData[eachRoot];

  function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
  links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 120; });

  // Declare the nodesâ€¦
  var node = svg.selectAll("g.node")
  .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter the nodes.
  var nodeEnter = node.enter().append("g")
  .attr("class", "node")
  .attr("transform", function(d) {
    return "translate(" + d.x + "," + d.y + ")";
    });

  nodeEnter.append("circle")
  .attr("r", vwidth/8.5)

  nodeEnter.append("text")
  .attr("x", function(d) {
    return 0;
  })
  .attr("dy", ".35em")
  .attr("text-anchor", function(d) {
    return "middle";
  })
  .text(function(d) { return d.name; })
  .style("fill-opacity", 1)
  .attr("class", "hyper").on("click", function (d) {
    var url = d.site;
    window.location = url;
  });

  // Declare the links.
  var link = svg.selectAll("path.link")
  .data(links, function(d) { return d.target.id; });

  //Highlights for subject and new nodes
  nodeEnter.select("circle")
  .style("stroke", function(d){
    if (d.name.match(/(tape|node|projects|BST)/)) {
      return "rgba(51,15,83, .5)"; } /*purple*/
    else if (d.name.match(/paths/)) {
        return "rgba(51,15,83, .25)"; } /*purple*/
    else { return "rgba(31,110,106, .5)"; } /*green*/
  }).style("stroke-width", function(d){
    if (d.name.match(/(tape|node|projects|BST|#|paths)/)) {
      return 8;
    } else { return 0; }
  });

  // Enter the links.
  link.enter().insert("path", "g")
  .attr("class", "link")
  .attr("d", diagonal);

  }

update(root);

}

for (var q = 0; q < treeData.length; q++) {
  makeMeSomeTrees(q);
}

</script>

<img src="lineof.jpg" alt="">

Here's something I keep in mind all the time.

<img src="imposter.jpg" alt="">

How do you determine one outlying heavy ball using a scale only three times?

<img src="eightball.jpg" alt="eightballs...">

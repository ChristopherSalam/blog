---
layout: page
title: About Me
permalink: /about/
---

My name is Christopher Salam and I am a **<a href="http://chrissalam.com/software">software</a>** engineer, currently working at <a target="_blank" href="https://angel.co/ziploop"> <strong>Ziploop</strong> <img height="30px" style="display:inline-block" src="ziploop.png" /> </a>. In the past, I have worked as an **<a href="http://chrissalam.com/agricultural">agricultural</a>**, **<a href="http://chrissalam.com/chemical">chemical</a>**, and **<a href="http://chrissalam.com/environmental">environmental</a>** engineer. I loved the **<a href="http://pretender.wikia.com/wiki/Jarod">Pretender</a>**, a show about protagonist had the cognitive ability to change professions in each episode. To some extent, getting into software has been a way to pursue all my varied and ever-changing interests.

Projects I help maintain:

&nbsp; &nbsp; &nbsp; <strong><a href="http://sixdribbles.com" target="_blank">Six Dribbles</a></strong>: A Oracle for NBA players built with React, Neo4j, Node, AWS, and Express</a>.

&nbsp; &nbsp; &nbsp; <strong><a href="http://video-ke.com" target="_blank">Video-ke</a></strong>: A dual video player with crossfader powered by Youtube, on <a href="http://video-ke.com" target="_blank"> web </a> and <a href="https://github.com/upstanding-biome/Video-ke-D-" target="_blank"> desktop</a>.

I have worked as a freelance software engineer with <strong><a href="http://www.amyyoshitsu.com" target="_blank">Amy Yoshitsu</a></strong>. My resume can be found at my <strong><a href="http://chrissalam.github.io" target="_blank">here</a></strong>.

I volunteer weekly to help people learn how to <a href="http://hoodline.com/2017/07/keeping-it-wheel-building-bikes-community-at-longfellow-s-spokeland" target="_blank">repair </a> their own bicycles at <a href="http://www.spokeland.org" target="_blank">Spokeland</a>, in Oakland California.

I once owned a <a href="/bus" target="_blank"> party bus </a>.

I was in the first cohort of <a href="http://www.telegraphacademy.com/" <a target="_blank"> <strong>Telegraph Academy</strong> <img height="30px" style="display:inline-block" src="tga.png" /> </a> (TGA), a JavaScript immersive for underrepresented minorities, now an affiliate of Hack Reactor.

This website uses <strong><a href="https://jekyllrb.com/"> jekyll </a></strong> and <strong><a href="https://github.com/barryclark/jekyll-now">jekyllNow</a></strong> as a static content generator, used <strong><a href="https://pages.github.com/"> github pages </a></strong> before I elected to transition to a full static HTML site, and uses <strong><a href="http://d3js.org/"> d3 </a></strong> to make the posts list in a <strong><a href="https://github.com/mbostock/d3/wiki/Tree-Layout"> tree structure</strong></a> or <strong><a href="http://bl.ocks.org/mbostock/4063530" >petri-dish structure </a></strong>

<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js" charset="utf-8"></script>

<div id="diagram"></div>

<script>

  var treeData = [
  {
  "name": "Chris Salam",
  "parent": null,
  "children": [
      {
      "name": "bicycles",
      "parent": "Chris Salam"
      },
      {
      "name": "software",
      "parent": "Chris Salam",
        "children": [
        {
          "name": "agricultural",
          "parent": "#reactnative",
        },
        {
          "name": "chemical",
          "parent": "#reactnative"
        },
        {
          "name": "environmental",
          "parent": "#reactnative"
        }
                    ]
      },
      {
      "name": "music",
      "parent": "Chris Salam"
      }
              ]
  }
];

// ************** Generate the tree diagram  *****************

// var width = document.getElementById('main').offsetWidth;
var vwidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var vtop = (vwidth > 410) ? 80 : 50;
vwidth = (vwidth > 410) ? 410 : vwidth;
var vheight = vwidth + 360;

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

 update(root);

 function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
  links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 200; });

  // Declare the nodesâ€¦
  var node = svg.selectAll("g.node")
  .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter the nodes.
  var nodeEnter = node.enter().append("g")
  .attr("class", "node")
  .attr("transform", function(d) {
    return "translate(" + d.x + "," + d.y + ")"; });

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
    var url;
    if (d.name.match(/bicycles/)) { url = 'http://vintagebicycles.info'; }
    else if (d.name.match(/music/)) { url = 'http://christophersalam.github.io'; }
        else { url = 'http://chrissalam.com/' + d.name.split(" ").join("-"); }
        window.location = url;
      });

  // Declare the linksâ€¦
  var link = svg.selectAll("path.link")
  .data(links, function(d) { return d.target.id; });

  // Enter the links.
  link.enter().insert("path", "g")
  .attr("class", "link")
  .attr("d", diagonal);

}

}

for (var q = 0; q < treeData.length; q++) {
  makeMeSomeTrees(q);
}

</script>

---
layout: post
title: binary search
tags:
- javascript
- data structures
---

Trees and Binary Search Trees in particular are very important core topics in computer science, and in preparation for interviews, I'll try my best to talk myself into believing I understanding trees, breath first search, depth first search, adding and removing nodes. I'm going to go through my tree analysis and convert it over to a binary search tree, as the best **<a href="https://www.cs.princeton.edu/~rs/AlgsDS07/08BinarySearchTrees.pdf">literature </a>** out there can be convoluted..

A **<a href="https://en.wikipedia.org/wiki/Binary_search_tree">binary search tree</a>** is simpler in a tree in a way in that there are always only two children rather than an array to travel through, and rather than use traversal to set a point to add data, the data places itself within the structure by value sorting within the insertion. Conversely, remove a node is highly complicated. **<a href="https://en.wikipedia.org/wiki/Red%E2%80%93black_tree">Red black trees</a>** is eventually where I am building to. I'm heavily inspiried by this **<a href="https://gist.github.com/trevmex/821973" target="_blank">implementation</a>** , but I'm going to try to write in the tree node root style so it matches the **<a href="/trees" target="_blank"> Tree post</a>** I made earlier.

```javascript
//Psuedo-classical instantiation
function Node (value, parent, leftChild, rightChild) {
  this.value = value || null;
  this.parent = parent || null;
  this.leftChild = leftChild || null;
  this.rightChild = rightChild || null;
};

function BST (value, parent, leftChild, rightChild) {
  this._root = new Node(value, parent, leftChild, rightChild);
};
```
The contains function is similar to the traversal function in a tree problem, but with logic to look through the tree according to value.

```javascript
function contains(node, value) {
  if (node == null) {
    return false; //key not found
  }
  node = node._root || node;
  var nodeValue = parseInt(node.value, 10);
  if (value < nodeValue) {
    return contains(node.leftChild, value);
  } else if (value > nodeValue) {
    return contains(node.rightChild, value);
  } else {
    return true;
  }
};
```

Traversal in a binary search tree is not recursive, the tree itself allows for log n time processing. We can use this logic to insert nodes as well. This method of inserting does not balance the tree. Balancing the tree is a whole other can of worms, but balancing a tree helps optimize the traversal.

```javascript
function insert(node, value, parent) {
  if (node == null) {
    node.leftChild = null;
    node.rightChild = null;
    node.value = value;
    node.parent = parent;
    return true;
  }
  node = node._root || node;
  var nodeValue = parseInt(node.value, 10);
  if (value < nodeValue) {
    insertNode(node.leftChild, value, node);
  } else if (value > nodeValue) {
    insertNode(node.rightChild, value, node);
  } else {
    node.value = value;
    return true;
  }
};
```
Insertion in a binary search tree happens with much of the same logic as the contains, which leads us naturally to think there must be a way to take the function from one and place it into the other.

**This is a stub, there's more coming**

---
layout: post
title: binary search
tags:
- javascript
- data structures
---

Trees and Binary Search Trees in particular are very important core topics in computer science, and in preparation for interviews, I'll try my best to talk myself into believing I understanding trees, breath first search, depth first search, adding and removing nodes. I'm going to go through my tree analysis and convert it over to a binary search tree, as the best **<a href="https://www.cs.princeton.edu/~rs/AlgsDS07/08BinarySearchTrees.pdf">literature </a>** out there can be convoluted..

A **<a href="https://en.wikipedia.org/wiki/Binary_search_tree">binary search tree</a>** is simpler in a tree in a way in that there are always only two children rather than an array to travel through, and rather than use traversal to set a point to add data, the data places itself within the structure by value sorting within the insertion. Conversely, remove a node is highly complicated.

```javascript
//Psuedo-classical instantiation
function Node (value, parent, leftChild, rightChild) {
  this.value = value || null;
  this.parent = parent || null;
  this.leftChild = leftChild || null;
  this.rightChild = rightChild || null;
};

function BST (value, parent, leftChild, rightChild) {
  this._root = new Node(value);
};
```


```javascript
BST.prototype.contains = function (value, node) {
  var node = node || this._root;  
    if (node.value === null) {
      return false; //key not found
    }
    var nodeValue = parseInt(node.value, 10);

    if (value < nodeValue) {
      return this.contains(value, node.leftChild);
    } else if (value > nodeValue) {
      return this.contains(value, node.rightChild);
    } else {
      return true;
    }
};
```

This is a depth first contains check. A depth first search looks at each node and traverses until the most extreme point in each branch before continuing to search up the tree. A breadth first search would conversely look at each level whether or not it was an extreme end or not before continuing deeper in the tree. There is a way to write contains as a method that will either be depth first or breadth first. I first wrote this function when defining a depth first traverse:

```javascript
// Depth First, Initial Attempt
Tree.prototype.traverse = function(callback) {
   callback.call(this, this.value);
   var i;
   for (i = 0; i < this.children.length; i++) {
     this.children[i].traverse(callback);
   }
}
```
While this is an effective and less expensive method of depth first traversing, the recursive method is often described instead, because it makes it more clear the step by step approach of traveling through to the extrema before moving back up the tree.

We should be following four clear steps for a depth first traversal (<a href="http://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393">taken from codetuts</a>):

Step 1. Immediately invoke recurse with the root node of a tree as its argument. At this moment, currentNode points to the current node.
Step 2. Enter a for loop and iterate once for each child of currentNode, beginning with the first child.
Step 3. Inside the body of the for loop, invoke recurse with a child of currentNode. The exact child depends on the current iteration of the for loop.
Step 4. When currentNode no longer has children, we exit the for loop and invoke the callback we passed during the invocation of traverseDF(callback).

```javascript
Tree.prototype.traverseDF = function(callback) {
   // this is a recurse and immediately-invoking function
   (function recurse(currentNode) {
       // step 2
       for (var i = 0, length = currentNode.children.length; i < length; i++) {
           // step 3
           recurse(currentNode.children[i]);
       }
       // step 4
       callback(currentNode);
       // step 1
   })(this._root);
};
```

Let this sink in forever. My version of figuring out breadth first traversal was pretty much the same as the one with a document root.

```javascript
// Breadth First, Initial Attempt
Tree.prototype.traverse = function(callback) {
 var queue = [this],
 current = queue.shift();
   while (current) {
     for (var i = 0; i < current.children.length; i++) {
       queue.push(current.children[i]);
     }
     callback.call(current, current.value);
     current = queue.shift();
   }
}

Tree.prototype.traverseBF = function(callback) {
   var queue = [this._root];
   currentTree = queue.shift();
   while(currentTree){
       for (var i = 0, length = currentTree.children.length; i < length; i++) {
           queue.push(currentTree.children[i]);
       }
       callback(currentTree);
       currentTree = queue.shift();
   }
};
```

Writing out both these traversal techniques finally let us call contains with either kind of traversal. This is a pretty simple process.

```javascript
//
Tree.prototype.contains = function(callback, bfdf) {
   bfdf.call(this, callback);
};
```

Now we can use either method of traversal to create a way to calculate the size of our tree. Super straightforward traversal with callback that counts.

```javascript
Tree.prototype.size = function() {
 var size = 0;
 this.traverseDF(function(){
   size++;
 })
 return size;
}
```
Adding, and subsequently removing are the real pieces to a non-binary tree structure. Adding correctly to a certain value assumes that there are only one or two equal values within the tree and that using either breadth or depth first traversal will get to the desired node. Additionally both add and remove change the tree structure to accommodate the added or removed value value. At point where the data was added or removed, the child needs to be changed, when added, a new tree of data, complete with parent and children needed to be declared, and the parent of the children need to be changed. Lots of logic!

```javascript
Tree.prototype.add = function(value, atValue, bfdf) {
 var child = new Tree(value),
   parent = null,
   callback = function(node) {
     if (node.value === atValue) {
       parent = node;
     }
   };
 this.contains(callback, bfdf);
 if (parent) {
   parent.children.push(child);
   child.parent = parent;
 }
}
```

First step is the create a new node, with the correct value, but missing a parent and children. The callback does the critical step of traversing through the tree's structure and finding the correct parent and setting it equal to a variable, determined by the 'atValue' provided as input. When the parent is found and set, the last step of the function is to set the new node as a children of the parent, and when this step is taken, both sides of the relationship are set, with the second line at the bottom taking our variable and setting it as the child.parent. Again with comments in-line:

```javascript
Tree.prototype.add = function(value, atValue, bfdf) {
//create a new node
 var child = new Tree(value),
//create a variable to store
//the parent when found
   parent = null,
//create a callback to find your
//parent, using input 'atValue'
   callback = function(node) {
     if (node.value === atValue) {
       parent = node;
     }
   };
//traverse, either Breadth or
//Depth first to find parent
 this.contains(callback, bfdf);
 if (parent) {
//when parent is found, set the
//node as a child of the parent
//variable (Part 1)
   parent.children.push(child);
//use the parent variable and set
//it as the child's parent (Part 2)
   child.parent = parent;
 }
}
```

Pretty helpful to see it step by step, right? Let's try to do the same for remove! I'm sure you don't need anymore enticement, but this is one of the holy grails of all interviews it seems.

```javascript
Tree.prototype.remove = function(data, fromData, bfdf) {
function findIndex(arr, data) {
   var index;
   for (var i = 0; i < arr.length; i++) {
       if (arr[i].data === data) {
           index = i;
       }
   }
   return index;
}
   var tree = this,
       parent = null,
       childToRemove = null,
       index;
   var callback = function(node) {
       if (node.data === fromData) {
           parent = node;
       }
   };
   this.contains(callback, bfdf);
   if (parent) {
       index = findIndex(parent.children, data);
       if (index === undefined) {
           throw new Error('Node to remove does not exist.');
       } else {
           childToRemove = parent.children.splice(index, 1);
       }
   } else {
       throw new Error('Parent does not exist.');
   }
   return childToRemove;
};
```

Very complicated, right? The fundamental difficulty with removing a node is how simple overwriting adding a node. The parent that's no longer the child gets overwritten when you do this at the bottom of Tree.prototype.add:

```javascript
   child.parent = parent;
```

When you remove a node, you have two bridge two nodes that weren't connected directly before. And that's what the bulk of the code above is trying to do. Let's step through it.

```javascript
Tree.prototype.remove = function(data, fromData, bfdf) {
//similar to indexOf except accessing element.data instead of element
function findIndex(arr, data) {
   var index;
   for (var i = 0; i < arr.length; i++) {
       if (arr[i].data === data) {
           index = i;
       }
   }
   return index;
}
// create reference to tree before change.
   var tree = this,
// similar to add, create parent and childToRemove variables
       parent = null,
       childToRemove = null,
       index;
// create callback to find the fromData datapoint using contains
   var callback = function(node) {
       if (node.data === fromData) {
           parent = node;
       }
   };
// traverse through the tree.
   this.contains(callback, bfdf);
// will find a parent
   if (parent) {
       index = findIndex(parent.children, data);
// edge case of undefined index
       if (index === undefined) {
           throw new Error('Node to remove does not exist.');
// work of splicing out the index that needs to be removed.
       } else {
           childToRemove = parent.children.splice(index, 1);
       }
   } else {
       throw new Error('Parent does not exist.');
   }
   return childToRemove;
};
```
I've included the logged statements I had at the end of my file that I used to test my work. You can see the add and the addChild functions juxtaposed. What I achieved with simplicity with the addChild, later ended up costing me because it was tricky simply to add to my own tree.

```javascript
var tree = new Tree(0);
tree.add(1, 0, tree.traverseDF);
tree.add(2, 0, tree.traverseDF);
// tree.addChild(1);
// tree.addChild(2);
// tree.children[0].addChild(3);
tree.add(3, 1, tree.traverseDF);
// tree.add(3,1,tree.BFtraverse);
// tree.children[0].children[0].addChild(4);
tree.add(4, 3, tree.traverseDF);
tree.add(5, 2, tree.traverseBF);
tree.remove(5, 2, tree.traverseBF);
console.log(tree);
```

I will add the testing suite from the add, remove, contains, breadth and depth first searches soon...

<!--
```javascript
// tree.children[1].children[0].addChild(7);
// console.log(tree.contains(console.log,tree.DFtraverse)); // yields 'true'
// console.log(tree.contains(0)); // yields 'true'
// console.log(tree.contains(1)); // yields 'true'
// console.log(tree.contains(4)); // yields 'false'
// console.log("Depth");
// tree.DFtraverse(console.log);
// console.log("Breadth");
// tree.BFtraverse(console.log);
console.log(tree.size());
```
-->

**This is a stub, there's more coming**
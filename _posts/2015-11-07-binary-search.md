---
layout: post
title: binary search
tags:
- javascript
- structures
---

As is customary for those seeking jobs, intimidation involving the binary search tree is a given. Don't give it! It's a really fun structure and the same recursive reasoning driving linked lists lives here. Grab this problem by its occasionally equally spaced branches!

```javascript
//Psuedo-classical instantiation
function Node (value) {
  this.value = value || null;
  this.left = null;
  this.right = null;
};

function BinarySearchTree (value) {
  this.root = null;
};
```

The main difference here is rather than splitting the children into a left and a right (sometimes this is leftChild or rightChild) instead of an array with all the children. You can include a parent here, but I elected not to.

Due to a child limit and the additionally criteria of the value indicating where things go on tree (not true for binary trees). There's not the same level of fuss you had to deal with the tree when it comes to insertion. The value (and the order of insertion) determine it's place on the tree.

```javascript
BinarySearchTree.prototype.push = function(val){

  //this is optional but here
  //we gave the tree the logic
  //to start with null

  var root = this.root;
  if(!root){
    this.root = new Node(val);
    return;
  }

  //if the root already exists
  //lets make the new node.

  var currentNode = root;
  var newNode = new Node(val);

  //here is the logic to place
  //the node in the right spot

  while(currentNode){
    if(val < currentNode.value){
        if(!currentNode.left){
          currentNode.left = newNode;
            break;
        } else {
          currentNode = currentNode.left;
        }
    } else {
      if(!currentNode.right){
        currentNode.right = newNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
}
```

The Binary-Search-Tree Contains method let's use the structure of the data model to locate the exact node by value. This could be refactored, as it is here, it has some repetition of the logic as above.

```javascript
BinarySearchTree.prototype.contains = function(value, node) {
  // a recursive function that looks at each node
  function contains(value, node) {
    //here's the exit
    if (node === null) { return false; }
    //this is just in case the
    //value is in place as a string
    //ooooo non-typesafe languages
    var nodeValue = parseInt(node.value, 10);
    //check here
      if (value < nodeValue) {
        return contains(value, node.left);
    //check here
      } else if (value > nodeValue) {
        return contains(value, node.right);
    //this is the other exit condition,
    //a found value
      } return true;
  }
  //I wrote this out and it didn't work
  //until I added the return here... doof!
  return contains(value, this.root);
};
```

Traversal in a binary search tree is not recursive, the tree itself allows for log n time processing. We can use this logic to insert nodes as well. This method of inserting does not balance the tree. Balancing the tree is a whole other can of worms, but balancing a tree helps optimize the traversal.

<!-- Least Common Ancestor

```javascript

BinarySearchTree.prototype.getLCA = function(node, a, b){
	if (node === null) { return null; }
	if (node === a || node === b) { return node; }
	left = BinarySearchTree.prototype.getLCA(node.left, a, b);
	right = BinarySearchTree.prototype.getLCA(node.right, a, b);
	if (left !== null && right !== null) { return node; }
	if (left === null) { return right; }
	else { return left; }
}

``` -->

Breadth First Recursion and Queue

```javascript
BinarySearchTree.prototype.breadthFirstRec = function() {
  var levels = {},
    traverse = function(node, depth) {
	    if (!node) { return null; }
	    if (!levels[depth]) { levels[depth] = [node.value]; }
	    else { levels[depth].push(node.value); }
	    traverse(node.left, depth + 1);
	    traverse(node.right, depth + 1);
		}
	traverse(this.root, 0);
  return levels;
};
```

This is  

```javascript
BinarySearchTree.prototype.breadthFirst = function() {
    var result = [],
      queue = [],
      node = this.root;
    if (!node) return null;
    queue.push(node);
    while (node = queue.shift()) {
	    result.push(node.value);
	    node.left && queue.push(node.left);
	    node.right && queue.push(node.right);
    } return result;
};
```

DepthFirst

```javascript

BinarySearchTree.prototype.depthFirst = function(node){
	  node = node || this.root,
	  stack = [];
	var traverse = function(node){
		if (node) {
		  stack.push(node.value);
			traverse(node.left);
			traverse(node.right);
		}
	}
	traverse(node)
	return stack;
}

```

**This is a stub, there's more coming**

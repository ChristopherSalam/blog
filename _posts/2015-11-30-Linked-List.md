---
layout: post
title: BST
tags:
- javascript
- ds
- linked list
---

<!--

LinkedList Tutorial

function LinkedList(){  
  this.head = null;
}

LinkedList.prototype.push = function(val){
    var node = {
       value: val,
       next: null
    }
    if(!this.head){
      this.head = node;      
    }
    else{
      current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }

Make a LinkedList
add a node
remove a node

LinkedList.prototype.remove = function(val){
    var current = this.head;
    //case-1
    if(current.value == val){
       this.head = current.next;     
    }
    else{
      var previous = current;

      while(current.next){
        //case-3
        if(current.value == val){
          previous.next = current.next;          
          break;
        }
        previous = current;
        current = current.next;
      }
      //case -2
      if(current.value == val){
        previous.next == null;
      }
    }
  }  

  case -1: your targeted node is in the head. you have to replace the head with the next node
  case -2: your targeted node is in the tail. you just have to remove it from the tail. Hence next of the node before the tail will be null.
  case-3: your targeted node is in the middle of the LinkedList, you have to make the node after your targeted node to be the next node of the node before your targeted node.

reverse a LinkedList conventional, using fast slow

// reverse a linked list  
var reverseLinkedList = function(linkedlist) {
  var node = linkedlist;
  var previous = null;

  while(node) {
    // save next or you lose it!!!
    var save = node.next;
    // reverse pointer
    node.next = previous;
    // increment previous to current node
    previous = node;
    // increment node to next node or null at end of list
    node = save;
  }
  return previous;   // Change the list head !!!
}
linkedlist = reverseLinkedList(linkedlist);

palindrome check, in linear time (with a halfway)

var palindromeChecker = function(linkedlist) {
  var fast = node,
    stack = [];
while (node)
    stack.push(node);
    node = node.next;
    fast = node.next.next;
  if (!fast) {
    if (node !== stack.pop()) { return false; }
  }
  return true;
}

complexity

check for circular linked list using fast/slow

function detectLoop(sll){
   var slowPointer = sll.head,
       fastPointer = sll.head;

   while(slowPointer && fastPointer && fastPointer.next){
     slowPointer = slowPointer.next;
     fastPointer = fastPointer.next.next;

     if(slowPointer == fastPointer){
        return true;
     }
   }
   return false;
}


-->

**This is a stub, there's more coming**

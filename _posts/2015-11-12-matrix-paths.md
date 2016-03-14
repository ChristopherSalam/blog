---
layout: post
title: matrix paths
tags:
- ds
- javascript
---

This is part 2 of 2 of the Path Problem series.

**[Part 1 - Array Paths](/array-paths "Array Paths")** | Part 2

I've been beginning to see a pattern to many problems, which I'm going to term path problems. One major type of problems involves the traversal across a matrix.  The goals here are here to determine how to store information and use arguments recursively (or iteratively) to carry information you need to the next step.

###The Fishing Trip Problem

```javascript
/*====================================||
|| Fishing Trip                       ||
||                                    ||
|| In this problem you will travel    ||
|| through all possible paths through ||
|| a lake collecting fish. You must   ||
|| start at the top left corner and   ||
|| go only one space at a time either ||
|| right or down until you reach the  ||
|| right bottom corner [2,2] for a    ||
|| 3 x 3 matrix. Keep track of the    ||
|| total amount of fish each path can ||
|| provide for you and report the     ||
|| maximum catch                      ||
||====================================*/

var pond =
[
  [ 0, 4,  3 ],
  [ 2, 10, 4 ],
  [ 1, 5,  2 ]
];

```

Whoa... right? I was similarly stammering on what to do next when I first saw it. We've discussed the pieces above. These fit a lot of patterns we see in games, or maybe this could serve as an example for path optimization for trip runners.

We need a running total on each route, addition steps, options to travel in both directions, and routes that fail when we cross boundaries. Let's get to it! Here's a diagram.

```javascript
var zone =
  [   [ start, #,  #   ]
      [ #,     #,  #   ]
      [ #,     #,  end ]   ]
```

Following a diagram like this, work within all possible paths from start to end (there are six in this case)

```javascript
(1) [ [ start, _,  _   ]    (2) [  [ start, _, #   ]
      [ #,     #,  _   ]           [ #,     _, _   ]
      [ #,     #,  end ] ]         [ #,     #, end ] ]

(3) [ [ start, #,  #   ]    (4) [  [ start,_, #    ]
      [ _,    _,   #   ]           [ #,    _, #    ]
      [ #,    _, end   ] ]         [ #,    _, end  ] ]

(5) [ [ start, #, #    ]    (6) [  [ start, #, #   ]
      [ _,     #, #    ]           [ _,     _, #   ]
      [ _,     _, end  ] ]         [ #,     _, end ] ]
```

Another way to think about this is in terms of combinatorics, which I would not even consider, had I not played many years of board games versus <a href="http://inventingsituations.net/">Tom</a> and <a href="https://dailycampusarchive.wordpress.com/2015/02/20/last-lecture-beloved-math-professor-patrick-dragon/">Patrick</a>, both PhDs in this tricky math form. This path problem reduces to a (2(n-1)!)/(n-1)!(n-1)! problem for an n x n, and a problem with movement in all compass directions (NWSE) is simply double that. <a href="http://joaoff.com/2008/01/20/a-square-grid-path-problem/"> Here's a post on that kind of solution.</a> You can use combinatorics to set a for loop for an iterative solution but it's often easier and more to to build a recursive solution and have it determine the number of combinations needed.

Another way to look at this set of decisions is a tree. We don't need to use the tree data structure, just absorb that this solution can be done recursively (or iteratively if you know the combinations ahead of time).

<img src="treeChoice.png" alt="visual of decisions">

You get the drift.

In my mind these diagrams **aren't** the most accurate way of thinking about **how computers solve** this problem. These show the valid results, and if you want to create an algorithm to this this will be a little more overhead. Instead, we are going to write one that expands in two directions and fails once it finds that there is no matrix value.

The algorithm needs to fail, or return an empty value, when it goes out of bounds. The boundary conditions we can use are natural for the matrix, we can ask it if values exist there, such as:

```javascript
Boolean(zone[0][0]) --> true
Boolean(zone[0][4]) --> undefined
```

And where ever our boundary conditions fail we can just 'return 0;' or 'return;' depending on what we are trying to keep track of. The other important piece is that while we travel each path, we need to pass information on as arguments to the recursive function, often without modifying the functions in place to preserve what we are interested in. For example:

```javascript
function recursive(stuff, moreStuff) {
  stuff += 1;
  moreStuff = moreStruff.substr(1);
    return recursive(stuff, moreStuff);
}
```

versus

```javascript
function recursive(stuff, moreStuff) {
  do tasks;
    return recursive(stuff + 1, moreStuff.substr(1));
}
```

And decisions at to keep data around in this way will either help you keeping running totals or deal with a specific value at each stop. Let's start our fishing problem.

```javascript
function fishingTrip(matrix) {

//boundary variables.
//another approach is
//to start from height and width
//and subtract. I choose to add.

	var total = 0, x = 0, y = 0,
	  fishCatch = [],
	  height = matrix.length - 1,
	  width = matrix[0].length - 1;

//recursive function that carves a path
//through the matrix

    function travel(matrix, x, y, total) {

//boundary conditions
//if at a value the matrix doesn't see, return no fish.
//if at [2,2], send the total to be stored.

    	if (x > width || y > height) { return 0; }
    	if (x === width && y === height) {
            fishCatch.push(total + matrix[x][y]);
            return;
        }

//here's a very tricky part of it, you return moving in both directions.
//recursion will purse each path until it's logical conclusion,
//ASSUMING you set good boundaries.

    	return travel(matrix, x + 1, y, total + matrix[x][y]) + travel(matrix, x, y + 1, total + matrix[x][y]);
    }

//call the function. You can do this with an IFFY but those
//seem less legible to me.

    travel(matrix, x, y, total);

//at this point, I have all the answers stored.
//if the matrix was 1 million x 1 million, we would probably
//overwrite with a max. I'll show you an example of this next.
//here we will just Math.max.apply to get the best catch.

    return Math.max.apply(null,fishCatch);
// allTotals:[ 10, 19, 18, ->( 21 )<-, 20, 13 ]
}
```

If the tree is helpful, here's another look at what's happening.

<img src="pondChoice.png" alt="alt view of pond problem">

And you'll see twists on this generic idea of a problem. This is something computers can do so quickly for us that was very hard to set out to solve before computers.

###The Life Total Problem

```javascript
/*====================================||
|| Life Total                         ||
||                                    ||
|| In this problem you will travel    ||
|| through all possible paths through ||
|| a field gaining and losing health  ||
|| Start at the top left corner and   ||
|| go only one space at a time either ||
|| right or down until you reach the  ||
|| right bottom corner [2,2] for a    ||
|| 3 x 3 matrix. Find out what is the ||
|| minimum starting health you need   ||
|| get through the field alive!       ||
||====================================*/

var field =
[
  [0,  4,  -3 ],
  [2, -10, -4 ],
  [1,  -5,  2 ]
];

```

What's the major difference here? We have negative values, but fundamentally we need to keep track of only two numbers, the life total we have at each path, and an minimum extrema. The lowest point at which we have health will help us set our minimum health to stay alive.

```javascript
function minLifeNeededToLive(matrix) {

//boundary variables as before
//major difference is there is no
//array, and a single maxHurt variable
//takes it's place. We could have done
//the same above, but I wanted to demonstrate
//the tree of decisions clearly.

	var lifeTotal = 0, x = 0, y = 0,
	  maxHurt = Infinity,
	  height = matrix.length - 1,
	  width = matrix[0].length - 1;

//recursively travel as before. Modify your life total
//then ask at each point if the

    function travel(matrix, x, y, lifeTotal) {
    	if (x > width || y > height) { return 0; }

//remember to add the life at [2,2] to the maxHurt check

    	if (lifeTotal + matrix[x][y] < maxHurt) { maxHurt = lifeTotal + matrix[x][y]; }

//stop the bloodshead!. a third boundary condition on [2,2]

    	if (x === width && y === height) { return; }

//travelling, just as before.
//passing this times life total to the next battle.

    	return travel(matrix, x + 1, y, lifeTotal + matrix[x][y]) + travel(matrix, x, y + 1, lifeTotal + matrix[x][y]);
    }

//run the function itself.

    travel(matrix, x, y, lifeTotal);

//the final calculations. To stay alive, I need to survive the lowest point in my health, i.e. 1 - maxHurt taken.

    return -maxHurt+1; // minimal health
}
```

Hopefully that is helpful! I'm going to skip making the tree this time if that works with you.

###The Islands and Ponds Problem

Another similar and slightly more complicated problem is islands and ponds. This matrix requires you to either keep track on information upon examination and traverse within your traversal. To be clear, the example below shows two ponds (ones), within a set of land (zeros).

```javascript
var maps = [
[0,0,0,0,0],
[0,0,0,1,0],
[0,0,0,1,1],
[0,1,0,1,0],
[0,0,0,0,0] ];
```

When each pond is discovered, we need to travel horizontally and vertically to verify that this is not a new pond. One method might be to change the pond found in an iterative loop, so that when the first pond checker lands on the spot again, they find that a change has been made (logically, to zero). -->

```javascript
//process:[x][y], subprocess:0
var maps = [
[0,0,0,0,0],
[0,0,0,((1)),0],  // on this spot
[0,0,0,1,1],
[0,1,0,1,0],
[0,0,0,0,0] ];

//subprocess:1
var maps = [
[0,0,0,0,0],
[0,0,0,0,0],  // on this spot
[0,0,0,((1)),1],
[0,1,0,1,0],
[0,0,0,0,0] ];

//subprocess:2
var maps = [
[0,0,0,0,0],
[0,0,0,0,0],  //  move down
[0,0,0,((0)),1],
[0,1,0,1,0],
[0,0,0,0,0] ];

//subprocess:3
var maps = [
[0,0,0,0,0],
[0,0,0,0,0],  // change one to
[0,0,0,((0)),1], //zero
[0,1,0,1,0],
[0,0,0,0,0] ];

//subprocess:4
var maps = [
[0,0,0,0,0],
[0,0,0,0,0],  // finish
[0,0,0,0,((1))],
[0,1,0,((1)),0],
[0,0,0,0,0] ];

//subprocess:5
var maps = [
[0,0,0,0,0],
[0,0,0,0,0],  // no where else
[0,0,0,0,((0))], // to go
[0,1,0,((0)),0],
[0,0,0,0,0] ];

//resume process [x][y+1]
var maps = [
[0,0,0,0,0],
[0,0,0,0,0], // and avoid
[0,0,0,0,0], // double counting
[0,1,0,0,0],
[0,0,0,0,0] ];
```

So, to solve this problem, I decided to use a stack, and inside the stack there was an object indicating exactly what part of the matrix I was on at any given time, and then each "1" found in this sub process was converted to a "0" to avoid in being counting again. When this process completed, and only then, did the actual pond counter increment. So after all the processes above, we return to the problem and then resume looking around.

Islands and Ponds Problem

```javascript

/*====================================||
|| Islands and Ponds                  ||
||                                    ||
|| Count the number of ponds in a     ||
|| matrix.                            ||
||====================================*/
// map needs to be a matrix format
var map = [
[0,1,0,0,0],
[0,1,0,1,0],
[0,1,0,1,0],
[0,1,0,1,0],
[0,1,0,0,0] ];

var numPonds = function (grid) {
// provided a grid, we create this
// iterative varibles here
  var top, split, i, j;

// We need a recursive loop
// as always. This is the subprocess
// from above.
  function expanse(stack) {
// we take our input and look at the values there.
      top = stack.pop();
      i = top.row;
      j = top.col;
// If at that value, I have a "1", change it to "0"
        if (grid[i] && grid[i][j] && grid[i][j] === 1) {
          grid[i][j] = 0;
// console.log(grid) if you want to see changes.
// you can also copy the grid if you don't want
// to modify the original object.

// Here we are travelling to the other areas and
// documenting them as a stack
// you can also use a while loop but this is
// a better way to keeping track of your info.
          stack.push({row: i + 1 , col: j});
          stack.push({row: i - 1 , col: j});
          stack.push({row: i, col: j + 1 });
          stack.push({row: i, col: j - 1 });
        }
// This keeps us processing everything.        
        if (stack.length > 0) { expanse(stack); }
      }
// This is the process from above.
// We travel to each square and make ad decision.
// There are optimizations for double counting
// that I'm not going to talk about here.
  var x, y, count = 0, m = grid.length, N;
    for (x = 0; x < m; x ++ ) {
      N = grid[0].length;
        for (y = 0; y < N; y++ ) {
          if (grid[x][y] === 1 ) {
// If I have a pond, trigger subprocess
            expanse([{"row": x, "col": y}]);
// And when the process is truly done
// and I'm not at risk of double counting
// any ponds, increment the pond counter
              count++;
            }
          }
      }
      return count;
 }

console.log(numPonds(map));

//See the changed map, always completely zeroes.
console.log(map);
```

###Robot Paths

To follow this same set of logic, a duplicate board or a board that simply has true or false at each position can help us keep track of what has been seen or what has not been seen. This solver is an essential part of most of our games and their automatic moves and solvers. The last thing I'm going to blog about here is an approach where you move in all directions at all times, and the duplicate true false board will play a big role in deciding what can happen next.

```javascript

/*====================================||
|| Fishing Trip                       ||
||                                    ||
|| You are located at the top left    ||
|| corner of a 5x5 grid is trying to  ||
|| reach the bottom right       .     ||
|| You can move either up, down,      ||
|| left, or right, but cannot visit   ||
|| the same spot twice. How many      ||
|| possible unique paths are there    ||
|| to the bottom right?               ||
||====================================*/
```

Our first step is to make that "already visited" board.

```javascript
var Board = function (n) {

  var board = [],
    i,
    j;

  for (i = 0; i < n; i++) {
      board.push([]);
    for (j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function (i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function (i, j) {
    return !!this[i][j];
  }
  return board;
};
```

As before, we will make a recursive function that will move everywhere.
It's pretty much indentical to our previous approaches except to prevent
you from going where you've been before you need to see the board.

```javascript

var countAllPaths = function(n, board, i, j) {

//Create the board if none exists.
  if (!board) {
    board = new Board(n);
    i = 0;
    j = 0;
  }

// If you go off the board or
// somewhere you've been, exit.
  if (!(i >=0 && i < n && j >=0 && j < n) || board.hasBeenVisited(i, j)) {
    return 0;
  }

// If you reach the end, return 1
// so that it can be added up for
// the final answer
  if (i === n - 1 && j === n - 1) { return 1; }

// toggling is a hard concept
// but it is the process of undoing the
// most recent move
  board.togglePiece(i, j);

// Start calculating the number of paths
  var result = countAllPaths(n, board, i, j + 1) +
    countAllPaths(n, board, i, j - 1) +
    countAllPaths(n, board, i + 1, j) +
    countAllPaths(n, board, i - 1, j);
// This is a way to preventing
// Infinite loops for empty calculations
  board.togglePiece(i, j);
// This gives us our final big number.
  return result;

}

console.log(countAllPaths(5));
```

These stumped me live, but after some time to think about it, I'll be ready for the next set of these, and I hope this helped you.

<img src="manyPaths.png" alt="joke at the end.">

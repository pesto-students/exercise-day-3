/* eslint-disable */

/**
 * Statements “do things.” A program is a sequence of statements. 
 * Here is an example of a statement, which declares (creates) a variable foo
 */

var baz;

/**
 * Expressions produce values. 
 * They are function arguments, the right side of an assignment, etc.
 * Here’s an example of an expression.
 */

3 * 7

// Statements

var x, y;
if (y >= 0) {
    x = y;
} else {
    x = -y;
}

// Expression

var x = y >= 0 ? y : -y;
myFunction(y >= 0 ? y : -y);

// Conditionals statements
var myvar = 0;
if (myvar === 0) {
  // then
} else if (myvar === 1) {
  // else-if
} else if (myvar === 2) {
  // else-if
} else {
  // else
}

// Swtich Case Statements
var fruit = '';
switch (fruit) {
  case 'banana':
      // ...
      break;
  case 'apple':
      // ...
      break;
  default:  // all other cases
      // ...
}

// Loop
var arr = [];
for (var i=0; i < arr.length; i++) {
  console.log(arr[i]);
}

// While Loop
var i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

do {
  // ...
} while (true);

// In all loops:

// break leaves the loop.
// continue starts a new loop iteration.
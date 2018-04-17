/* eslint-disable */

function stepIntoIt() {
  console.log('This');
  console.log('is');
  console.log('a');
  console.log('another');
  console.log('function');      
}

function foo() {
  var a = 'Pesto';
  console.log(a);
  debugger;
  console.log('Line 1');
  console.log('Line 2');
  console.log('Line 3');  
  stepIntoIt();
  console.log('after debugger');
}


// foo();

// Undefined and null

// JavaScript has two “nonvalues” that indicate missing information, undefined and null:

// undefined means “no value” (neither primitive nor object). Uninitialized variables, missing parameters,
// and missing properties have that nonvalue. And functions implicitly return it if nothing has been explicitly returned.
// null means “no object.” It is used as a nonvalue where an
// object is expected (as a parameter, as a member in a chain of objects, etc.).

console.log(typeof undefined);
console.log(typeof null);
console.log('undefined === null =>', undefined === null);
console.log('undefined == null => ', undefined == null);

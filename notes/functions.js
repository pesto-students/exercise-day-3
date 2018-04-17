/* eslint-disable */

/**
 * Function Declaration
 * Functions are values(objects) that can be called.
 * One way of defining a function is called a function declaration.
 * By convention, the names of normal functions start with lowercase letters.
 */

function bar(x) {
  return x;
}

/**
 * Calling a function
 */

var returnedValue = bar('return this');
console.log(returnedValue);

/**
 * Functions can act in various roles:
 * 
 * 1. Nonmethod function (“normal function”)
 */

bar('a value');

/**
 * 2. Constructor: You can invoke a function via the new operator. 
 * Then it becomes a constructor, a factory for objects. Here’s an example invocation
 * By convention, the names of constructors start with uppercase letters.
 */

console.log(new Date());

/**
 * 3. Methods: You can store a function in a property of an object,
 * which turns it into a method that you can invoke via that object.
 */

var obj = {
  doThis: function() {
    console.log('do this');
  }
}

obj.doThis();

/**
 * “Parameter” Versus “Argument”
 * Parameters are used to define a function. They are also called formal parameters and formal arguments.
 * In the following example, param1 and param2 are parameters:
 * 
 * Arguments are used to invoke a function. They are also called actual parameters and actual arguments.
 * In the following example, 3 and 7 are arguments:
 */

function foo(param1, param2) {

}

foo(3, 7);

/**
 * Factory Functions vs Constructor Functions vs Classes
 * 
 * In JavaScript, any function can return a new object.
 * When it’s not a constructor function or class, it’s called a factory function.
 */

// class
class ClassCar {
  drive () {
    console.log('Vroom!');
  }
}

const car1 = new ClassCar();
console.log(car1.drive());


// constructor
function ConstructorCar () {}

ConstructorCar.prototype.drive = function () {
  console.log('Vroom!');
};

const car2 = new ConstructorCar();
console.log(car2.drive());


// factory
const proto = {
  drive () {
    console.log('Vroom!');
  }
};

function factoryCar () {
  return Object.create(proto);
}

const car3 = factoryCar();
console.log(car3.drive());

/**
 * Multiple ways of defining a function. 
 * 
 * 1. Via a function expression
 * 2. Via a function declaration
 * 3. Via the constructor Function()
 * 
 * All functions are objects, instances of Function:
 */

function foo(x) {
  return x;
}
console.log(foo instanceof Function);

/**
 * Function Expressions
 * They are not hoisted.
 * Because normal function expressions don’t have a name, they are also called anonymous function expressions.
 * 
 * Named function expressions
 * Named function expressions allow a function expression to refer to itself, which is useful for self-recursion.
 * 
 * Note - The name of a named function expression is only accessible inside the function expression.
 */

var mult = function (x, y) { return x * y };
console.log(mult(3,4))

var fac = function me(n) {
  if (n > 0) {
      return n * me(n-1);
  } else {
      return 1;
  }
};
console.log(fac(3));

/**
 * Function Declarations
 * 
 * They are statements rather than expressions.
 * 
 */

function add(x, y) {
  return x + y;
}

/**
 * Function Constructor
 * 
 * The constructor Function() evaluates JavaScript code stored in strings.
 * This way of defining a function is slow and keeps code in strings. 
 * It works similar to eval()
 */

var add2 = new Function('x', 'y', 'return x + y');

/**
 * Hoisting
 * Hoisting means “moving to the beginning of a scope.”
 * Function declarations are hoisted completely, variable declarations only partially.
 * Assignments are not hoisted.
 */

foo();
function foo() {  // this function is hoisted

}

/**
 * call(), apply(), and bind()
 * They can supply a value for this when invoking a method and thus are mainly interesting in an object-oriented context
 */

/**
 * Bind
 * This performs partial function application—
 * a new function is created that calls func with this set to thisValue and the following arguments set.
 */

function add(x, y) {
  return x + y;
}
var plus1 = add.bind(null, 1);
console.log(plus1(5));

/**
 * Call
 * The first parameter is the value that this will have inside the invoked function;
 * the remaining parameters are handed over as arguments to the invoked function.
 * It's function invocation.
 */

var jane = {
  name: 'Jane',
    sayHelloTo: function (otherName) {
      'use strict';
      console.log(this.name+' says hello to '+otherName);
  }
}

jane.sayHelloTo('Tarzan');
jane.sayHelloTo.call(jane, 'Tarzan');
var func = jane.sayHelloTo;
func.call(jane, 'Tarzan');

/**
 * Apply
 * This method uses the elements of argArray as arguments while calling the function func;
 */
var numbers = [5, 6, 2, 3, 7];
var max = Math.max.apply(null, numbers);
console.log(max);

var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

/**
 * arguments
 * It's an array-like object available in functions.
 * Not available in arrow functions
 */

function logArgs() {
  for (var i=0; i<arguments.length; i++) {
      console.log(i+'. '+arguments[i]);
  }
}

/**
 * this inside a function.
 * Refers to global in node and window in browsers
 */

function foo() {
  console.log(this);
}

function bar() {
  'use strict';
  console.log(this === global, this ===undefined) 
}

/**
 * Closures
 * A closure is the combination of a function bundled together (enclosed) with references to its 
 * surrounding state (the lexical environment). In other words, a closure gives you access to an 
 * outer function’s scope from an inner function. In JavaScript, closures are created every 
 * time a function is created, at function creation time.
 * 
 * Used in Partial Application of Functions
 * Private data
 * Callbacks
 * First Class functions
 */

function foo(arg) {
  return function() {
    console.log(arg);
  }
}

var logIt = foo('This parameter will be logged.');
logIt();


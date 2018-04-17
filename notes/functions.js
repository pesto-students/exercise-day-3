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
 */
foo();
function foo() {  // this function is hoisted

}
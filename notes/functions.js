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
 * 
 */


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
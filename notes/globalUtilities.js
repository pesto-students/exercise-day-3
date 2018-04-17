/* eslint-disable */

/**
 * Consoles and various options
 */

console.log('This is a log');

console.assert(true, 'does nothing');
console.assert(false, 'Whoops %s', 'didn\'t work');

console.table(["apples", "oranges", "bananas"]);

console.error({}) // Throws an error

console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");

console.log('%c a colorful message', 'background: green; color: white; display: block;');

console.log("%cThis Is Line One ", "font-size:30px");

console.log('\x1b[36m%s\x1b[34m%s\x1b[0m', 'I am cyan','i am blue'); // Node

/**
 * setTimeout
 * sets a timer which executes a function or specified piece of code once after the timer expires.
 * Pitfall: The timer is the least amount of time elapsed after which the callback will be called.
 * Return value: timeoutId
 * Can use clearTimeout to clear the timeout
 */

var timeoutId = setTimeout(function(text){
  console.log(text);
}, 3 * 1000, 'This will be logged');

/**
 * setInterval
 * repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
 * It returns an interval ID which uniquely identifies the interval,
 * so you can remove it later by calling clearInterval(). 
 */

var id = setInterval(function(num) {
  console.log(num);
}, 2 * 1000, 1)

clearInterval(id);
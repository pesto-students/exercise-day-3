
/* eslint-disable no-unused-vars */

/**
 * Don't use Array.prototype.reverse
 */
function reverseString(string) {

}

/**
 * Read this for factorial: https://en.wikipedia.org/wiki/Factorial
 */
function factorial(num) {

}

/**
 * Return a function that when invoked increments and returns a counter variable.
 * Example: const newCounter = counter();
 * newCounter(); // 1
 * newCounter(); // 2
 */
function counter() {

}

// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
function counterFactory() {

}

// Should return a function that invokes `cb`.
// The returned function should only allow `cb` to be invoked `n` times.
function limitFunctionCallCount(cb, n) {

}

// Should return a funciton that invokes `cb`.
// A cache should be kept in closure scope.
// The cache should keep track of all arguments have been used to invoke this function.
// If the returned function is invoked with arguments that it has already seen
// then it should return the cached result and not invoke `cb` again.
// `cb` should only ever be invoked once for a given set of arguments.
function cacheFunction(cb) {

}

/**
 * The function takes an operator and applies it to the
 * n given arguments.
 *
 * Example: applyOperator('+', 1,2,3,4,5) => 15
 *
 */
function applyOperator() {

}

/**
 * Do this without using the % operator.
 */
function isOdd(num) {

}

/**
 * Do this without using the % operator.
 */
function isEven(num) {

}

/**
 * Check: https://en.wikipedia.org/wiki/Palindrome
 */
function isPalindrone(stringOrNum) {

}

function findLongestWord(str) {

}

function titleCase(str) {

}

module.exports = {
  reverseString,
  factorial,
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
  applyOperator,
  isPalindrone,
  findLongestWord,
  titleCase,
  isEven,
  isOdd,
};

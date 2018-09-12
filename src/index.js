/* eslint-disable no-unused-vars */

/** Q1 (*)
 * Read this for factorial: https://en.wikipedia.org/wiki/Factorial
 */
function factorial(num) {
  if (num > 0) {
    return num * factorial(num - 1);
  }
  if (num === 0) {
    return 1;
  }
  return null;
}

/** Q2 (*)
 * Return a function that when invoked increments and returns a counter variable.
 * Example: const newCounter = counter();
 * newCounter(); // 1
 * newCounter(); // 2
 */
function counter() {

}

// Q3 (*)
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
function counterFactory() {

}

// Q4 (*)
// Return a true or false for wether a triangle can be formed using the three lines
function isTriangle(a, b, c) {

}

// Q5 (*)
// Should return a function that invokes `cb`.
// The returned function should only allow `cb` to be invoked `n` times.
function limitFunctionCallCount(cb, n) {

}

// Q6 (*)
// Should return a function that invokes `cb`.
// A cache should be kept in closure scope.
// The cache should keep track of all arguments have been used to invoke this function.
// If the returned function is invoked with arguments that it has already seen
// then it should return the cached result and not invoke `cb` again.
// `cb` should only ever be invoked once for a given set of arguments.
function cacheFunction(cb) {

}

/** Q7 (*)
 * The function takes an operator and applies it to the
 * n given arguments.
 *
 * Example: applyOperator('+', 1,2,3,4,5) => 15
 *
 */

// eslint-disable-next-line
function applyOperator() {
  function doSum(args) {
    let sum = 0;
    let i = 1;
    // eslint-disable-next-line
    for (i = 1; i < args.length; i++) {
      sum += args[i];
    }
    return sum;
  }
  function doSub(args) {
    let sub = args[1] - args[2];
    let i = 1;
    // eslint-disable-next-line
    for (i = 1; i < args.length; i++) {
      sub -= args[i];
    }
    return sub;
  }
  function doMul(args) {
    let mul = 1;
    let i = 1;
    // eslint-disable-next-line
    for (i = 1; i < args.length; i++) {
      mul *= args[i];
    }
    return mul;
  }
  function doDiv(args) {
    let div = args[1] / args[2];
    let i = 1;
    // eslint-disable-next-line
    for (i = 3; i < args.length; i++) {
      div /= args[i];
    }
    return div;
  }
  function doMod(args) {
    let mod = args[1] % args[2];
    let i = 1;
    // eslint-disable-next-line
    for (i = 1; i < args.length; i++) {
      mod %= args[i];
    }
    return mod;
  }
  if (arguments.length === 1) {
    return 0;
  }
  // eslint-disable-next-line
  switch (arguments[0]) {
    case '+':
      // eslint-disable-next-line
      return doSum(arguments);
      // eslint-disable-next-line
      break;
    case '-':
      // eslint-disable-next-line
      console.log(doSub(arguments));
      break;
    case '*':
      // eslint-disable-next-line
      return doMul(arguments);
      // eslint-disable-next-line
      break;
    case '/':
      // eslint-disable-next-line
      return doDiv(arguments);
      // eslint-disable-next-line
      break;
    case '%':
      // eslint-disable-next-line
      return doMod(arguments);
      // eslint-disable-next-line
      break;
    default:
      // eslint-disable-next-line
      throw new Error;
      // eslint-disable-next-line
      break;
  }
}

/** Q8 (*)
 * Do this without using the % operator.
 */
function isOdd(num) {
  // eslint-disable-next-line
  if ((num & 1)) {
    return true;
  }
  return false;
}

/** Q9 (*)
 * Do this without using the % operator.
 */
function isEven(num) {
  // eslint-disable-next-line
  if (!(num & 1)) {
    return true;
  }
  return false;
}

/** Q10 (*)
 * Check if a value is classified as a boolean primitive. Return true or false.
 * Boolean primitives are true and false.
 */
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
}

/** Q11 (*)
 * Given a positive integer num, return the sum of all odd Fibonacci
 * numbers that are less than or equal to num.
 * The first two numbers in the Fibonacci sequence are 1 and 1.
 * Every additional number in the sequence is the sum of the two
 * previous numbers. The first six numbers of the Fibonacci sequence
 * are 1, 1, 2, 3, 5 and 8.
 * For example, sumFibs(10) should return 10 because all odd Fibonacci
 * numbers less than 10 are 1, 1, 3, and 5
 */
function sumFibs(num) {

}

/** Q12 (*)
 * Sum all the prime numbers up to and including the provided number.
 * A prime number is defined as a number greater than one and having
 * only two divisors, one and itself. For example, 2 is a prime
 * number because it's only divisible by one and two.
 * The provided number may not be a prime.
 */
function sumPrimes(num) {

}

/** Q13 (*)
 * Return the length of diagonal, given the length of sides of rectangle
 */
function rectangleDiagonal(length, height) {

}

module.exports = {
  factorial,
  counter,
  counterFactory,
  limitFunctionCallCount,
  cacheFunction,
  applyOperator,
  isEven,
  isOdd,
  booWho,
  sumFibs,
  sumPrimes,
  rectangleDiagonal,
  isTriangle,
};

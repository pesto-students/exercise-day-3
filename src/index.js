/* eslint-disable no-unused-vars */

/** Q1 (*)
 * Read this for factorial: https://en.wikipedia.org/wiki/Factorial
 */
function factorial(num) {
  return num === 0 ? 1 : num * factorial(num - 1);
}

/** Q2 (*)
 * Return a function that when invoked increments and returns a counter variable.
 * Example: const newCounter = counter();
 * newCounter(); // 1
 * newCounter(); // 2
 */
function counter() {
  let val = 0;
  return () => {
    val += 1;
    return val;
  };
}

// Q3 (*)
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
function counterFactory() {
  let val = 0;
  return {
    // eslint-disable-next-line
    increment: () => { val += 1; return val },
    // eslint-disable-next-line
    decrement: () => { val -= 1; return val },
  };
}

// Q4 (*)
// Return a true or false for wether a triangle can be formed using the three lines
function isTriangle(a, b, c) {
  return (a + b > c) && (b + c > a) && (c + a > b);
}

// Q5 (*)
// Should return a function that invokes `cb`.
// The returned function should only allow `cb` to be invoked `n` times.
function limitFunctionCallCount(cb, n) {
  let calls = 0;

  // eslint-disable-next-line
  return function () {
    calls += 1;

    // eslint-disable-next-line
    if (calls < n) return cb(...[].slice.apply(arguments));

    return null;
  };
}

// Q6 (*)
// Should return a function that invokes `cb`.
// A cache should be kept in closure scope.
// The cache should keep track of all arguments have been used to invoke this function.
// If the returned function is invoked with arguments that it has already seen
// then it should return the cached result and not invoke `cb` again.
// `cb` should only ever be invoked once for a given set of arguments.
function cacheFunction(cb) {
  const argsCache = {};

  // eslint-disable-next-line
  return function () {
    // eslint-disable-next-line
    const argsArray = [].slice.apply(arguments);
    const argsStringified = argsArray.toString();

    // eslint-disable-next-line
    if (argsCache.hasOwnProperty(argsStringified)) return argsCache[argsStringified];

    argsCache[argsStringified] = cb(...argsArray);
    return argsCache[argsStringified];
  };
}

/** Q7 (*)
 * The function takes an operator and applies it to the
 * n given arguments.
 *
 * Example: applyOperator('+', 1,2,3,4,5) => 15
 *
 */
function applyOperator() {
}

/** Q8 (*)
 * Do this without using the % operator.
 */
function isOdd(num) {
  if (num === 0) return false;
  else if (num === 1) return true;

  // eslint-disable-next-line
  return isEven(num - 1);
}

/** Q9 (*)
 * Do this without using the % operator.
 */
function isEven(num) {
  if (num === 0) return true;
  else if (num === 1) return false;

  return isOdd(num - 1);
}

/** Q10 (*)
 * Check if a value is classified as a boolean primitive. Return true or false.
 * Boolean primitives are true and false.
 */
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return (typeof bool === 'boolean');
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
  function generateFibs(n) {
    const fibs = [0, 1];

    // eslint-disable-next-line
    while (true) {
      const next = fibs[fibs.length - 2] + fibs[fibs.length - 1];
      if (next <= n) fibs.push(next);
      else break;
    }
    return fibs;
  }
  return generateFibs(num).filter(x => x % 2 !== 0).reduce((acc, x) => acc + x, 0);
}

/** Q12 (*)
 * Sum all the prime numbers up to and including the provided number.
 * A prime number is defined as a number greater than one and having
 * only two divisors, one and itself. For example, 2 is a prime
 * number because it's only divisible by one and two.
 * The provided number may not be a prime.
 */
function sumPrimes(num) {
  function isPrime(n) {
    if (n === 2) return true;
    else if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) if (n % i === 0) return false;
    return true;
  }
  function buildIntList(start, stop, step) {
    const ret = [];
    for (let i = start; i <= stop; i += step) ret.push(i);
    return ret;
  }
  return buildIntList(2, num, 1).filter(isPrime).reduce((acc, x) => acc + x, 0);
}

/** Q13 (*)
 * Return the length of diagonal, given the length of sides of rectangle
 */
function rectangleDiagonal(length, height) {
  return (Math.sqrt((length * length) + (height * height)));
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

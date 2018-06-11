/* eslint-disable no-unused-vars */

/** Q1 (*)
 * Read this for factorial: https://en.wikipedia.org/wiki/Factorial
 */
function factorial(num) {
  if (num === 0) {
    return 1;
  }
  let fact = 1;
  for (let i = 2; i <= num; i += 1) {
    fact *= i;
  }
  return fact;
}

/** Q2 (*)
 * Return a function that when invoked increments and returns a counter variable.
 * Example: const newCounter = counter();
 * newCounter(); // 1
 * newCounter(); // 2
 */
function counter() {
  let count = 0;
  const myFunc = function () {
    count += 1;
    return count;
  };
  return myFunc;
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
  if ((a + b) < c || (b + c) < a || (c + a) < b) {
    return false;
  }
  return true;
}

// Q5 (*)
// Should return a function that invokes `cb`.
// The returned function should only allow `cb` to be invoked `n` times.
function limitFunctionCallCount(cb, n) {
  let count = 0;
  const myfunc = function () {
    count += 1;
    if (count > n) {
      return cb();
    }
    return null;
  };
  return myfunc;
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
function applyOperator() {

}

/** Q8 (*)
 * Do this without using the % operator.
 */
function isOdd(num) {
  if (Math.floor(num / 2) * 2 !== num) {
    return true;
  }
  return false;
}

/** Q9 (*)
 * Do this without using the % operator.
 */
function isEven(num) {
  if (Math.floor(num / 2) * 2 === num) {
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
  if (typeof bool === 'boolean') {
    return true;
  }
  return false;
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
  let sum = 2;
  let a = 1;
  let b = 1;
  let nextnum = 0;
  while (nextnum + a <= num) {
    nextnum = a + b;
    if (nextnum % 2 !== 0) {
      sum += nextnum;
    }
    a = b;
    b = nextnum;
  }
  return sum;
}

/** Q12 (*)
 * Sum all the prime numbers up to and including the provided number.
 * A prime number is defined as a number greater than one and having
 * only two divisors, one and itself. For example, 2 is a prime
 * number because it's only divisible by one and two.
 * The provided number may not be a prime.
 */
function sumPrimes(num) {
  let sum = 2;
  function isPrime(number) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  if (num < 2) {
    return 0;
  }
  if (num === 2) {
    return 2;
  }
  for (let i = 3; i <= num; i += 1) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

/** Q13 (*)
 * Return the length of diagonal, given the length of sides of rectangle
 */
function rectangleDiagonal(length, height) {
  return Math.sqrt((length ** 2) + (height ** 2));
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

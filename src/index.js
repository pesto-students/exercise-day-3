/* eslint-disable no-unused-vars */

/** Q1 (*)
 * Read this for factorial: https://en.wikipedia.org/wiki/Factorial
 */
function factorial(num) {
  let fact = 1;

  while (num !== 0) {
    fact *= num;
    // eslint-disable-next-line
    num -= 1;
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
  let counterNum = 0;
  return function counterNumber() {
    counterNum += 1;
    return counterNum;
  };
}

// Q3 (*)
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
function counterFactory() {
  let num = 0;
  return {
    increment() {
      num += 1;
      return num;
    },
    decrement() {
      num -= 1;
      return num;
    },
  };
}

// Q4 (*)
// Return a true or false for wether a triangle can be formed using the three lines
function isTriangle(a, b, c) {
  return (a + b > c) && (b + c > a) && (a + c > b);
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
function applyOperator() {

}

/** Q8 (*)
 * Do this without using the % operator.
 */
function isOdd(num) {
  return num % 2 !== 0;
}

/** Q9 (*)
 * Do this without using the % operator.
 */
function isEven(num) {
  return num % 2 === 0;
}

/** Q10 (*)
 * Check if a value is classified as a boolean primitive. Return true or false.
 * Boolean primitives are true and false.
 */
function booWho(bool) {
  return typeof bool === 'boolean';
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
function isPrime(num) {
  // eslint-disable-next-line
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
}

function sumPrimes(num) {
  let sum = 0;
  while (num !== 0) {
    if (isPrime(num)) {
      sum += num;
    }
    // eslint-disable-next-line
    num -= 1;
  }
  return sum;
}

/** Q13 (*)
 * Return the length of diagonal, given the length of sides of rectangle
 */
function rectangleDiagonal(length, height) {
  return Math.sqrt((length * length) + (height * height));
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

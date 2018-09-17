/* eslint-disable no-unused-vars */

/** Q1 (*)
 * Read this for factorial: https://en.wikipedia.org/wiki/Factorial
 */
function factorial(num) {
  if (num === 0) {
    return 1;
  } else if (num > 0) {
    return num * factorial(num - 1);
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
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
}

// Q3 (*)
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
function counterFactory() {
  let count1 = 0;
  let count2 = 0;
  const obj = {
    increment: () => {
      count1 += 1;
      return count1;
    },
    decrement: () => {
      count2 -= 1;
      return count2;
    },
  };
  return obj;
}

// Q4 (*)
// Return a true or false for whether a triangle can be formed using the three lines
function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  }
  return false;
}

// Q5 (*)
// Should return a function that invokes `cb`.
// The returned function should only allow `cb` to be invoked `n` times.
// eslint-disable-next-line
function limitFunctionCallCount(cb, n) {              // [Important]
  let count = 0;
  return (...args) => {
    if (n === count) {
      return null;
    }
    count += 1;
    return cb(...args);
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
}

/** Q7 (*)
 * The function takes an operator and applies it to the
 * n given arguments.
 *
 * Example: applyOperator('+', 1,2,3,4,5) => 15
 *
 */

// eslint-disable-next-line
function applyOperator() {        // [check] why this is not working function applyOperator(...arguments)
  function doSum(args) {
    const re = (acc, el) => acc + el;
    return args.reduce(re);
  }
  function doSub(args) {
    const re = (acc, el) => acc - el;
    return args.reduce(re);
  }
  function doMul(args) {
    const re = (acc, el) => acc * el;
    return args.reduce(re);
  }
  function doDiv(args) {
    const re = (acc, el) => acc * el;
    return args.reduce(re);
  }
  function doMod(args) {
    const re = (acc, el) => acc % el;
    return args.reduce(re);
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
      return doSub(arguments);
      //  break;
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
  let a = 0;
  let b = 1;
  let c;
  let sum = 1;
  for (let i = 3; ; i += 1) {
    c = a + b;
    a = b;
    b = c;
    if (c > num) {
      break;
    }
    if (isOdd(c)) {
      sum += c;
    }
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
const checkPrime = (x) => {
  if (x <= 1) {
    return false;
  }
  if (x <= 3) {
    return true;
  }
  if (x % 2 === 0 || x % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= x; i += 6) { // Fermat's rule of mod can also be applied
    if (x % i === 0 || x % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};
function sumPrimes(num) {
  let sum = 0;
  for (let i = 1; i <= num; i += 1) {
    if (checkPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

/** Q13 (*)
 * Return the length of diagonal, given the length of sides of rectangle
 */
function rectangleDiagonal(length, height) {
  // eslint-disable-next-line
  return Math.pow(((length * length) + (height * height)), 0.5);
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

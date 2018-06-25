/* eslint-disable no-unused-vars */

/** Q1 (*)
 * Read this for factorial: https://en.wikipedia.org/wiki/Factorial
 */
function factorial(num) {
  if (num === 0) return 1;
  return factorial(num - 1) * num;
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
  let count = 0;
  return {
    increment: () => {
      count += 1;
      return count;
    },

    decrement: () => {
      count -= 1;
      return count;
    },
  };
}

// Q4 (*)
// Return a true or false for whether a triangle can be formed using the three lines
function isTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }
  return true;
}

// Q5 (*)
// Should return a function that invokes `cb`.
// The returned function should only allow `cb` to be invoked `n` times.
function limitFunctionCallCount(cb, n) {
  let count = n;
  return (...args) => {
    if (count > 0) {
      count -= 1;
      return cb(...args);
    }
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
  const cbParams = new Map();
  return (param) => {
    if (cbParams.has(param)) {
      return cbParams.get(param);
    }
    const answer = cb(param);
    cbParams.set(param);
    return answer;
  };
}

/** Q7 (*)
 * The function takes an operator and applies it to the
 * n given arguments.
 *
 * Example: applyOperator('+', 1,2,3,4,5) => 15
 *
 */
function applyOperator(operator, ...operands) {
  if (operands.length === 0) return 0;
  const operatorsApplied = operands.reduce((acc, operand, index) => {
    if (index === 0 && ((operator === '*') || (operator === '/') || (operator === '%'))) {
      return acc.concat(`${operand}`);
    }
    return acc.concat(`${operator}${operand}`);
  }, '');
  return eval(operatorsApplied); // eslint-disable-line
}

/** Q8 (*)
 * Do this without using the % operator.
 */
function isOdd(num) {
  const quotientFloored = Math.floor(num / 2);

  if ((quotientFloored * 2) === num) {
    return false;
  }
  return true;
}

/** Q9 (*)
 * Do this without using the % operator.
 */
function isEven(num) {
  const quotientFloored = Math.floor(num / 2);

  if ((quotientFloored * 2) === num) {
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
  if (typeof bool === 'boolean') return true;
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

function getFibonnaciSequence(num) {
  if (num <= 1) return [0, 1];
  const s = getFibonnaciSequence(num - 1);
  if (!((num - 1) % 2)) {
    if ((s[s.length - 1] + s[s.length - 2]) <= num) {
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
  }
  return s;
}

function sumFibs(num) {
  const fibonacciSequence = getFibonnaciSequence(num).slice(1);

  return fibonacciSequence.reduce((total, item) => total + item);
}

/** Q12 (*)
 * Sum all the prime numbers up to and including the provided number.
 * A prime number is defined as a number greater than one and having
 * only two divisors, one and itself. For example, 2 is a prime
 * number because it's only divisible by one and two.
 * The provided number may not be a prime.
 */


function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i += 1) {
    if (!(num % i)) return false;
  }
  return true;
}
function findAllPrimes(num) {
  const arr = [];
  for (let i = 2; i <= num; i += 1) {
    if (isPrime(i)) arr.push(i);
  }

  return arr;
}
function sumPrimes(num) {
  const primes = findAllPrimes(num);

  return primes.reduce((acc, item) => acc + item);
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

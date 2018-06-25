/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disble no-arguments */
/* eslint-disable no-bitwise */

/** Q1 (*)
 * Read this for factorial: https://en.wikipedia.org/wiki/Factorial
 */
function factorial(num) {
  let result = 0;
  if (num === 0 || num === 1) {
    return 1;
  }
  result = factorial(num - 1) * num;
  return result;
}

/** Q2 (*)
 * Return a function that when invoked increments and returns a counter variable.
 * Example: const newCounter = counter();
 * newCounter(); // 1
 * newCounter(); // 2
 */
function counter() {
  let x = 0;
  function innerFunc() {
    x += 1;
    return x;
  }
  return innerFunc;
}

// Q3 (*)
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
function counterFactory() {
  let count = 0;
  const operation = {
    increment() {
      count += 1;
      return count;
    },
    decrement() {
      count -= 1;
      return count;
    },
  };
  return operation;
}

// Q4 (*)
// Return a true or false for wether a triangle can be formed using the three lines
function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) {
    return true;
  }
  return false;
}

// Q5 (*)
// Should return a function that invokes `cb`.
// The returned function should only allow `cb` to be invoked `n` times.
function limitFunctionCallCount(cb, invokeCount) {
  var count = 0;
  function callCount(...args) {
    if (count < invokeCount) {
      count += 1;
      return cb(...args);
    }
    return null;
  }
  return callCount;
}

// Q6 (*)
// Should return a function that invokes `cb`.
// A cache should be kept in closure scope.
// The cache should keep track of all arguments have been used to invoke this function.
// If the returned function is invoked with arguments that it has already seen
// then it should return the cached result and not invoke `cb` again.
// `cb` should only ever be invoked once for a given set of arguments.
function cacheFunction(cb) {
  const cache = new Map();
  function innerFunc(...args) {
    const argsKey = args.join('');
    if (cache.has(argsKey)) return cache.get(argsKey);
    const answer = cb(...args);
    cache.set(argsKey, answer);
    return answer;
  }
  return innerFunc;
}

/** Q7 (*)
 * The function takes an operator and applies it to the
 * n given arguments.
 *
 * Example: applyOperator('+', 1,2,3,4,5) => 15
 *
 */
function applyOperator(operator, ...operand) {
  if (!operand.length) {
    return 0;
  }
  let exp = operand.reduce((acc, val) => `${acc}${operator}${val}`, '');
  console.log(exp);
  if (operator !== '+' && operator !== '-') {
    exp = exp.slice(1);
  }
  console.log(exp);
  const result = eval(exp); /* eslint-disable-line */
  return result;
}

/** Q8 (*)
 * Do this without using the % operator.
 */
function isOdd(num) {
  if (num & 1) {
    return true;
  }
  return false;
}

/** Q9 (*)
 * Do this without using the % operator.
 */
function isEven(num) {
  if (num & 1) {
    return false;
  } return true;
}

/** Q10 (*)
 * Check if a value is classified as a boolean primitive. Return true or false.
 * Boolean primitives are true and false.
 */
function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  }
  return false;
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
  var a = 1;
  var b = 1;
  var sum = a + b;
  var c;
  while (b <= num) {
    c = b;
    b = a + b;
    a = c;
    if (b <= num && b % 2 === 1) {
      sum += b;
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
function sumPrimes(num) {
  var sum = 2;
  var i;
  var j;
  var isPrime;

  for (i = 3; i <= num; i += 2) {
    j = 3;
    isPrime = true;
    while (j <= i / 2) {
      if (i % j === 0) {
        isPrime = false;
      }
      j += 2;
    }
    if (isPrime) {
      sum += i;
    }
  }
  return sum;
}

/** Q13 (*)
 * Return the length of diagonal, given the length of sides of rectangle
 */
function rectangleDiagonal(length, height) {
  var diagonal;
  var x = (length * length) + (height * height);
  diagonal = Math.sqrt(x);
  return diagonal;
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

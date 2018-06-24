/* eslint-disable no-unused-vars */

/** Q1 (*)
 * Read this for factorial: https://en.wikipedia.org/wiki/Factorial
 */
function factorial(num) {
  if (num === 0) { return 1; } return factorial(num - 1) * num;
}


/** Q2 (*)
 * Return a function that when invoked increments and returns a counter variable.
 * Example: const newCounter = counter();
 * newCounter(); // 1
 * newCounter(); // 2
 */
function counter() {
  let a = 0;
  return (() => { a += 1; return a; });
}


// Q3 (*)
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
function counterFactory() {
  let a = 0;
  return Object.create({
    increment() { a += 1; return a; },
    decrement() { a -= 1; return a; },
  });
}

// Q4 (*)
// Return a true or false for wether a triangle can be formed using the three lines
function isTriangle(a, b, c) {
  return Math.sqrt((a ** 2) + (b ** 2)) === c;
}

// Q5 (*)
// Should return a function that invokes `cb`.
// The returned function should only allow `cb` to be invoked `n` times.
function limitFunctionCallCount(cb, n) {
  let a = n;
  return (...Args) => {
    if (a !== 0) { a -= 1; return cb(...Args); }
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
  const ans = new Map();
  return (arg) => {
    if (ans.has(arg)) return ans.get(arg);
    const value = cb(arg);
    ans.set(arg, value);
    return value;
  };
}

/** Q7 (*)
 * The function takes an operator and applies it to the
 * n given arguments.
 *
 * Example: applyOperator('+', 1,2,3,4,5) => 15
 *
 */
function applyOperator(opr, ...arr) {
  let opr1 = 0;
  if (opr === '+') opr1 = 1;
  if (opr === '-') opr1 = 2;
  if (opr === '*') opr1 = 3;
  if (opr === '/') opr1 = 4;
  if (opr === '%') opr1 = 5;
  switch (opr1) {
    case 0: throw (arr);
    case 1: return arr.reduce((acc, cur) => acc + cur, 0);
    case 2: return arr.reduce((acc, cur) => acc - cur, 0);
    case 3: return arr.reduce((acc, cur) => acc * cur, 1);
    case 4: return parseFloat(arr.reduce((acc, cur) => acc / cur, 1).toFixed(4));
    case 5: { let n = arr[0];
      for (let i = 1; i < arr.length; i += 1) {
        n %= arr[i];
      }
      return n; }
    default: return 0;
  }
}

/** Q8 (*)
 * Do this without using the % operator.
 */
function isOdd(num) {
  if (((num / 2) !== Math.floor(num / 2))) { return Boolean(true); }
  return Boolean(false);
}

/** Q9 (*)
 * Do this without using the % operator.
 */
function isEven(num) {
  if (((num / 2) !== Math.floor(num / 2))) { return Boolean(false); }
  return Boolean(true);
}

/** Q10 (*)
 * Check if a value is classified as a boolean primitive. Return true or false.
 * Boolean primitives are true and false.
 */
function booWho(bool) {
  if (bool === true || bool === false) { return true; }
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
  const ansFib = [1, 1];
  for (let i = 2; i <= num; i += 1) {
    const ans = ansFib[i - 2] + ansFib[i - 1];
    if (ans <= num)ansFib.push(ans);
    else break;
  }
  const ans = ansFib.reduce((acc, cur) => {
    if (cur % 2 === 1) return acc + cur;
    return acc;
  }, 0);
  return ans;
}

/** Q12 (*)
 * Sum all the prime numbers up to and including the provided number.
 * A prime number is defined as a number greater than one and having
 * only two divisors, one and itself. For example, 2 is a prime
 * number because it's only divisible by one and two.
 * The provided number may not be a prime.
 */
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) { return false; }
  }
  return true;
}
function sumPrimes(num) {
  let ans = 0;
  for (let i = 0; i <= num; i += 1) {
    if (isPrime(i)) { ans += i; }
  }
  return ans;
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

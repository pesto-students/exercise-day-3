/* eslint-disable */

/** Q1 (*)
 * Read this for factorial: https://en.wikipedia.org/wiki/Factorial
 */
function factorial(num) {
  var fact=1;
  for (var i=1;i<=num;i++){
    fact=fact*i;
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
  var value =1
  var newCounter = function (){
    return value++;
  }
  return newCounter;

}

// Q3 (*)
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
function counterFactory() {
  var value =0;
  var funcObject ={
    increment : function(){
      value ++;
      return value;
    },

    decrement : function(){
      value--;
      return value;
    }
  }
  return funcObject;

}



// Q4 (*)
// Return a true or false for wether a triangle can be formed using the three lines
function isTriangle(a, b, c) {
  if((a+b)>c && (a+c)>b && (b+c)>a ){
    return true;
  }
  else {
    return false;
  }

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
  if((Math.floor(num/2)*2)===num){
    return false;
  }
  else{
    return true;
  }
}

/** Q9 (*)
 * Do this without using the % operator.
 */
function isEven(num) {
  
  if((Math.floor(num/2)*2)===num){
    return true;
  }
  else{
    return false;
  }


}

/** Q10 (*)
 * Check if a value is classified as a boolean primitive. Return true or false.
 * Boolean primitives are true and false.
 */
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if(typeof bool === 'boolean'){
    return true;
  }
  else{
    return false;
  }
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
  var sum=1;
  var a=0;
  var b=1;
  var c;
  for(var i=1;;i++){
    c= a+b;
    if(c>num){
      break;
    }
    if(c%2 ===0){
      
    }
    else{
      sum=sum+c;
    }
    a=b;
    b=c;

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
  var sum=0;
  for(var i=2; i<=num;i++){
    if(isPrime(i)){

      sum += i;
    }
  }
  return sum;

}

function isPrime(num){
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return true;
}

/** Q13 (*)
 * Return the length of diagonal, given the length of sides of rectangle
 */
function rectangleDiagonal(length, height) {
  return (Math.sqrt(Math.pow(length,2)+Math.pow(height,2)))

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

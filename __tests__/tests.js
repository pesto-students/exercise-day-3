const {
  reverseString,
  factorial,
  counter,
  counterFactory,
  limitFunctionCallCount,
  cacheFunction,
  applyOperator,
  isPalindrone,
  findLongestWord,
} = require('../src');

describe('when reverseString is called', () => {
  it('should reverse the string', () => {
    expect(reverseString('hello!')).toEqual('!olleh');
    expect(reverseString('')).toEqual('');
    expect(reverseString('Greetings from Earth')).toEqual('htraE morf sgniteerG');
  });
});


describe('when factorial is called', () => {
  test('should return a number', () => {
    expect(typeof factorial(0)).toEqual('number');
    expect(factorial(5)).toEqual(120);
    expect(factorial(20)).toEqual(2432902008176640000);
  });
});

describe('applyOperator', () => {
  test('should return 0 when no operands are specified', () => {
    expect(applyOperator('+')).toEqual(0);
  });

  test('should sum when +, -, *, /, % operator is applied', () => {
    expect(applyOperator('+', 1, 2, 3, 4, 5)).toEqual(15);
    expect(applyOperator('+', 1)).toEqual(1);

    expect(applyOperator('-', 1, 2, 3, 4, 5)).toEqual(-15);
    expect(applyOperator('-', 1)).toEqual(-1);

    expect(applyOperator('*', 1, 2, 3, 4, 5)).toEqual(120);
    expect(applyOperator('*', 1)).toEqual(1);

    expect(applyOperator('/', 1, 2, 3, 4, 5)).toEqual(15);
    expect(applyOperator('/', 1)).toEqual(1);

    expect(applyOperator('%', 27, 13, 3)).toEqual(1);
    expect(applyOperator('%', 21)).toEqual(21);
  });

  test('should throw error when operator is not sepcified', () => {
    expect(applyOperator()).toThrowError();
  });
});

describe('findLongestWord', () => {
  test('should find the longest words in given sentences', () => {
    expect(findLongestWord('The quick brown fox jumped over the lazy dog.')).toEqual('jumped');
    expect(findLongestWord('The quick brown fox jumped over the lazy++ dog..........')).toEqual('jumped');
    expect(findLongestWord('A white green ball.')).toEqual('white');
  });

  test('throw an error if the parameter is not a string or missing', () => {
    expect(findLongestWord(122)).toThrowError();
    expect(findLongestWord()).toThrowError();
  });
});

describe('titleCase', () => {

});

describe('isPalindrome', () => {
  test('should successfully check strings and numbers', () => {
    expect(isPalindrone('eye')).toBe(true);
    expect(isPalindrone('_eye')).toBe(true);
    expect(isPalindrone('race car')).toBe(true);
    expect(isPalindrone('not a palindrome')).toBe(false);
    expect(isPalindrone('A man, a plan, a canal. Panama')).toBe(true);
    expect(isPalindrone('0_0 (: /- :) 0-0')).toBe(false);

    expect(isPalindrone(12321)).toBe(true);
    expect(isPalindrone(22)).toBe(true);
    expect(isPalindrone(2442)).toBe(true);
    expect(isPalindrone(1234)).toBe(false);
  });
});

describe('closure', () => {
  describe('counter', () => {
    it('should return a function', () => {
      expect(typeof counter()).toBe('function');
    });
    it('should return 1 when the returned function is invoked', () => {
      expect(counter()()).toBe(1);
    });
    it('should increment and return the number each time the function is invoked', () => {
      const counterFunction = counter();
      expect(counterFunction()).toBe(1);
      expect(counterFunction()).toBe(2);
      expect(counterFunction()).toBe(3);
      expect(counterFunction()).toBe(4);
      expect(counterFunction()).toBe(5);
    });
  });

  describe('counterFactory', () => {
    it('should return an object with an increment method and a decrement method', () => {
      expect(typeof counterFactory().increment).toBe('function');
      expect(typeof counterFactory().decrement).toBe('function');
    });
    it('should have a working increment method that increments the private counter and returns the new value', () => {
      const myCounter = counterFactory();
      expect(myCounter.increment()).toBe(1);
      expect(myCounter.increment()).toBe(2);
      expect(myCounter.increment()).toBe(3);
      expect(myCounter.increment()).toBe(4);
    });
    it('should have a working decrement method that decrements the private counter and returns the new value', () => {
      const myCounter = counterFactory();
      expect(myCounter.decrement()).toBe(-1);
      expect(myCounter.decrement()).toBe(-2);
      expect(myCounter.decrement()).toBe(-3);
      expect(myCounter.decrement()).toBe(-4);
    });
  });

  describe('limitFunctionCallCount', () => {
    it('should return a function', () => {
      expect(typeof limitFunctionCallCount()).toBe('function');
    });
    it('should return a wrapped version of the original function that can only be invoked n times', () => {
      const foo = () => (true);
      const limitedFunction = limitFunctionCallCount(foo, 2);
      expect(limitedFunction()).toBe(true);
      limitedFunction();
      expect(limitedFunction()).toBe(null);
    });
    it('should properly handle arguments in the wrapped function', () => {
      const foo = (x, y, z) => (x + y + z);
      const limitedFunction = limitFunctionCallCount(foo, 2);
      expect(limitedFunction(5, 10, 15)).toBe(30);
      limitedFunction(0, 0, 0);
      expect(limitedFunction()).toBe(null);
    });
  });

  describe('cacheFunction', () => {
    it('should return a function', () => {
      expect(typeof cacheFunction()).toBe('function');
    });
    it('The cached function should return the correct result', () => {
      const foo = x => (x * x);
      const cachedFunction = cacheFunction(foo);
      expect(cachedFunction(5)).toBe(25);
    });
    it('should cache function results and not rerun the original callback if the same arguments are presented', () => {
      const foo = jest.fn();
      const myCachedFunction = cacheFunction(foo);
      myCachedFunction(true);
      myCachedFunction(true);
      myCachedFunction(true);
      myCachedFunction(true);
      myCachedFunction(true);
      myCachedFunction(10);
      myCachedFunction(10);
      myCachedFunction(10);
      myCachedFunction(10);
      myCachedFunction(10);
      expect(foo).toHaveBeenCalledTimes(2);
    });
  });
});

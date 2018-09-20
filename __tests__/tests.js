const {
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
} = require('../src');

describe('factorial', () => {
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

  test('should apply the operator when +, -, *, /, % operator is applied', () => {
    expect(applyOperator('+', 1, 2, 3, 4, 5)).toEqual(15);
    expect(applyOperator('+', 1)).toEqual(1);

    expect(applyOperator('-', 1, 2, 3, 4, 5)).toEqual(-15);
    expect(applyOperator('-', 1)).toEqual(-1);

    expect(applyOperator('*', 1, 2, 3, 4, 5)).toEqual(120);
    expect(applyOperator('*', 1)).toEqual(1);

    expect(applyOperator('/', 1, 2, 3, 4, 5)).toEqual(0.0083);
    expect(applyOperator('/', 1)).toEqual(1);

    expect(applyOperator('%', 27, 13, 3)).toEqual(1);
    expect(applyOperator('%', 21)).toEqual(21);
  });

  test('should throw error when operator is not specified', () => {
    expect(() => applyOperator()).toThrowError();
  });
});

describe('isEven', () => {
  it('should return true if even number is sent as argument', () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(2)).toBe(true);
  });

  it('should return false if odd number is sent as argument', () => {
    expect(isEven(51)).toBe(false);
    expect(isEven(1)).toBe(false);
  });
});

describe('sumFibs', () => {
  test('should return a number', () => {
    expect(typeof sumFibs(1)).toEqual('number');
  });

  test('should return the correct number', () => {
    expect(sumFibs(1000)).toBe(1785);
    expect(sumFibs(4000000)).toBe(4613732);
    expect(sumFibs(4)).toBe(5);
    expect(sumFibs(75024)).toBe(60696);
  });
});

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

describe('isOdd', () => {
  it('should return true if odd number is sent as argument', () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(41)).toBe(true);
  });

  it('should return false if even number is sent as argument', () => {
    expect(isOdd(2)).toBe(false);
    expect(isOdd(24)).toBe(false);
  });
});

describe('limitFunctionCallCount', () => {
  it('should return a function', () => {
    expect(typeof limitFunctionCallCount()).toBe('function');
  });
  it('should return a wrapped version of the original function that can only be invoked n times', () => {
    const foo = () => (1);
    const limitedFunction = limitFunctionCallCount(foo, 2);
    expect(limitedFunction()).toBe(1);
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

describe('isTriangle', () => {
  it('should return true if triangle can be formed given three lines', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
  });

  it('should return false if triangle can not be formed given three lines', () => {
    expect(isTriangle(1, 4, 2)).toBe(false);
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

describe('rectangleBlock', () => {
  it('calculates rectangle diagonal', () => {
    expect(rectangleDiagonal(3, 4)).toBe(5);
  });
});

describe('Logical operators', () => {
  test('(a && b) || c', () => {
    expect(('a' && 'b') || 'c').toBe('b');
  });

  test('(a || b) && c', () => {
    expect(('a' || 'b') && 'c').toBe('c');
  });

  test('null && (b || c)', () => {
    expect(null && ('b' || 'c')).toBe(null);
  });

  test('a && (null || c)', () => {
    expect('a' && (null || 'c')).toBe('c');
  });

  test('a && (b || null)', () => {
    expect('a' && ('b' || null)).toBe('b');
  });

  test('a || (b && c)', () => {
    expect('a' || ('b' && 'c')).toBe('a');
  });

  test('null || (b && c)', () => {
    expect(null || ('b' && 'c')).toBe('c');
  });

  test('a || (null && c)', () => {
    expect('a' || (null && 'c')).toBe('a');
  });
});

describe('sumPrimes', () => {
  test('should return a number', () => {
    expect(typeof sumPrimes(10)).toEqual('number');
  });
  test('should return the correct output', () => {
    expect(sumPrimes(10)).toBe(17);
    expect(sumPrimes(977)).toBe(73156);
  });
});

describe('booWho', () => {
  test('should return the correct expected output', () => {
    expect(booWho(true)).toBe(true);
    expect(booWho(false)).toBe(true);
    expect(booWho([1, 2, 3])).toBe(false);
    expect(booWho(NaN)).toBe(false);
    expect(booWho('a')).toBe(false);
    expect(booWho('true')).toBe(false);
  });
});

const {
  reverseString,
  isPalindrome,
  longestWordInString,
  rot13,
  telephoneCheck,
  largestOfFour,
  getIndexToIns,
  repeatStringNumTimes,
  bouncer,
  sumAll,
  diffArray,
  convertToRoman,
  binaryAgent,
  steamrollArray,
  pairwise,
} = require('../src');

describe('reverseString', () => {
  test('should reverse the string', () => {
    expect(reverseString('hello!')).toEqual('!olleh');
    expect(reverseString('')).toEqual('');
    expect(reverseString('Greetings from Earth')).toEqual('htraE morf sgniteerG');
  });
});

describe('getIndexToIns', () => {
  test('should return the correct output', () => {
    expect(getIndexToIns([10, 20, 30, 40, 50], 35)).toEqual(3);
    expect(getIndexToIns([10, 20, 30, 40, 50], 30)).toEqual(2);
    expect(getIndexToIns([40, 60], 50)).toEqual(1);
    expect(getIndexToIns([3, 10, 5], 3)).toEqual(0);
    expect(getIndexToIns([5, 3, 20, 3], 5)).toEqual(2);
    expect(getIndexToIns([2, 5, 10], 15)).toEqual(3);
  });
});

describe('longestWordInString', () => {
  test('should return a number', () => {
    expect(typeof longestWordInString('some hello')).toBe('number');
  });
  test('should return the correct solution', () => {
    expect(longestWordInString('The quick brown fox jumped over the lazy dog')).toBe(6);
    expect(longestWordInString('May the force be with you')).toBe(5);
    expect(longestWordInString('What if we try a super-long word such as otorhinolaryngology')).toBe(19);
  });
});

describe('rot13', () => {
  test('should correctly decipher the input', () => {
    expect(rot13('SERR PBQR PNZC')).toEqual('FREE CODE CAMP');
    expect(rot13('SERR CVMMN!')).toEqual('FREE PIZZA!');
    expect(rot13('SERR YBIR?')).toEqual('FREE LOVE?');
    expect(rot13('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.')).toEqual('THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.');
  });
});

describe('isPalindrome', () => {
  test('should successfully check strings and numbers', () => {
    expect(isPalindrome('eye')).toBe(true);
    expect(isPalindrome('_eye')).toBe(true);
    expect(isPalindrome('race car')).toBe(true);
    expect(isPalindrome('not a palindrome')).toBe(false);
    expect(isPalindrome('A man, a plan, a canal. Panama')).toBe(true);
    expect(isPalindrome('0_0 (: /- :) 0-0')).toBe(true);

    expect(isPalindrome(12321)).toBe(true);
    expect(isPalindrome(22)).toBe(true);
    expect(isPalindrome(2442)).toBe(true);
    expect(isPalindrome(1234)).toBe(false);
  });
});

describe('telephoneCheck', () => {
  test('should return correct boolean', () => {
    expect(telephoneCheck('1 (555) 555-5555')).toBe(true);
    expect(telephoneCheck('(555)555-5555')).toBe(true);
    expect(telephoneCheck('555-5555')).toBe(false);
    expect(telephoneCheck('1 555)555-5555')).toBe(false);
    expect(telephoneCheck('123**&!!asdf#')).toBe(false);
    expect(telephoneCheck('0 (757) 622-7382')).toBe(false);
    expect(telephoneCheck('-1 (757) 622-7382')).toBe(false);
    expect(telephoneCheck('(555)5(55?)-5555')).toBe(false);
  });
});

describe('largeOfFour', () => {
  test('should return a array', () => {
    expect(Array
      .isArray(largestOfFour([
        [13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1],
      ]))).toBe(true);

    expect(largestOfFour([
      [13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1],
    ])).toEqual([27, 5, 39, 1001]);

    expect(largestOfFour(largestOfFour([
      [4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1],
    ]))).toEqual([9, 35, 97, 1000000]);
  });
});

describe('bouncer', () => {
  test('should return the correct expected array', () => {
    expect(bouncer([7, 'ate', '', false, 9])).toEqual([7, 'ate', 9]);
    expect(bouncer(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    expect(bouncer([false, null, 0, NaN, undefined, ''])).toEqual([]);
    expect(bouncer([1, null, NaN, 2, undefined])).toEqual([1, 2]);
  });
});

describe('repeatStringNumTimes', () => {
  test('should return the correct string', () => {
    expect(repeatStringNumTimes('*', 3)).toEqual('***');
    expect(repeatStringNumTimes('abc', 3)).toEqual('abcabcabc');
    expect(repeatStringNumTimes('abc', -2)).toEqual('');
  });
});

describe('sumAll', () => {
  test('should return a number', () => {
    expect(typeof sumAll([1, 4])).toEqual('number');
  });
  test('should return correct number', () => {
    expect(sumAll([1, 4])).toBe(10);
    expect(sumAll([4, 1])).toBe(10);
    expect(sumAll([5, 10])).toBe(45);
    expect(sumAll([10, 5])).toBe(45);
  });
});

describe('diffArray', () => {
  test('should return an array', () => {
    expect(Array.isArray(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))).toBe(true);
  });
  test('should return the correct expected array', () => {
    expect(diffArray(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']))
      .toEqual(['pink wool']);

    expect(diffArray(['andesite', 'grass', 'dirt', 'dead shrub'], ['andesite', 'grass', 'dirt', 'dead shrub']))
      .toEqual([]);

    expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
      .toEqual([4]);

    expect(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]))
      .toEqual(['piglet', 4]);

    expect(diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']))
      .toEqual(['snuffleupagus', 'cookie monster', 'elmo']);

    expect(diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']))
      .toEqual([1, 'calf', 3, 'piglet', 7, 'filly']);
  });
});

describe('convertToRoman', () => {
  test('should return correct roman', () => {
    expect(convertToRoman(2)).toEqual('II');
    expect(convertToRoman(3)).toEqual('III');
    expect(convertToRoman(4)).toEqual('IV');
    expect(convertToRoman(5)).toEqual('V');
    expect(convertToRoman(12)).toEqual('XII');
    expect(convertToRoman(45)).toEqual('XLV');
    expect(convertToRoman(83)).toEqual('LXXXIII');
    expect(convertToRoman(501)).toEqual('DI');
    expect(convertToRoman(891)).toEqual('DCCCXCI');
    expect(convertToRoman(1004)).toEqual('MIV');
    expect(convertToRoman(2014)).toEqual('MMXIV');
    expect(convertToRoman(3999)).toEqual('MMMCMXCIX');
  });
});

describe('binaryAgent', () => {
  test('should return correct output', () => {
    expect(binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'))
      .toBe('Aren\'t bonfires fun!?');
  });
});

describe('steamrollArray', () => {
  test('should return the correct output', () => {
    expect(steamrollArray([[['a']], [['b']]])).toEqual(['a', 'b']);
    expect(steamrollArray([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
    expect(steamrollArray([1, [], [3, [[4]]]])).toEqual([1, 3, 4]);
    expect(steamrollArray([1, {}, [3, [[4]]]])).toEqual([1, {}, 3, 4]);
  });
});

describe('pairwise', () => {
  test('should return the correct output', () => {
    expect(pairwise([1, 4, 2, 3, 0, 5], 7)).toBe(11);
    expect(pairwise([1, 3, 2, 4], 4)).toBe(1);
    expect(pairwise([1, 1, 1], 2)).toBe(1);
    expect(pairwise([0, 0, 0, 0, 1, 1], 1)).toBe(10);
    expect(pairwise([], 100)).toBe(0);
  });
});

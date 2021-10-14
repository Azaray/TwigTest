import { arraySplitter } from '../../src/utils/arraySplitter.js';
const array = [1,2,3,4,5,6,7,8,9];
const mixedArray = [1.1, "word", "5", 6, "seven7"];

test('splits array into 3 equally sized arrays with no remainder', () => {
    expect(arraySplitter(array,3)).toBe([[1,2,3],[4,5,6],[7,8,9]]);
});

test('splits array into 3 gruops of 2 and 1 group of 3', () => {
    expect(arraySplitter(array,4)).toBe([[ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8, 9 ]]);
});


const arraySplitter = require('../src/utils/arraySplitter.js');

let array;
const bigRemainderArray = [1,2,3,4,5,6];
const mixedArray = [1.1, "word", "5", 6, "seven7", 89, 1.65, "dh9"];

beforeEach(() => {
    array = [1,2,3,4,5,6,7,8,9];
});

test('splits array into 3 equally sized arrays with no remainder', () => {
    expect(arraySplitter.arraySplitter(array,3)).toStrictEqual([[1,2,3],[4,5,6],[7,8,9]]);
});

test('splits array into 3 groups of 2 and 1 group of 3', () => {
    expect(arraySplitter.arraySplitter(array,4)).toStrictEqual([[1,2],[3,4],[5,6],[7,8,9]]);
});

test('splits array into 2 groups, first larger than the second', () => {
    expect(arraySplitter.arraySplitter(array,2)).toStrictEqual([[1,2,3,4,5],[6,7,8,9]]);
});

test('splits array into 4 groups, with a large remainder array', () => {
    expect(arraySplitter.arraySplitter(bigRemainderArray,4)).toStrictEqual([[1],[2],[3],[4,5,6]]);
});

test('splits array into 2 groups, despite the values being different types', () => {
    expect(arraySplitter.arraySplitter(mixedArray,2)).toStrictEqual([[1.1,'word','5',6],['seven7',89,1.65,'dh9']]);
});

test('throws exception when divider = 0', () => {
    expect(() => {
        arraySplitter.arraySplitter(array,0); 
    }).toThrow('Divider is not an integer!');
});

test('throws exception when divider > size of array', () => {
    expect(() => {
        arraySplitter.arraySplitter(array,42); 
    }).toThrow('Divider must be >= array size!');
});

test('returns array if divider = 1', () => {
    expect(arraySplitter.arraySplitter(array,1)).toStrictEqual([[1,2,3,4,5,6,7,8,9]]);
});


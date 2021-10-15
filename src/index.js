const arraySplitter = require('./utils/arraySplitter');

const array = [1,2,3,4,5];
const divider = 3;
console.log("Initial array = " + array);
console.log("Array will be split into " + divider + " groups");

try {
    console.log(arraySplitter.arraySplitter(array, divider));
} catch (error) {
    console.error(error);
}

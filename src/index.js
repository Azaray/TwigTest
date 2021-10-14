import { arraySplitter } from "./utils/arraySplitter.js";

const array = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12];
const divider = 8;
console.log("Initial array = " + array);
console.log("Array will be split into " + divider + " groups");

try {
    console.log(arraySplitter(array, divider));
} catch (error) {
    console.error(error);
}

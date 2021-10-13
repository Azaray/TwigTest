import { arraySplitter } from "./utils/arraySplitter.js";

const array = [4, 5, 7, 3, 2];
const divider = 3;
console.log("Array used is " + array);
console.log("Divider used is " + divider);

console.log(arraySplitter(array, divider));
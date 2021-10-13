import { arraySplitter } from "./utils/arraySplitter.js";

const array = [4, 5, 7, 3, 2];
const divider = 0;
console.log("Array used is " + array);
console.log("Divider used is " + divider);

try {
    console.log(arraySplitter(array, divider));
} catch (error) {
    console.error(error);
}

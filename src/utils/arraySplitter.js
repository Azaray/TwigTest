
/**
 * 
 * @param {array} array 
 * @param {integer} divider 
 * @returns array
 */
function  arraySplitter(array, divider) {
    const newArray = []
    while (array.length != 0) {
        var splicedArray = array.splice(0,divider);
        newArray.push(splicedArray);
    }
    return newArray;
}

export {arraySplitter};
    
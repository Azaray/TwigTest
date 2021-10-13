
/**
 * 
 * @param {Array} array 
 * @param {number} divider 
 * @returns {Array[]}
 */
function  arraySplitter(array, divider) {
    if (divider === 0 || !Number.isInteger(divider)) {
        throw 'Divider is not an integer!'
    }
    const newArray = []
    while (array.length != 0) {
        var splicedArray = array.splice(0,divider);
        newArray.push(splicedArray);
    }
    return newArray;
}

export {arraySplitter};
    
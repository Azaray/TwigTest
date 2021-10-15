
/**
 * 
 * @param {Array} array 
 * @param {number} divider 
 * @returns {Array[]}
 */
const arraySplitter = (array, divider) => {
    if (divider === 0 || !Number.isInteger(divider)) {
        throw Error('Divider is not an integer!');
    } 
    if (divider > array.length) {
        throw new Error('Divider must be >= array size!');
    }
    if (divider === 1 || array.length === 0) {
        return [array];
    }
    const newArray = [];

    if (divider === 2) {
        const groups = Math.ceil(array.length/divider);
        for (var i = 0; i < divider; i++) {
            var splicedArray = array.splice(0,groups);
            newArray.push(splicedArray);
        }
        return newArray;
    }

    const remainder = array.length%divider;
    if (remainder === 0) {
        const groups = array.length/divider;
        for (var i = 0; i < divider; i++) {
            var splicedArray = array.splice(0,groups);
            newArray.push(splicedArray);
        }
        return newArray;
    } else {
        
        var remainderArray = array.splice(array.length-1);
        while((array.length)%(divider-1) !== 0) {
            remainderArray = array.splice(array.length-1).concat(remainderArray);
        }
        console.log("No remainder array = " + array);

        const groups = array.length/(divider-1);
        console.log("Size of non-remainder arrays = " + groups);

        for (var i = 0; i < divider-1; i++) {
            var splicedArray = array.splice(0,groups);
            newArray.push(splicedArray);
        }
        newArray.push(remainderArray);
        return newArray;
    }

};

exports.arraySplitter = arraySplitter;

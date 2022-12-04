function search(array, target) {
    let halfLength = Math.trunc((array.length - 1) / 2);
    let lengthNumber = array.length - 1;
    let aryLog = Math.ceil(Math.log(array.length));
    for (let i = 1; i < aryLog; i++) {
        let pow2 = (Math.pow(2, i));
        if (array[halfLength] === target) {
            return halfLength;
        } else if (array[halfLength] < target) {
            halfLength = halfLength + Math.trunc(lengthNumber / (pow2 * 2)) + 1;
        } else {
            halfLength = halfLength - Math.trunc(lengthNumber / (pow2 * 2)) - 1;
        }
    }
}

let ary = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(search(ary, 0));
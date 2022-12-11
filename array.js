ary1 = [-5, 1, 5, 3, 10, 17, 13, -2];
ary2 = [100, 200, 300];

//forEach

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
forEach(ary1, function (item, index, array) {
    console.log(item, index, array);
});

//concat

function concat(ary1, ary2) {
    return [...ary1, ...ary2];
}
console.log(concat(ary1, ary2));
//沒有影響到原陣列

//push

function push(ary, str) {
    ary.length += 1;
    ary[ary.length - 1] = str;
    return ary;
}
console.log(push(ary1, 300));
//沒有改變原陣列

//pop
console.log(ary1);
// function pop(ary) {
//     aryNum = ary.length - 1
//     arySet = [];
//     for (let i = 0; i < aryNum; i++) {
//         arySet = [...arySet, ary[i]];
//         //console.log(arySet);
//     }
//     ary = arySet;
//     return ary;
// }

function pop(ary) {
    ary.length -= 1
    return ary
}
console.log(pop(ary1));
console.log(ary1);
//沒有改變原陣列

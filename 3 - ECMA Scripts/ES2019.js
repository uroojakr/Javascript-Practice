// flat array 
const arr = [1,2,3,4,5,6,7,8,9,10];
const flatArr = arr.flat();
console.log(flatArr);

//flat array 2D

const arr2D = [
    [1,2,3,4,5,6,7,8,9,10],
    [11,12,13,14,15,16,17,18,19,20],
    [21,22,23,24,25,26,27,28,29,30]
];
console.log(arr2D.flat());

const arr3D = [[[1,2],[3,4]],[[5,6],[7,8]]];
const flatarr = arr3D.flat(1);
console.log(flatarr);
const flatInifinite = arr3D.flat(Infinity);
console.log(flatInifinite);
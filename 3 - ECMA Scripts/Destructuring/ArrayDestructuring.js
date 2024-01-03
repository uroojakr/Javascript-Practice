// const data = ['sara', 'aslam', '23'];

//before destructuring
// let fName = data[0];
// let lName = data[1];
// let age = data[2];

// console.log(fName);
// after destructuring 
// let [myFName, myLName, myAge ] = data;

//adding values
// let [myFName, myLName, myAge, myDegree = 'BSCS' ] = data; 
// console.log(myDegree);

const data2  = {
    fName : "Urooj",
    lName : "Akram",
    age : 23,
    degree : "BSCS"
}
console.log(data2.degree);

let {fName, lName, age, degree,sclass="Graduate" } = data2 ;
console.log(sclass);

// object dynamic properties
let fname = "Urooj";
const data3 = {
    [fName] : "random data",
    [20+3] : 'is my age',
}
console.log(data3);

// no need to write key and value if both are same
let nam = 'urooj'
const data4={
    nam,
}
console.log(data4);


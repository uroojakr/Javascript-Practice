let bioData = {
    myName: 'Urooj Akram',
    Location: 'ISB',
    getData ()
    {
        console.log(`My name is ${bioData.myName} and my location is ${bioData.Location}`);
    }
}
bioData.getData();


// object inside object
let bioData1 = {
    myName: {
        firstName: 'Urooj',
        LastName: 'Akram',
    },
    Location: 'ISB',
    getData ()
    {
        console.log(`My name is ${bioData1.myName} and my location is ${bioData.Location}`);
    }
}
bioData1.getData();
console.log(bioData1.myName.firstName);

// this object

console.log(this);

function test() {
    console.log(this);
}

test();

dummy = "test 123";
function dummytest()
{
    console.log(this.dummy);
}
dummytest();

//this for obj inside obj 
const obj = {
    myAge:40,
    myName1()
    {
        console.log(this);
    }
}
obj.myName1();
const obj2 = {
    myAge:40,
    myName1:() =>
    {
        console.log(this);
    }
}
obj2.myName1();

let data = {
    myName: {
        firstName: 'Urooj',
        LastName: 'Akram',
    },
    myAge: 50,
    getData()
    {
        console.log(`My name is ${data.myName.firstName} and my age is ${this.myAge}`);
    }
}
data.getData();
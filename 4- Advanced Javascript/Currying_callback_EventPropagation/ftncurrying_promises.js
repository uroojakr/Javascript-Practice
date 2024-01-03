 
 // function currying
 const sum = (num1) => (num2) =>(num3) => {
            console.log(num1,num2,num3);console.log(num1+num2+num3); 
 }

 sum(10)(20)(30);

 // callback hell - triangle formed by all the call back functions
setTimeout(() => {
    console.log("function 1 is called");
    setTimeout (() =>{
        console.log("function 2 is called");
        setTimeout(() => {
            console.log("function 3 is called");
        }, 2000);
    })
})

// to get rid of call back hell problem we use promises

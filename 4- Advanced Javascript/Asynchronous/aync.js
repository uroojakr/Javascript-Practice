//synchronous 
const fun2 = () => {
    console.log("function 2 is called");
}
const fun1 = () => {
    console.log("function 1 is called");
    fun2();
    console.log("function 1 ends");
}

fun1();

//asynchronous
const fun3 = () => {
    setTimeout(() => {
        console.log("function 3 is called");
    }, 2000);
}
const fun4 = () => {
    console.log("function 4 is called");
    fun3();
    console.log("function 4 ends");
}

fun4();


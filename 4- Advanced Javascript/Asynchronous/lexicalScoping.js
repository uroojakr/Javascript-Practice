//lexical scoping
let a = "hello";
const first = () => {
    let b = "world";
    const second = () => {
        let c = "Programming";
        console.log(a+b+c);
    }
    second();
}

first();
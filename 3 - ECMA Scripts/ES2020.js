//Big Int
let x = 484894837439489384n;
let y= BigInt("48439384934938493843434");
console.log(x, y);

// match all
let text = "random text for match all ecma script. Random data. Random Scenarios";
const iterator = text.matchAll("random");
for(const match of iterator)
{
    console.log(match[0]);
}

//case insensitive
const regex = /random/gi;
const iterator2 = text.matchAll(regex);
for(const match2 of iterator2)
{
    console.log(match2[0]);
}

//nullish coalescin operator
let name = "urooj";
let text2 = "missing";
let result = name ?? text2;
console.log(`name is ${result}`);

//optional chaining operator - throws undefined or null instead of throwing error
let obj = {a:1};
console.log(obj?.a);
console.log(obj?.b);

// && =, if first value true, second value is assigned

x &&= 5;
console.log(x);

// ||=, if first value false, second assigned
x ||= 5;
console.log(x);

// if first value null or undefined second value assinged
x ??= 10;
console.log(x);
// replace All

const text = "random text for match all ecma script. Random data. Random Scenarios";
const iterator = text.replaceAll("random", "Random");
for(const i in iterator)
{
   console.log(iterator);
   break;
}

// Array at
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
console.log(fruit);

//string at()
const iterator1 = text.at(2);
console.log(iterator1);

// Array includes
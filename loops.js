//Loops offer a quick and easy way to do something repeatedly. 
//There are many different kinds of loops, but they all essentially do the same thing: 
//They repeat an action some number of times.

//A for loop repeats until a specified condition evaluates to false. 
let fruits = ["Mango", "Apple", "Orange", "Mango", 
            "Apple", "Melon", "Orange", "Apple"];
let noOfApples = 0
for(let i=0; i< fruits.length; i++){
    if (fruits[i]=="Apple"){
        noOfApples += 1;
    }
}
console.log(`There are ${noOfApples} Apples in the Basket!`);
console.log("-------------------------------------");

//The do...while statement repeats until a specified condition evaluates to false.
let i = 0;
do {
  i += 1;
  console.log("i is "+i);
} while (i < 5);
console.log("-------------------------------------");

//A while statement executes its statements as long as a specified condition evaluates to true.
//Make sure the condition in a loop eventually becomes false—otherwise, the loop will never terminate.
while (true) {
    i += 1;
    console.log("i is "+i);
    if(i=5){
        break;
    }
  }
console.log("-------------------------------------");

//The for...in statement iterates a specified variable over all the enumerable properties of an object.
let colors = ["red", "blue", "yellow"];
let op = "The three primary colors are: ";
for(let i in colors){
    op += "-" + colors[i] + "-";
}
console.log(op);
console.log("-------------------------------------");

//The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on)
let po = "";
for(let i of colors){
    po += "-" + i + "-";
}
console.log("The three primary colors are: " + po);
console.log("-------------------------------------");

//The following example shows the difference between a for...of loop and a for...in loop.
const arr = [3, 5, 7];
arr.foo = 'hello, this is a property!';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}
console.log("-------------------------------------");
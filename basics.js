//JavaScript is case-sensitive and uses the Unicode character set.
//instructions are called statements and are separated by semicolons (;).
/*
    This is a
    multiline comment!
*/

/* 
    JavaScript has three kinds of variable declarations.
    var->Declares a variable, optionally initializing it to a value.
    let->Declares a block-scoped, local variable, optionally initializing it to a value.
    const->Declares a block-scoped, read-only named constant.

    Don't use undeclared variables eg x = 45
    A variable declared using the var or let statement with no assigned value specified has the value of undefined.

*/
let x = 25;
console.log("I have got "+x+"$ in my pocket!");
console.log("-------------------------------");

//You can refer to a variable declared later, without getting an exception. This concept is known as hoisting.
//However, variables that are hoisted return a value of undefined. So even if you declare and initialize after you use or refer to this variable, it still returns undefined.
//In the case of functions, only function declarations are hoisted—but not the function expressions.
var z;
console.log(z === undefined); // true
z = 3;
console.log("-------------------------------");
foo(); // "bar"

function foo() {
  console.log('bar');
}
console.log("-------------------------------");

//You can create a read-only, named constant with the const keyword.
const PI = 3.14;

//Seven primitive data types in jS: Boolean, null, undefined, Number, BigInt, String, Symbol.
//JavaScript is a dynamically typed i.e we dont need to specify data type for a variable and redeclare it with another data type.

//'+' operator
y = 42 + ' is the answer'; // "42 is the answer"
console.log(y);
console.log('37' - 7);
console.log('37' + 7);
console.log("You are a "+(5+1));
console.log(1+8);
console.log("-------------------------------");

//Converting strings to numbers
console.log(parseInt("101", 2));
console.log(parseInt("101", 10));

console.log("-------------------------------");

//String interpolation
let pname = 'Bob', time = 'today';
let msg = `Hello ${pname}, how are you ${time}?`;
console.log(msg);
console.log(`The name Bob has ${pname.length} letters!`);
console.log("-------------------------------");

//Template strings
console.log("A poem");
var poem =
`Roses are red,
Violets are blue.
Sugar is sweet,
and so is foo.`;
console.log(poem);
console.log("-------------------------------");
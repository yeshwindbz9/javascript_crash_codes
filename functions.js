//A function is a set of statements that performs a particular task or calculates the value wrt some input and returns an output.
//A function defined in the global scope can access all variables defined in the global scope. 
//A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access.

function areaOfSquare(number) {
    return number * number;
}
console.log(`Area of a square with side 4 is ${areaOfSquare(4)}`);
console.log("-------------------------------------");

//While the function declaration above is syntactically a statement, functions can also be created by a function expression.
//const square = function(number) { return number * number }
const sqrArea = (number) => number * number;
console.log("Square with side 4 has an area of "+sqrArea(4)+" units");
console.log("-------------------------------------");

const factorial = (n) => n<2? 1:n*factorial(n-1);
console.log("Factorial of 5 i.e 5! is "+ factorial(5));
console.log("-------------------------------------");

function map(f, a) {
    let result = []; // Create a new Array
    let i; // Declare variable
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
}
const f = function(x) {
    return x * x * x;
}
let numbers = [0, 1, 2, 5, 10];
let cube = map(f,numbers);
console.log("Cubes of 0,1,2,5,10 is "+ cube);
console.log("-------------------------------------");

//A recursive function, A function can call itself. For example, here is a function that computes factorials recursively.
function fact(n) {
    if ((n === 0) || (n === 1))
      return 1;
    else
      return (n * fact(n - 1));
}

console.log("Factorial of 4 i.e 4! is "+ fact(4));
console.log("-------------------------------------");

//Recursion itself uses a stack: the function stack.
function foo(i){
    if(i<0)
        return;
    console.log("start: "+ i);
    foo(i-1);
    console.log("end: "+ i);
}
foo(3);
console.log("-------------------------------------");

//Inner and outer functions
function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give                 
result = fn_inside(5); // returns 8
result1 = outside(3)(5); // returns 8
console.log("-------------------------------------");

var createPet = function(name) {
    var sex;
  
    return {
      setName: function(newName) {
        name = newName;
      },
  
      getName: function() {
        return name;
      },
  
      getSex: function() {
        return sex;
      },
  
      setSex: function(newSex) {
        if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' ||
          newSex.toLowerCase() === 'female')) {
          sex = newSex;
        }
      }
    }
}

var pet = createPet('Vivie');
console.log(pet.getName());                  // Vivie

pet.setName('Oliver');
pet.setSex('male');
console.log(pet.getSex());                  // male
console.log(pet.getName());                  // Oliver
console.log("-------------------------------------");

//The arguments of a function are maintained in an array-like object. Within a function, you can address the arguments passed to it.
function myConcat(seperator){
    var result = "";
    for(let i=1; i<arguments.length; i++){
        result += arguments[i] + seperator;
    }
    
    return result;
}
console.log(myConcat("-", "red", "blue", "green"));
console.log("-------------------------------------");

//Default parameters
function mulA(a, b) {
    b = typeof b !== 'undefined' ?  b : 1;
  
    return a * b;
}
console.log(mulA(5));
console.log("-------------------------------------");
function mulB(a, b = 1) {
    return a * b;
}
console.log(mulB(5));
console.log("-------------------------------------");
  
//Rest parameters
function mulC(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier * x);
}
  
var arr = mulC(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
console.log("-------------------------------------");

//Arrow functions
var a = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

var a2 = a.map(function(s) { return s.length; });
console.log(a2); // logs [8, 6, 7, 9]
var a3 = a.map(s => s.length);
console.log(a3); // logs [8, 6, 7, 9]
console.log("-------------------------------------");

//Some builtIn functions
//eval() function evaluates JavaScript code represented as a string.
console.log(eval('2 + 2'));
console.log("-------------------------------------");
//isFinite() function determines whether the passed value is a finite number
//isNaN() function determines whether a value is NaN or not.
//parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.
//parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
console.log(parseFloat(22/7));
console.log(parseInt(22/7, 10));
console.log(parseInt(110, 2));
console.log("-------------------------------------");
//The encodeURI() method encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by escape sequences representing the UTF-8 encoding of the character.
//The decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine.

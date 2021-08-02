/*
    The block is delimited by a pair of curly brackets,
    it is used to group statements together.
    {
        statement_1;
        statement_2;
        ⋮
        statement_n;
    }

*/

//If-ElseIf-Else statements
//Use the if statement to execute a statement if a logical condition is true. 
//Use else if to check for additional conditions.
//Use the optional else clause to execute a statement if the condition is false.
let time = 22
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);
console.log("-------------------------------------");

//Switch statement
//A switch statement allows a program to evaluate an expression and attempt to match the expression's value to a case label.
//The optional break statement associated with each case clause ensures that the program breaks out of switch once the matched statement is executed.
let fruittype = "Lemons"
switch (fruittype) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
      break;
    case 'Bananas':
      console.log('Bananas are $0.48 a pound.');
      break;
    case 'Cherries':
      console.log('Cherries are $3.00 a pound.');
      break;
    case 'Mangoes':
      console.log('Mangoes are $0.56 a pound.');
      break;
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
     console.log(`Sorry, we are out of ${fruittype}.`);
}
console.log("-------------------------------------");
  
//Exception handling statements
/*
  You can throw exceptions using the throw statement and handle them using the try...catch statements.
  Use the throw statement to throw an exception. A throw statement specifies the value to be thrown
*/
// Create an object type UserException
function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}
// Make the exception convert to a pretty string when used as a string
// (e.g., by the error console)
UserException.prototype.toString = function() {
  return `${this.name}: "${this.message}"`;
}

// Create an instance of the object type and throw it
//Throw new UserException('Value too high');
//Uncomment the line above for the throw keyboard to work.
//console.log("-------------------------------------");

//Try-Catch-Finally-Statements
/*
    The try...catch statement marks a block of statements to try, and specifies one or more 
    responses should an exception be thrown. If an exception is thrown, the try...catch statement catches it.
    The try...catch statement consists of a try block, which contains one or more statements, 
    and a catch block, containing statements that specify what to do if an exception is thrown in the try block.
    The finally block contains statements to be executed after the try and catch blocks execute. 
*/
function getMonthName(mo){
    mo -= 1;
    let months = ["Jan", "Feb", "Mar", "Apr", "May",
                 "Jun", "Jul", "Aug", "Sep", "Oct", 
                "Nov", "Dec"];
    if(months[mo]){
        return months[mo];
    }else{
        throw "Invalid Month";
    }
}

try{
    monthName = getMonthName(99);
    console.log(monthName)
} catch(e){
    monthName = "unknown";
    console.log(e)
} finally{
    console.log("Execution has finally ended.")
}
console.log("-------------------------------------");
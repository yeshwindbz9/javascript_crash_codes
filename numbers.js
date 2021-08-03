//Decimal 
//Note that decimal literals can start with a zero (0) followed by another decimal digit, but if every digit after the leading 0 is smaller than 8, the number gets parsed as an octal number.
console.log("Decimal number: "+ 0888);

//Binary 
//Binary number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "B" (0b or 0B). If the digits after the 0b are not 0 or 1, the following SyntaxError is thrown.
console.log("Binary number: "+ 0b110);

//Octal
//Octal number syntax uses a leading zero. If the digits after the 0 are outside the range 0 through 7, the number will be interpreted as a decimal number.
console.log("Octal number: "+ 0755);

//Hexadecimal
//Hexadecimal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "X" (0x or 0X). If the digits after 0x are outside the range (0123456789ABCDEF), the following SyntaxError is thrown.
console.log("Hexadecimal number: "+ 0x12345);
console.log("------------------------------");

//The built-in Number object has properties for numerical constants, such as maximum value, not-a-number, and infinity. 
console.log("Max: "+Number.MAX_VALUE);
console.log("Min: "+Number.MIN_VALUE);
console.log("+inf: "+Number.POSITIVE_INFINITY);
console.log("-inf: "+Number.NEGATIVE_INFINITY);
console.log("Nan: "+Number.NaN);
console.log("------------------------------");

//Math object
//The built-in Math object has properties and methods for mathematical constants and functions. 
console.log(Math.PI);
console.log(Math.sin(0));
console.log("------------------------------");

//Math methods
/*
    abs()	Absolute value
    sin(), cos(), tan()	Standard trigonometric functions; with the argument in radians.
    asin(), acos(), atan(), atan2()	Inverse trigonometric functions; return values in radians.
    sinh(), cosh(), tanh()	Hyperbolic functions; argument in hyperbolic angle.
    asinh(), acosh(), atanh()	Inverse hyperbolic functions; return values in hyperbolic angle.
    
    pow(), exp(), expm1(), log10(), log1p(), log2()  Exponential and logarithmic functions.
    floor(), ceil()	Returns the largest/smallest integer less/greater than or equal to an argument.
    min(), max()	Returns the minimum or maximum (respectively) value of a comma separated list of numbers as arguments.
    random()	Returns a random number between 0 and 1.
    round(), fround(), trunc(),	Rounding and truncation functions.
    sqrt(), cbrt(), hypot()	Square root, cube root, Square root of the sum of square arguments.
    sign()	The sign of a number, indicating whether the number is positive, negative or zero.
*/

//Date object
//JavaScript does not have a date data type. However, you can use the Date object and its methods to work with dates and times in your applications.
//eg: var dateObjectName = new Date([parameters]);
var date = Date([]);
console.log(date);
//Methods of date objects
/*
    "set" methods, for setting date and time values in Date objects.
    "get" methods, for getting date and time values from Date objects.
    "to" methods, for returning string values from Date objects.
    parse and UTC methods, for parsing Date strings.
*/
var Xmas95 = new Date('December 25, 1995');
console.log(Xmas95.getTime());
console.log(Xmas95.getDate());
console.log(Xmas95.getDay());
console.log(Xmas95.getMonth());
console.log(Xmas95.getTime());
//Function JSClock() returns the time in the format of a digital clock.
function JSClock() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var temp = '' + ((hour > 12) ? hour - 12 : hour);
    if (hour == 0)
      temp = '12';
    temp += ((minute < 10) ? ':0' : ':') + minute;
    temp += ((second < 10) ? ':0' : ':') + second;
    temp += (hour >= 12) ? ' P.M.' : ' A.M.';
    return temp;
}
console.log(JSClock());
console.log("------------------------------");
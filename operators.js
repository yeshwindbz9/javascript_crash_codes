//An operator is a character or characters that determine the action that is to be performed or considered.
//Assignment	x = y	x = y
//Addition assignment	x += y	x = x + y
//Subtraction assignment	x -= y	x = x - y
//Multiplication assignment	x *= y	x = x * y
//Division assignment	x /= y	x = x / y
//Remainder assignment	x %= y	x = x % y
//Exponentiation assignment	x **= y	x = x ** y
//Logical AND assignment	x &&= y	x && (x = y)
//Logical OR assignment	x ||= y	x || (x = y)

//Comparison operators
//Equal (==)	Returns true if the operands are equal.
//Not equal (!=)	Returns true if the operands are not equal.
//Strict equal (===)	Returns true if the operands are equal and of the same type.
//Strict not equal (!==)	Returns true if the operands are of the same type but not equal, or are of different type.
//Greater than (>)	Returns true if the left operand is greater than the right operand.
//Greater than or equal (>=)	Returns true if the left operand is greater than or equal to the right operand.
//Less than (<)	Returns true if the left operand is less than the right operand.
//Less than or equal (<=)	Returns true if the left operand is less than or equal to the right operand.

//Arithmetic operators: %, ++, --, -, +, **

//Bitwise operators: &, |, ~, <<, >>, ^

//Logical operators: &&, ||, !

//String operators
//The concatenation operator (+) concatenates two string values together.

//Conditional (ternary) operator-> condition ? val1 : val2
//eg: var status = (age >= 18) ? 'adult' : 'minor';

//The typeof operator returns a string indicating the type of the unevaluated operand. operand is the string, variable, keyword, or object for which the type is to be returned. 
//typeof operand or typeof (operand)

//The in operator returns true if the specified property is in the specified object.
//propNameOrNumber in objectName

//The instanceof operator returns true if the specified object is of the specified object type.
//objectName instanceof objectType


//this
//Use the this keyword to refer to the current object. In general, this refers to the calling object in a method. 
//eg: this.propertyName

//new
//You can use the new operator to create an instance of a user-defined object type or of one of the built-in object types. 
//eg: var objectName = new objectType([param1, param2, ..., paramN]);


//super
//The super keyword is used to call functions on an object's parent.
//eg: super([arguments]); // calls the parent constructor.
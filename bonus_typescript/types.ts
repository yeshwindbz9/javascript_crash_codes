/*
    JavaScript has three very commonly used primitives: string, number, and boolean. 
    Each has a corresponding type in TypeScript. As you might expect, these are the same 
    names you’d see if you used the JavaScript typeof operator on a value of those types.

    string represents string values like "Hello, world".
    number is for numbers like 42. JavaScript does not have a special runtime value for integers, 
    so there’s no equivalent to int or float - everything is simply number.
    boolean is for the two values true and false.

    To specify the type of an array like [1, 2, 3], you can use the syntax number[]; 
    this syntax works for any type (e.g. string[] is an array of strings, and so on). 
    You may also see this written as Array<number>, which means the same thing. 

    TypeScript also has a special type, any, that you can use whenever you don’t want a 
    particular value to cause typechecking errors.

    When you declare a variable using const, var, or let, you can optionally add a 
    type annotation to explicitly specify the type of the variable:
    let myName: string = "Alice";

    Apart from primitives, the most common sort of type you’ll encounter is an object type. 
    This refers to any JavaScript value with properties, which is almost all of them! 
    To define an object type, we simply list its properties and their types.
    eg:
    // The parameter's type annotation is an object type
    function printCoord(pt: { x: number; y: number }) {
        console.log("The coordinate's x value is " + pt.x);
        console.log("The coordinate's y value is " + pt.y);
    }
    printCoord({ x: 3, y: 7 });

    Object types can also specify that some or all of their properties are optional. 
    To do this, add a ? after the property name:
    eg:
    function printName(obj: { first: string; last?: string }) {
        // ...
    }
    // Both OK
    printName({ first: "Bob" });
    printName({ first: "Alice", last: "Alisson" });

    The first way to combine types you might see is a union type. 
    A union type is a type formed from two or more other types, 
    representing values that may be any one of those types. 
    We refer to each of these types as the union’s members.

    function printId(id: number | string) {
        console.log("Your ID is: " + id);
    }
    // OK
    printId(101);
    // OK
    printId("202");
    // Error
    printId({ myID: 22342 });

    Note: TypeScript will only allow you to do things with 
    the union if that thing is valid for every member of the union.
    i.e. you cannot use methods like id.toUpperCase()
    alternatively, you can do this:
    function printId(id: number | string) {
        if (typeof id === "string") {
            // In this branch, id is of type 'string'
            console.log(id.toUpperCase());
        } else {
            // Here, id is of type 'number'
            console.log(id);
        }
    }

    A type alias is a name for any type.
    eg:
    type Point = {
        x: number;
        y: number;
    };

    // Exactly the same as the earlier example
    function printCoord(pt: Point) {
        console.log("The coordinate's x value is " + pt.x);
        console.log("The coordinate's y value is " + pt.y);
    }

    printCoord({ x: 100, y: 100 });

    An interface declaration is another way to name an object type
    interface Point = {
        x: number;
        y: number;
    };

    // Exactly the same as the earlier example
    function printCoord(pt: Point) {
        console.log("The coordinate's x value is " + pt.x);
        console.log("The coordinate's y value is " + pt.y);
    }

    JavaScript has two primitive values used to signal 
    absent or uninitialized value: null and undefined.

*/
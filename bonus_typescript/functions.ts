/*
    Functions are the basic building block of any application, 
    whether they’re local functions, imported from another module, or methods on a class. 
    They’re also values, and just like other values, TypeScript has many ways to describe how functions can be called. 

    //Function Type Expressions.
    function greeter(fn: (a: string) => void) {
        fn("Hello, World");
    }

    function printToConsole(s: string) {
        console.log(s);
    }

    greeter(printToConsole);

    //The syntax (a: string) => void means “a function with one parameter, named a, of type string, that doesn’t have a return value”. 
    alternatively,
    type GreetFunction = (a: string) => void;
    function greeter(fn: GreetFunction) {
        // ...
    }

    In TypeScript, generics are used when we want to describe a correspondence between two values. 
    We do this by declaring a type parameter in the function signature.
    function firstElement<Type>(arr: Type[]): Type {
        return arr[0];
    }

    //Specifying Type Arguments
    function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
        return arr1.concat(arr2);
    }

    const arr = combine<string | number>([1, 2, 3], ["hello"]); //valid
    const arr = combine([1, 2, 3], ["hello"]); //not valid

    //Optional Parameters
    //We can model this in TypeScript by marking the parameter as optional with ?.
    function f(x?: number) {
        // ...
    }
    f(); // OK
    f(10); // OK

    //You can also provide a parameter default
    function f(x = 10) {
        // ...
    }

    //Other Types to Know About

    Void represents the return value of functions which don’t return a value.
    Object refers to any value that isn’t a primitive (string, number, bigint, boolean, symbol, null, or undefined).
    The unknown type represents any value. This is similar to the any type, but is safer because it’s not legal to do anything with an unknown value.
    Some functions never return a value.
    function fn(x: string | number) {
        if (typeof x === "string") {
            // do something
        } else if (typeof x === "number") {
            // do something else
        } else {
            x; // has type 'never'!
        }
    }

*/
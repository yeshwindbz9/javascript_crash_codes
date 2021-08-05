/*
    TypeScript is a superset of the JavaScript language that has a single open-source compiler 
    and is developed mainly by a single vendor: Microsoft. The goal of TypeScript is to help 
    catch mistakes early through a type system and to make JavaScript development more efficient.
    
    We could have a tool that helps us find these bugs before our js code runs.
    That’s what a static type-checker like TypeScript does. 
    to install ts get npm, then run this `npm install -g typescript`.

    To make TypeScript act a bit more strictly you can use the --noEmitOnError compiler option.
    `tsc --noEmitOnError hello.ts`

    Running with --target es2015 changes TypeScript to target ECMAScript 2015, meaning code 
    should be able to run wherever ECMAScript 2015 is supported. 

    TypeScript has several type-checking strictness flags that can be turned on or off, and all 
    of our examples will be written with all of them enabled unless otherwise stated. 
    The --strict flag in the CLI, or "strict": true in a tsconfig.json toggles them all on simultaneously, 
    but we can opt out of them individually. The two biggest ones you should know about are noImplicitAny and strictNullChecks.

    Turning on the noImplicitAny flag will issue an error on any variables whose type is implicitly inferred as any.

*/
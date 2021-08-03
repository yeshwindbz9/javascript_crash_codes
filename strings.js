//JavaScript's String type is used to represent textual data.
//You can create simple strings using either single or double quotes.
console.log("Hello");
console.log('World!');
console.log("-------------------------------------");

//The number after \x is interpreted as a hexadecimal number.
console.log("\xA7");

//The Unicode escape sequences require at least four hexadecimal digits following \u.
console.log('\u00A9');
console.log("-------------------------------------");

//Methods of strings
console.log("CharAT index 4: "+ "CharAT".charAt(4));
console.log("CharCodeAT index 4: "+ "CharCodeAT".charCodeAt(4));
console.log("IndexOf x: "+ "IndexOf".indexOf('x'));
console.log("LastIndexOf x: "+ "LastIndexOf".lastIndexOf('x'));
console.log("StartsWith S: "+ "StartsWith".startsWith('S', 0));
console.log("EndsWith h: "+ "EndsWith".endsWith("h"));
console.log("Includes clu: "+ "Includes".includes("clu"));
console.log("Concatenation of Hello, World: "+ "Hello".concat('-', "World!"));
console.log("Split this sentence: "+ "Split this sentence".split(' '));
console.log("Slicing this sentence: "+ "Slicing this".slice(0, 6+1));
console.log("Substring: "+ "substring".substr(0,2+1));
console.log("LOWERCASE: "+ "LOWERCASE".toLowerCase());
console.log("UPPERCASE: "+ "UPPERCASE".toUpperCase());
console.log("Repeat: "+ "RepeatME-".repeat(3));
console.log("   trim white spaces: "+ "    trim white spaces    ".trim());
console.log("-------------------------------------");

//RegEx
//more on regex on another file
const sentence = "Using this for parsing Regex [229907]";
console.log("Finding capital letters: "+ sentence.match(/[A-Z]/g));
console.log("Matching all letters e: ");
let res = sentence.matchAll(/ing/g);
for(let match of res){
    console.log(match);
}
console.log(sentence.replace("parsing", "testing"));
console.log("-------------------------------------");

//Any new line characters inserted in the source are part of the template literal.
console.log('string text line 1\n\
string text line 2');
// "string text line 1
// string text line 2"

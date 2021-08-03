//Regular expressions can be calculated in two ways
let re0 = /ab+c/;
let re1 = new RegExp('ab+c');
console.log(re0);
console.log("------------------------------------");

//Character classes
//\, ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]

//Assertions
//^, $, x(?=y), x(?!y), (?<=y)x, (?<!y)x, \b, \B

//Groups and ranges
//x), (?:x), (?<Name>x), x|y, [xyz], [^xyz], \Number

//Quantifiers
//*, +, ?, x{n}, x{n,}, x{n,m}

//If you need to use any of the special characters literally (actually searching for a "*", for instance), you must escape it by putting a backslash in front of it.
let re3 = /a\*b/;
//To match a literal backslash, you need to escape the backslash.
let re4 = /[A-Z]:\\/;

let re5 = /d(b+)d/g;
let matchArray5 = re5.exec("cdbbdbsbz");
console.log(matchArray5);
console.log("------------------------------------");

//Regular expressions have six optional flags that allow for functionality like global and case insensitive searching.
//d	Generate indices for substring matches.
//g	Global search.
//i	Case-insensitive search.
//m	Multi-line search.
//s	Allows . to match newline characters.
//u	"unicode"; treat a pattern as a sequence of unicode code points.
//y	Perform a "sticky" search that matches starting at the current position in the target string.
//eg: var re = /pattern/flags; or var re = new RegExp('pattern', 'flags');

//regex for looking at one or more characters followed by a space.
let re6 = /\w+\s/g;
let sent = "fee fi fo fum";
let matchArray6 = sent.match(re6);
console.log(matchArray6);
console.log("------------------------------------");
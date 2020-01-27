/*--------------------------- 
Strings (IMPORTANT: strings are immutable)

In JavaScript, strings are pieces of text or strings of characters.
---------------------------*/
let firstName = "Micheal";
let lastName = "Jackson";
let song = "Billie Jean";

/*--------------------------- 
Strings are indexed and has length property which also includes empty spaces
---------------------------*/
console.log(firstName[1]);
console.log(song.length);
console.log(song[song.length - 1]); // last character
firstName[0] = "N"; // String are immutable we cannot change individual character

/*--------------------------- 
Strings Methods 

Strings come with a set of built-in methods, 
which are actions that can be performed on or with that particular string.
---------------------------*/
let msg = " You are so grounded mr ";
let result;

// toUpperCase()
result = msg.toUpperCase();
console.log("toUpperCase():", result);

// toLowerCase()
result = msg.toLowerCase();
console.log("toLowerCase():", result);

// trim(): removes empty spaces from start and end of string
result = msg.trim();
console.log("trim():", result);

// indexOf(): return -1 if not found otherwise retrun index
result = msg.indexOf("are");
console.log("indexOf():", result);

// slice()
result = "baseball".slice(4);
console.log("slice(4):", result);
result = "baseball".slice(2, 5);
console.log("slice(2, 5)", result);
result = "baseball".slice(40);
console.log("slice(40):", result);

// replace()
result = msg.replace(" You are", "I am");
console.log("replace():", result);

/*--------------------------- 
Operation on Strings
---------------------------*/
console.log(firstName + lastName); // ZiggyCanaryFace
console.log(firstName + " " + lastName); // Ziggy CanaryFace
console.log(firstName + 1); // Ziggy1
console.log(firstName - 1); // NaN
console.log(firstName * 1); // NaN

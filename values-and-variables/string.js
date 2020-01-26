/*--------------------------- 
Strings (are immutable)

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
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(msg.trim().toUpperCase());

/*--------------------------- 
Operation on Strings
---------------------------*/
console.log(firstName + lastName); // ZiggyCanaryFace
console.log(firstName + " " + lastName); // Ziggy CanaryFace
console.log(firstName + 1); // Ziggy1
console.log(firstName - 1); // NaN
console.log(firstName * 1); // NaN

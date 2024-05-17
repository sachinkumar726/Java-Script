// string operations

const name = "Sachin"
const age = 22
console.log(`my name is ${name} and my age is ${age}`)
// String operation
console.log(name.length);
console.log(name.charAt(2));

console.log(name.indexOf('a'));

const newString = name.substring(0,3);
console.log(newString);

const newStringOne = " sachin   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sachin.com/sachin%20choudhary"

console.log (url.replace('%20', '726'));

console.log(url.includes("sachin"))

console.log(url.split('/'))


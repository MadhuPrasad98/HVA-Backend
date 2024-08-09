  const input = require("readline-sync");
function greet(name){
    // return "Hello"+" "+name;
    // Template literal techqunic
    return `Hello ${name}!`
}
let a = input.question("Enter your name: ");
let r = greet(a);
console.log(r);


/* const input = require("readline-sync");
function greet(name){
    return "hello\n hgy\n"+" "+name;
    
}
let a = input.question("Enter your name: ");
let r = greet(a);
console.log(r);
console.log(typeof r) ; */


/* const input = require("readline-sync");
function greet(name){
    return `hello
     hiii
     enter`;
    
}
let a = input.question("Enter your name: ");
let r = greet(a);
console.log(r);
console.log(typeof r) ;
*/

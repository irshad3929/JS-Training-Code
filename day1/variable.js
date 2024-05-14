//There are 3 types of variavle declaration

//Type - 1 without data type
abcd = "10";
//abcd=10;  // we can redeclare again but it override the first variable name
console.log(abcd); //output 10
var d = typeof abcd; //output string
console.log(d);

//Type - 2 using var keyword
var num1 = 10;
console.log("num1 is ->", num1);

//Type - 3 using let and const
let num2 = 29;
console.log("num2 is ->", num2);

const num3 = 24;
console.log("num3 is ->", num3);

/*
Task - difference between let,var and const

1- var is function scope and let and const is braces scope
2- var add itself on window and let and const does't add itself on window
3- var - redeclare and reassign allow
4- let - redeclare allow but not reassign with same name
5- const- redeclare and reassign both not allow

*/
let a = 20;
//let a=30;  it create problem no redeclare with same name
a = 30; // its fine reassign allow in let variable
console.log(a);

const b = 10;
console.log(b);
//const b = 13; not allowed
//const c;   not allow we must assign a value
//b = 15;
//console.log(b); // not redeclare


let person = { name: "Irshad", age: 30 };
console.log("Person object:", person);
console.log(person["age"]);  //accessing the value
console.log(person.name);    // accessing the value
console.log(person["name"]);  // accessing the value



//console.log(this === window );


/*
Primitive data type- Number,BigInt,String,Boolean,Symbol,null,undefined
Non Primitive data type - Object
*/

// Primitive type (Number)
let num1 = 10;
let num2 = num1; // num2 is assigned the value of num1

num1 = 20; // Changing num1

console.log(num1); // Output: 20
console.log(num2); // Output: 10

// Reference type (Array)
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 is assigned a reference to arr1

arr1.push(4); // Modifying arr1

console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4]


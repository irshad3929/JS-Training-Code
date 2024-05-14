
/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/       

// Primitive Data Types:
console.log(typeof 42); // Output: "number"
console.log(typeof "Hello"); // Output: "string"
console.log(typeof true); // Output: "boolean"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null); // Output: "object" (historical bug)

// Non-Primitive Data Types:
console.log(typeof {}); // Output: "object"
console.log(typeof function(){}); // Output: "function"
console.log(typeof []); // Output: "object"
console.log(typeof new Date()); // Output: "object"
console.log(typeof /regex/); // Output: "object"

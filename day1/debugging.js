//all important debugger console

console.log("Hello");
console.error("blocked");
console.warn("warning");

let value = 10;
console.assert(value<5,"Value is less than 5");

console.time("timer");

let num = 10;

console.log(num);

console.timeEnd("timer");

let data = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 }
];
console.table(data);



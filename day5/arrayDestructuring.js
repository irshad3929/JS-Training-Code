
let array = [10,20,30,40,50,60];

var [a,b] = array;
console.log(a);  //10
console.log(b);  //20

var [a,b,...rest] = array;
console.log(rest); //[30,40,50,60]

var [a,,b] = array;
console.log(a);  //10
console.log(b);  //30

var [a = aDefault, b] = array; 
console.log(a); //10
console.log(b);  //20

var [a, b, ...rest] = array;
console.log(a);
console.log(b);
console.log(rest);

var [a, , b, ...rest] = array;
console.log(a); //10
console.log(b);  //30
console.log(rest);  //[40,50,60]

var [a, b, ...{ pop, push }] = array;
console.log(a);  //10
console.log(b);  //20
console.log(pop);  // [Function: pop]
console.log(push);  //[Function: pop]

var [a, b, ...[c, d]] = array;
console.log(a); //10
console.log(b);  //20
console.log(c);  //30
console.log(d);  //40


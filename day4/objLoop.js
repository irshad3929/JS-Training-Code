
// const person = {
//     name:"Irshad",
//     age: 27,
//     city:"gorakhpur"
// };

// //1- for in loop

// for(let key in person){
//     console.log(key, " : ",person[key]);
// }

// //2- Object.keys(obj) loop
// Object.keys(person).forEach((val)=>{
//     console.log(val, ":",person[val]);
// })

// //3- Object.values(obj) loop
// Object.values(person).forEach((val)=>{
//     console.log(val);
// })



// function mycomponet(){
// const [name, setName] = useState("abc")

// useEffect(() => {
//    return ()=>{
//     setName("xyz")
//     console.log("component is mount ")
//    }
// }, [])

// }

// const obj = {
//     num:1,
//     num:2,
//     num:3
// };
// var sum = 0;
// let ans = Object.values().forEach(val)=>{
    



// const obj4 = {
//     num1:1,
//     num2:2
// }
// const value = Object.entries(obj4);
// console.log(value);

// let ans1=Object.values(value);
// console.log(ans1);



// let ans = Object.values().for.forEach((val)=>{
      
// })

// let ans = Object.values().reduce((acc,curr)=>{
//     return (acc+curr);
// })
// console.log(ans);

// let ans = Object.values(obj4);
// console.log(ans);

// let result = ans.reduce((acc,curr)=>{
//     return acc+curr;
// })
// console.log(result);





//[["num1":1],["num1":2]]








const arr = {
    a:1,
    b:2
};

// const value = Object.entries(arr);
// console.log(value);

// let ans = value.reduce((acc, curr)=>{
//     return acc+curr[1];
// },0)
// console.log(ans);


// const arr = {
//     a: 1,
//     b: 2
// };

// const value = Object.entries(arr); // Convert object to array of key-value pairs
// console.log(value);

// const obj = value.reduce((acc, [key, value]) => {
//     acc[key] = value;
//     return acc;
// }, {});

// console.log(obj);

function sum(a,b){
    return a + b;
}

var ans = sum(1);  // 1+ undefined = NaN
console.log(ans);  //NaN

var ans = sum(1,true);  // 2
console.log(ans);

var ans = sum(2,true);  // 3
console.log(ans);

var ans = sum(2,false);  // 2
console.log(ans);

var ans = sum(2,"abc");  // 2abc
console.log(ans);

var ans = sum(2,null);  // 2
console.log(ans);

var ans = sum(2,undefined);  // undefined
console.log(ans);



function repeatString(str, n) {
    return str.repeat(n);
}

var result = repeatString("Hello ", 3);
console.log(result); // Hello Hello Hello 

result = repeatString("abc", 0);
console.log(result); // 

result = repeatString("Hi ", -1);
console.log(result); // 

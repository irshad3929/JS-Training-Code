//1- Spread operator

const arr = [1,2,3,4,5];
//const copyArr = arr;

//console.log(arr,copyArr); //[ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ]

//arr.push(8);
//console.log(arr,copyArr);  //[ 1, 2, 3, 4, 5, 8 ] [ 1, 2, 3, 4, 5, 8 ] it create problem so we used spread for copy

const copyArr1 = [...arr]; //actual copy not reference copy
console.log(arr,copyArr1);

arr.push(99);
console.log(arr,copyArr1);

//2- for concate the array

const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,0]

const concate = [...arr1 , ...arr2];
console.log(concate)

//3- adding new element into array

const value = ["mango",1,2,"vikas"];
const newValue = [...value, 4,5,6,"ram"];
console.log(value,newValue);

//4- spreading array as function argument

const number = [1,2,3,4];

const sum = (a,b,c,d)=>{
    return a+b+c+d;
}
console.log(sum(...number));

//5- nested spread
const nestedArray = [[1, 2], [3, 4]];
const flatArray = [...nestedArray[0], ...nestedArray[1]];
console.log(flatArray); // [1, 2, 3, 4]



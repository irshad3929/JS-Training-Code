//creation, accessing elements, and common methods: push, pop, shift, unshift, 
//splice and more.


//1- creation
let arr1 = [] //empty array
let arr2 = ["mango", "apple", "banana"] // arrya with elements
let arr3 = new Array();  //empty array    this is known Array constructor
let arr4 = new Array(1,2,3);  //array with elements
let arr5 = Array.from("hello");  // ['h','e','l','l','o']
let arr6 = Array.of(1,2,3);  // [1,2,3]
let arr7 = [...arr6]; // shallow copy of arr6

//2- accessing elements

let array = ["a","b","c"]
let first = array[0];
let second = array[1];
let third = array[2];
let seven = array[7];

//let size = array.length;

console.log(first,second,third,seven);
//console.log(size);

array[10] = "i";
let size = array.length;
console.log(size);

console.log(array);

//destructure the array
let [x,y,z] = array;
console.log(x);

//3- common method :- push pop unshift shift

let fruits = ["mango","apple","guavava"]
fruits.push("litchi");  //add the element at the last
console.log(fruits);

fruits.pop();
console.log(fruits); // delete the last element

fruits.unshift("grapes"); //add element at first
console.log(fruits);

fruits.shift();  //delete elemet of first element
console.log(fruits);

//4- some advanced method indexOf , includes

let primary = ["red","green","yellow"]
console.log(primary.indexOf("yellow"));  //return index no
console.log(primary.indexOf("pink")) // return -1 if element not exist

console.log(primary.includes("red")); // search the value if present it gives true
console.log(primary.includes("pink")); //false


//5- some method like - concate,reverse
let secondary = ["orange","blue","sky"]
let merge = primary.concat(secondary);  //concate one after another
console.log(merge);

let rev = primary.reverse();
console.log(rev);

let num = [1,2,3]
let ans = num.reverse();
console.log(ans);


//6- advance method slice

let colors = ["red","green","blue","yellow","pink","sky","magenta"]

console.log(colors.slice()); //copies a portion of array
console.log(colors.slice(2)); //cut the slice from index 2 (inclusive)
console.log(colors.slice(3,5)); // first index inclusive and last index exclusive
console.log(colors.slice(-2));  //gives last two element
console.log(colors.slice(-12));  //gives last two element
console.log(colors.slice(colors.length -1)); //give last element
console.log(colors.slice(12)); //gives empty array


/*
7 - splice (remove/replace/add elements in place)
    splice(startIndex,deleteCount,item0....itemN)
    deleteCount is optional if we want no item delete than place 0 at deleteCount

    a major diffrence between slice and splice is splice does't change into original array 
    it return the copy of array but in splice it change the original array

*/

let allColor = ["red","green","blue","yellow","pink","sky","magenta"]

allColor.splice(5);  //cut the elemet from index 5
console.log(allColor); //[red,gree,blue,yellow,pink]

allColor.splice(0,1);
console.log(allColor); //[green,blue,yellow,pink]

allColor.splice(0,1,"brown","gray")
console.log(allColor);  //[brown,gray,blue,yellow,pink]

allColor.splice(1,0,"white")
console.log(allColor); //[brown,white,gray,blue,yellow,pink]

// 8 - sort method

let cars = ["BMW","ferari","Toyata","suzuki"]
cars.sort();  //it internally convert array into string and than apply sorting
console.log(cars);

let numb = [25,16,21,6,89];
numb.sort()    // it gives wrong output because sort fun not work for number
console.log(numb);


//9- some and every method

let count = [1,11,3,5,9];

let hasNumber = count.some(val => val % 2 === 0 );
console.log(hasNumber);

let even = [2,4,6,8,10];

let hasEven = even.every(val => val % 2 === 0);
console.log(hasEven);

// 10 :- isArray (show where provide input is array or not)

Array.isArray([]);          // true
Array.isArray([1, 2, 3]);   // true
Array.isArray({});          // false
Array.isArray(null);        // false
Array.isArray(undefined);   // false
Array.isArray('array');     // false


// let name5 = [1,2,3];
// let name6 = name5;
//  name5.push(4);
//  console.log(name5)
//  console.log(name6);



 










//1- copying object
const person = {
    name:"irshad",
    age:27
};

const copyObj = {...person}  //copy actual not reference copy, if we noraml copy than if any change in original object it reflect also on copy object which is problematic
console.log(person,copyObj);
person.age = 26; // if we change age
console.log(person,copyObj);

//2- merging two or more object

const fruit = {
    taste:"sweet",
    weight: 10
};

const animal = {
    sound : "woof",
    legs: 4
};

const mergeObj = {...fruit, ...animal};  //merging
console.log(mergeObj);

//3- adding new property

const originalObj = {data:"confidential"};

const addProp = {...originalObj, status:"hidden", permission:2};  //adding new propperties

console.log(originalObj,addProp);

//4 - string

const str = "hello";
const strSpread = {...str};
console.log(strSpread);  //{ '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }
const strSpread1 = [...str];
console.log(strSpread1); //[ 'h', 'e', 'l', 'l', 'o' ]
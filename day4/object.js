//creation of object
//normal way
const student = {
    name:"irshad",
    age:27,
    address:"gorakhpur",
    course : "MCA"
};
console.log(student);

//using construction function
function Person(name,age){
    this.name = name;
    this.age = age;
}
let person1 = new Person("irshad",27);
console.log(person1);

//using class
class Persons{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
};
let person2 = new Persons("amit", 23);
let person3 = new Persons("IP", 25);
console.log(person2);


//using factory function
function FactoryOfPerson(name,age){
    return {
        name : name,
        age : age
    };
}
let createPerson1 = new FactoryOfPerson("Irshad", 27);
let createPerson2 = new FactoryOfPerson("amit", 29);
console.log(createPerson1);

if(createPerson1 === createPerson2){
    console.log("true")
}else{
    console.log("false")   //output false because it create in seprate memory location which has different address
}
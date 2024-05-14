const student = {
  name: "irshad",
  age: 27,
  address: "gorakhpur",
  course: "MCA",
};

//accessing the properties
console.log(student["name"]);
console.log(student.age);

//update the value
student.address = "Delhi";
console.log(student);

//add new property
student.gender = "male";
console.log(student);

//delete the key-value property

delete student.age;
console.log(student);

//JS automatically convert all the key into string type
const obj = {
  1: "a",
  2: "b",
  true: "c",
  null: "d",
  undefined: "e",
};

console.log(obj[1]);
//console.log(obj.2);  // not possible 
console.log(obj.true);
console.log(obj.undefined);

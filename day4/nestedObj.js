//nested object

const classInfo = {
  Irshad: {
    marks: 89,
    rollNum: "C101",
  },
  Amit: {
    marks: 56,
    rollNum: "C102",
  },
  Vishal: {
    marks: 98,
    rollNum: "C103",
  },
};

console.log(classInfo.Irshad);
classInfo.Irshad.marks = 95; //update the marks
console.log(classInfo.Irshad);

console.log(delete classInfo.Irshad.rollNum);
console.log(classInfo.Irshad);

//array of object

const Student = [
  {
    name: "Irshd",
    age: 27,
    city: "delhi",
  },
  {
    name: "rohit",
    age: 23,
    city: "gaziabad",
  },
  {
    name: "abc",
    age: 45,
    city: "gorakhpur",
  }
];

//access the property since it is array so we use index for op
console.log(Student[1]);  // second index propert fetch

Student[0].age = 25;
console.log(Student[0]);

delete Student[2].city;

console.log(Student[2]);



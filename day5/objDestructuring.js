const obj = {
  name: "irshad",
  city: "delhi",
  age: 27,
};

const { name, age, city } = obj;
console.log(name, age, city);

//Renaming property
const { name: personName, age: personAge } = obj;
console.log(personAge, personName);

//Nested obj dest
const user = {
  name1: "xyz",
  age1: 39,
  address1: {
    city1: "gkp",
    pin: 274402,
  },
};

const {name1,age1,address1: { city1, pin },} = user;

console.log(name1, age1, city1, pin);


//deatructuring in function:1
function abc({val4, val5}){
   console.log(val4,val5);
}

abc({val1:25, val2:26})

//destructuring in function:2
function getUser(){
    return {userName: "irshad", userAge:26};
}
const {userName,userAge}=getUser()
console.log(userName,userAge);

//loop
const data = [
    {source:1, dest:"C101"},
    {source:2, dest:"C102"},
    {source:2, dest:"C103"}
]

for(const {source,dest} of data){
    console.log(`Source num us ${source} and destination is ${dest}`)
}

//iteration over array of object

const school = [
    { boy: "rahul", marks: 56 },
    { boy: "shivam", marks: 67 },
    { boy: "xyz", marks: 89 },
  ];
  
  school.forEach(({boy,marks})=>{
      console.log(`name of the student is ${boy} and marks is ${marks}`);
  })
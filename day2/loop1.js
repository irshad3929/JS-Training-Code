// 1:- for loop (when we know how many times operation perform)

for (let i = 0; i <= 10; i++) {
  //console.log(i);
}


//2:- for of (this loop is used to iterate over object like structure)

const names = ["rahul", "shyam", "amit","manav"];

for(const name of names){
    console.log(name);   //gives all name
}
console.log(names[2]); // amit

// 3:- for in loop (this loop used in object iteration)

const person = {
    name:"Irshad",
    age : 27,
    address : "Delhi Ashok nagar"
}

for( let key in person){
   console.log(key,":", person[key]);
}


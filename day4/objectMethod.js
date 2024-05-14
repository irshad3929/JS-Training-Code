//1- Object.assign()  to copy the one obj to another

const obj1 = {
    name:"irshad",
    age:27
}

const obj2 = {
    city:"gorakhpur",
    pin : 274402
}

const result = Object.assign({},obj1, obj2);  //Sytnax Object.assign(newObj, sourceObj,TargetObj);
console.log(result);

//2- Object.entries - key value pair provide in array 
const obj3 = {
    a:1,
    b:"hello",
    c:3
}
console.log(Object.entries(obj3)); // [ [ 'a', 1 ], [ 'b', 'hello' ], [ 'c', 3 ] ]

//Object.keys() :- return all key of object in array format
console.log(Object.keys(obj3)); // ['a','b','c']

//Object.values() :- all the values of object
console.log(Object.values(obj3));   // [1,'hello',3]

const obj4 = { a: 1, b: 2, c: 3 };
const properties = Object.getOwnPropertyNames(obj4);
console.log(obj4);  // return object of all 

// Using for...of loop
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} -> ${value}`); // a -> 5, b -> 7, c -> 9
}

// Using array methods
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} -> ${value}`); // a -> 5, b -> 7, c -> 9
});

//3- Object.freeze()

const objNew = {
    prop: 42,
  };
  
  Object.freeze(objNew);
  
  objNew.prop = 33; // Throws an error in strict mode
  
  
  console.log(objNew.prop); // Expected output: 42
  

  //4- Object.seal() :- we update the property but not delete if sealed

  const object1 = {
    property1: 42,
  };
  
  Object.seal(object1);
  object1.property1 = 33;
  console.log(object1.property1); // Expected output: 33
  
  
  delete object1.property1; // Cannot delete when sealed
  console.log(object1.property1); // Expected output: 33

  //5- Object.create() :- inheritance purpouse

  const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // Inherited properties can be overwritten
  
  me.printIntroduction(); //output: "My name is Matthew. Am I human? true"
  
  

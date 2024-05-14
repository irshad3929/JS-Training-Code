// Define a prototype object
// It does not iterate over properties inherited from the object's prototype chain

const animal = {
    legs: 4,
    tail: true
  };
  
  // Create a new object with 'animal' as its prototype
  const dog = Object.create(animal);
  dog.name = "sheru";
  dog.age = 3;
  
  
  dog.bark = function() {
    console.log("Woof!");
  };
  
  // Iterate over all properties of the dog object using for-of loop
  console.log("Properties of dog object:");
  for (const val of Object.values(dog)) {
    console.log(val);
  }

  console.log(Object.values(dog)); //it gives an array and extracting the value of object
  
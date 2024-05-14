// Define a prototype object
//It also iterates over properties inherited from the object's prototype chain.

const animal = {
  legs: 4,
  tail: true,
};

// Create a new object with 'animal' as its prototype
const dog = Object.create(animal);
dog.bark = function () {
  console.log("Woof!");
};

dog.name = "sheru";
dog.age = 3;

// Iterate over all properties of the dog object using for in loop
console.log("Properties of dog object:");
for (const key in dog) {
  console.log(key + ": " + dog[key]);
}

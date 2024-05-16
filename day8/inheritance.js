/**
 * Inheritance in JavaScript allows one class to inherit properties and methods from another class. 
 * 
 */

class Animal {
    constructor(name){
        this.name = name;
    }
    //instance method
    speak(){
       console.log(`${this.name} makes a noise`);
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed = breed;
    }

    speak(){
        super.speak(); //call parent class method
        console.log(`${this.breed} is the breed of this dog`)
    }
}

let dog1 = new Dog("lucky", "german sephred");
dog1.speak();

//Method Overriding

class Dog1{
    speak(){
        console.log("dog speak")
    }
}
class Cat extends Dog1{
    speak(){
        console.log("cat speak")
    }
}

let ans = new Cat()
ans.speak();
//simple class create

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //instance method
  greet() {
    console.log(
      `Hello all my name is : ${this.name} and I am ${this.age} year old `
    );
  }
}

const person1 = new Person("irshad", 25);
person1.greet();
const person2 = new Person("rohit", 26);
person2.greet();

//static method () :- this is call by directly class name

class Student {
  static run() {
    console.log("I am running");
  }
}
console.log(Student.run());

class Add {
  static add(a, b) {
    return a + b;
  }
}
console.log(Add.add(2, 4));

//public instance feild(variable) it is possible in es6

class Test {
  name = "irshad"; //default value of instance feild
  age = 26;

  constructor(name, age) {
    if (name) this.name = name;
    if (age) this.age = age;
  }

  print() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const man1 = new Test("vishal", 24);
man1.print();

const man2 = new Test();
man2.print();

// Private Instance feild prefix "#" used to make private a instance feild

class Counter{
    #count = 0;

    increment(){
        this.#count++;
        console.log(this.#count);
    }

    getCount(){
        return this.#count;
    }
}

let count = new Counter();
count.increment(); //1
count.increment(); //2

console.log(count.getCount()); //2


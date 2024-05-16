/**
 * In JavaScript, properties in classes can be categorized into several types:
 *  instance properties, static properties, and private properties. 
 * These properties help define the state and behavior of class instances and the class itself
 */

// 1- Instance Property
/**
 * Instance properties are properties that are defined on the instance of the class. 
 * They are typically initialized in the constructor method.
 */

class Car{
    constructor(name,model,year){
        this.name=name;    //instamce property
        this.model=model;  //instamce property
        this.year=year;    //instamce property
    }

    displayInfo(){
        console.log(`Car details : Name- ${this.name} Model- ${this.model} Year- ${this.year}`)
    }
}
let car1 = new Car("Verna","Second Top",2022);
car1.displayInfo();


// 1- static Property
/**
 * Static properties are properties that belong to the class itself, not to any instance of the class.
 *  They are defined using the static keyword.
 */

class Car1{
    static noOfWheels = 4; //static property
    constructor(name,model,year){
        this.name=name;    //instamce property
        this.model=model;  //instamce property
        this.year=year;    //instamce property
    }

    static genralInfo(){
       console.log(`Most car have ${Car1.noOfWheels} wheels`)
    }

    displayInfo1(){
        console.log(`Car details : Name- ${this.name} Model- ${this.model} Year- ${this.year}`)
    }
}

Car1.genralInfo();
const mycar = new Car1("BMW","Top",2024);
console.log(mycar.displayInfo1());

/**
 * 3- Private properties
 * 
 */

class Car3{
    #vin=3; //private property

    display(){
        console.log(`${this.#vin}`);    
    }

    getVin(){
        return this.#vin;
    }
}
let car3 = new Car3();
car3.display();
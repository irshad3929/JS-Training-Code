class MathUtil{
    static PI = 3.14;

    static getCircumference(radius){
        return 2 * MathUtil.PI * radius;
    }

}

console.log(MathUtil.PI);
console.log(MathUtil.getCircumference(5));



//Static keyword are called by class name directly
class Student{
    static run(kmph){
        return (`I am running ${kmph} kmph`);  //it doest print undefined at last if we return keyword used
        //console.log(`I am running ${kmph} kmph`); // it gives result but add undefined at last because console ka return undefined hota h
    }
}
console.log(Student.run(5));


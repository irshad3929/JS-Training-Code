const student = {
    name:"Irshad",
    age:27,
    prop:this,
    marks: 95,
    getName: function(){
        console.log(this); //whole object
        return this.name; //irshad
    },
    getMarks: ()=>{
        console.log(this); //window (parent's scope)
        return this.marks; //undefined
    },
    getInfo1:function(){
        setTimeout(()=>{
          console.log(this.name); // irshad
        },2000)
    },
    getInfo2:function(){
        setTimeout(function() { 
            console.log(this.name);  // undefined
        }, 2000);
    }

};

// const result = student.getName();
// console.log(result);

// const result2 = student.getMarks();
// console.log(result2);

const result3 = student.getInfo1();
console.log(result3);

const result4 = student.getInfo2();
console.log(result4);

setTimeout(() => {
    console.log("hello after 1 sec");
}, 1000);
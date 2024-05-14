// shadowing 

const name = "Irshad";

function greet(){
    const name = "Aditya";
    console.log("Hello" , name);
}
console.log(name); //const is block scope so its  print irshad
greet();
console.log(name); // irshad

//Question 2 -  

function outur(){
    const a = 20;
    function inner(){
        const a = 30;
        console.log(a);  // 30
    }
    inner();
    console.log(a); // it access the outer variable 20
}
outur();
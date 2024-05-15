// let count = 0;
// setInterval(()=>{
//   console.log(`Count : ${count}`);
//   count++
// },2000)

//2- use
let count = 0;
const magic = setInterval(()=>{
   console.log(`Count : ${count}`);
    count++;

    if(count >= 5){
        clearInterval(magic);
    }
},1000)

//3- pass argument to callback fun

function greet(name){
    console.log(`Hello : ${name}`)  // print "Hello : Irshad" to the console every 2 seconds.
}
setInterval(greet,2000,"Irshad");





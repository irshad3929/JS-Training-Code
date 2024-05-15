//1- basic syntax
setTimeout(() => {
    console.log("Hello after 2 second");
}, 2000);

//2- passing arguments to callback function
function user(name){
    console.log(`Hello ${name}`)
}

setTimeout(user,3000,"Irshad after 3 second");

//3- clearTimeout() used to clear the setTimeout
const clearTime = setTimeout(() => {
    console.log("this will never execute");
}, 5000);

clearTimeout(clearTime);

//3- nested settimeout
 let count = 0;
 function delayInc(){
    console.log(`Count is ${count+1}`);
    count++;

    if(count<5){
        setTimeout(delayInc, 1000)
    }
 }
 delayInc();

 //4- await with Non promise value
 async function example(){
    let val = await 42;
    console.log(val);
 }
 example();
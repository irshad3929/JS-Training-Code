//1- basic syntax
setTimeout(() => {
    console.log("Hello after 2 second");
}, 2000);

//2- passing arguments to callback function
function user(name){
    console.log(`Hello ${name}`)
}

setTimeout(user,3000,"Irshad");

//3- clearTimeout() used to clear the setTimeout
const clearTime = setTimeout(() => {
    console.log("this will never execute");
}, 5000);

clearTimeout(clearTime);
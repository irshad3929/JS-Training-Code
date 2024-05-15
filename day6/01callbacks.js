/**
 * A callback is a function that is passed as an argument to another function and is executed
 *  after some event or operation has occurred. Callbacks are used to handle asynchronous operations
 *  like network requests, file operations, or timers.
 * There are two ways to use 1- synchronous way 2- asynchronous ways
 */

//1- Synchronous callbacks

function greet(name, calllback){
    console.log("Hello :",name);
    calllback();
}
function goodBye(){
    console.log("Goodbye!");
}

greet("irshad",goodBye);

//2- asynchronousaly
function example(name1, callback){
   console.log("Hello : ",name1);
   setTimeout(callback, 3000);  //simulate a asyn operation
}
function sayHello(){
    console.log("Hello Sir ");
}
example("irshad",sayHello);


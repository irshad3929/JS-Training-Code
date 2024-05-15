const promise1 = new Promise((resolve)=>{
    console.log("data fetchong wait...")
    setTimeout(() => {
        resolve("resolve promise 1")
    }, 2000);
})

const promise2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("resolve promise 2");
    },6000);
})

const promise3 = new Promise((resolve)=>{
    setTimeout(()=>{
       resolve("resolve promise 3");
    },2000)
})

promise1
.then((data)=>{
    console.log(data);

    return promise2;  //promise chaining
})

.then((data)=>{
    console.log(data);

    return promise3;
})

.then((data)=>{
    console.log(data);
})

/**
 * Returning a promise in JavaScript allows you to chain asynchronous operations, ensuring that each step
 *  in the chain completes before moving on to the next. 
 */
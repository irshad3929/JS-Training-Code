
function promise1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("promise 1");
            resolve("Promise 1 resolve");
        }, 2000);
    })
}


function promise2(dataFromPromise1){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("promise 2");
            resolve(`Processed : ${dataFromPromise1}`);
        }, 2000);
    })
}



promise1().then((result1)=>{
    promise2(result1).then((result2)=>{
        console.log(result2);
    }).catch((error)=>{
        console.log("error in promise 2")
    })
}).catch((error)=>{
    console.log("error in promise 1");
});
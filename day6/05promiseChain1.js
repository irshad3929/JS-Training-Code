function step1(){
    return new Promise((resolve,reject)=>{
        console.log("this is step1 promise");
        setTimeout(() => {
            resolve("step 1 resolve");
        }, 1000);
    })
}

function step2(dataFromStep1){
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
         console.log("this is step 2");
         resolve(`Processed ${dataFromStep1}`);
       }, 2000);
   })
}

step1
.then((result)=>{
   return step2(result);
})

.then((finalResult)=>{
    console.log(finalResult);
})

.catch((error)=>{
    console.log(error);
})
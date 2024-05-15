

function step1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log("step 1 promise")
         resolve("data from step 1");
        },2000)
    })
}

function step2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log("step 2 promise")
         resolve("data from step 2");
        },2000)
    })
}

Promise.all([step1(), step2()]).then((result)=>{
    console.log(result);
})
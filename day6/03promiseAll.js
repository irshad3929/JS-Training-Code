const promise1 = new Promise((resolve, reject)=>{
    console.log("data fetching ....")
    setTimeout(()=>{
      let problem = true;
      if(problem){
        resolve("promise 1 resolve");
      }else{
        reject("promise 1 reject");
      }
    }, 1000)
})

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      let problem = false;
      if(problem){
        resolve("promise 2 resolve");
      }else{
        reject("promise 2 reject");
      }
    }, 3000)
})

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      let problem = true;
      if(problem){
        resolve("promise 3 resolve");
      }else{
        reject("promise 3 reject");
      }
    }, 5000)
})

Promise.race([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
})


/**
 * Promise.all([p1,p2,p3])  waits for all promise resolve suceesful
 * Promise.race()  - waits for the first promised to be fullfilled or rejected
 * Promise.allSettled() - Waits for all promises to be settled (fulfilled or rejected) and returns their results.
 * Promise.any() - Waits for any promise to be fulfilled and ignores rejections. If all promises are rejected, it throws an 
 */
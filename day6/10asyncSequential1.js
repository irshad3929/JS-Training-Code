
async function task1(){
    console.log("task 1 starting");
    return new Promise((resolve)=> setTimeout(()=>{
      console.log("Task 1 completed");
      resolve("promise 1 resolved");
    },1000))
  }
  
  async function task2(dataFromTask1){
    console.log("task 2 starting");
    return new Promise((resolve)=>setTimeout(()=>{
      console.log("task 2 completed");
      resolve(`Processed : ${dataFromTask1}`);
    },2000))
  }
  
  async function task3(dataFromTask2){
    console.log("task 3 stated");
    return new Promise((resolve)=>setTimeout(() => {
      console.log("task 3 completed");
      
      if(!dataFromTask2){
        console.log("error")
      }else{
          resolve(`Task 2 resolved`);
      }
    }, 3000))
  }
  
  async function handle(){
    let result1 = await task1();
    let result2 = await task2(result1);
    let result3 = await task3(result2);
    console.log(result1,result2,result3);
  }
  handle();
  
  
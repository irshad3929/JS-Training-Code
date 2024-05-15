/**
 * Task- Sequential execution
 * each task starts only after the previous task has completed, resulting in a total execution time of 
 * approximately 6 seconds. 
 * 
 */
async function task1(){
  console.log("task 1 starting");
  return new Promise((resolve)=> setTimeout(()=>{
    console.log("Task 1 completed");
    resolve("result of task 1");
  },6000))
}

async function task2(){
  console.log("task 2 starting");
  return new Promise((resolve)=>setTimeout(()=>{
    console.log("task 2 completed");
    resolve("result of task 2");
  },2000))
}

async function task3(){
  console.log("task 3 stated");
  return new Promise((resolve)=>setTimeout(() => {
    console.log("task 3 completed");
    resolve("result of task 3");
  }, 3000))
}

async function handleSequentially(){
  let result1 = await task1();
  let result2 = await task2();
  let result3 = await task3();
  console.log(result1,result2,result3);
}
handleSequentially();


/**
 * Task :- Concurrency execution
 * all three tasks are started at the same time, and they run concurrently. The total execution time is 
 * approximately 6 second, which is the duration of the longest task.
 *  
 */

async function task1() {
  console.log("task 1 starting");
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("Task 1 completed");
      resolve("result of task 1");
    }, 3000)
  );
}

async function task2() {
  console.log("task 2 starting");
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("task 2 completed");
      resolve(`result of task 2`);
    }, 1000)
  );
}

async function task3() {
  console.log("task 3 starting");
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("task 3 completed");

      resolve("result of task 3");
    }, 2000)
  );
}

async function handleCuncurrect() {
  let [res1, res2, res3] = await Promise.all([task1(), task2(), task3()]);
  console.log(res1);
  console.log(res2);
  console.log(res3);
}

handleCuncurrect();

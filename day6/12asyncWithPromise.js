/**
 * in this code i used both async-await and promise together
 */

async function step1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("step 1 resolve");
      } else {
        reject("step 1 reject");
      }
    }, 1000);
  });
}

async function step2(dataFromStep1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("step 2 resolve ");
      resolve(`Processed : ${dataFromStep1}`);
    }, 1000);
  });
}

async function executeStep() {
  try {
    const result1 = await step1();
    const result2 = await step2(result1);
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}

executeStep();

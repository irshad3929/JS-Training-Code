const promise = new Promise((resolve, reject) => {
  console.log("data fetching ...");
  setTimeout(() => {
    let success = false;
    if (success) {
      resolve("promise resolve");
    } else {
      reject("promise reject");
    }
  }, 3000);
});

promise
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

//using normal function

function fetchData(){
  return new Promise((resolve,reject)=>{
    console.log("data resolve after 2 second");
    setTimeout(() => {
      resolve("data resolve");
    }, 2000);
  })
}

fetchData()
.then((data)=>{
  console.log(data);  //consume the data which resolved
})

.catch((error)=>{
   console.log(error);
})
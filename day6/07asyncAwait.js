/**
 * The async/await syntax in JavaScript provides a more readable and straightforward way to work with asynchronous
 * operations compared to traditional methods like callbacks and Promises. It allows you to write asynchronous code
 * that looks and behaves like synchronous code.
 */

//1- Basic Syntax
async function greet() {
  return "Hello Dear!"; //implicitly promise return which should be handled
}

greet().then((result) => {
  console.log(result);
});

//2- await with async
async function fetchData() {
  let response = await fetch("https://api.example/data");
  let data = await response.json();
  return data;
}

fetchData().then((data) => {
  console.log(data);
});

//3- error handling with try-catch
async function readData() {
  try {
    let res = await fetch("https://api.example/data");
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("error occured");
  }
}

readData().then((result)=>{
    console.log(result);
})

//4- 



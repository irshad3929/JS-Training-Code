//scope chaning

const x = 10;

function outer() {
  const y = 20;
  function inner() {
    const z = 30;
    console.log(x + y + z); //60
  }

  inner();
}

outer();

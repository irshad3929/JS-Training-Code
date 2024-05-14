// setTimeout

function x() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i*3000);
  }
}
x();  // remember the same reference to i

function y() {
    for (let i = 0; i <= 5; i++) {
      setTimeout(function () {
        console.log(i);  // here i create a new memory scope it does'nt reference to i
      }, 3000);
    }
  }
  y(); 
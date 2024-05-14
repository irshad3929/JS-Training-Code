//Closure concept
function test() {
  var result = [];

  for (var i = 0; i <= 5; i++) {
    result.push(function () {
      console.log(i);
    });
  }
  return result;
}

const ans = test();

ans[0]();
ans[1]();
ans[2]();
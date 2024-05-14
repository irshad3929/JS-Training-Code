function x() {
  for (var i = 0; i <= 5; i++) {
    function close(i) {                 // help clouser rule to print 0 to 5 degit every time create new copy of i
      setTimeout(function () {
        console.log(i);
      }, i * 2000);
    }
    close(i);
  }
}

x();

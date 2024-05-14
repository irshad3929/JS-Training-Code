// return a function

function outer(){
    var a = 10;
    function inner(){
        console.log(a);
    }
    return inner;
}
const b = outer();
console.log(b);   //return a function
b(); // when call the function than gives output
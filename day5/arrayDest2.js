// use case swapping using destructuring

let a=1, b=2;
[a,b] = [b,a];
console.log(a,b);

// function return a value

function test(){
    return [a,b];
}
const [first,second] = test();
console.log(first,second);


//nested array

const numbers = [10,20, [30,40],50, [60,70]]

const [p,q,[c,d], , [e,f]] = numbers;
console.log(p,q,c,d,e,f);  //[10,20,30,40,60,70]

const [x,y,z,l,m,n,o] = numbers;
console.log(x,y,z,l,m,n,o);  // 10 20 [30,40] 50 [60, 70] undefined undefined

//3-apply for new operator
const dateFeild = [1980,2,1];

const date = new Date(...dateFeild);
console.log(date);

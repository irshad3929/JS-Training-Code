//arguments that accpet unlimited num of arg

function addNumber(){
    let ans = 0;
    for(let i=0; i<arguments.length; i++){      //arguments is the object in js
        ans+=arguments[i];
    }
    return ans;
}

let result = addNumber(19,43,24,24,2,4,1);
console.log(result);
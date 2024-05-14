function balanceRev(expression){
    if(expression.length % 2 !== 0) return -1;

    let open = 0;
    let close =0;

    for(let i = 0; i<expression.length; i++){
        if(expression[i]==='{'){
            open++
        }else{
            if(open ===0){
                close++
            }else{
                open--;
            }
                
        }
    }

    if((open + close)%2 !== 0) return -1;

    return Math.ceil(open/2) + Math.ceil(close/2);


}

console.log(balanceRev("{{{{}}"));
console.log(balanceRev("{{{"));

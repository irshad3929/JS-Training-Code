let arr = [1,2,3,4]

let ans = arr.reduce((acc,curr)=>{
      acc.push(curr+1)

      return acc;
} , [])

console.log(ans);
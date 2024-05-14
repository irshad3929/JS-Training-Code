function countSumCombinations(arr, sum, index, target) {
    // Base case
    if(sum === target){
      return 1;
    }

    if(index >= arr.length){
      return 0;
    }

    if(index === arr.length - 1){
       if(sum + arr[index] === target || sum - arr[index] === target){
        return 1;
       }
       return 0;
    }

    
  
    // Recursive cases: Explore both possibilities (including/excluding the current element)
    let include = countSumCombinations(arr, sum + arr[index], index+1,target); 
    let exclude = countSumCombinations(arr, sum - arr[index],index+1,target);
    let notpick = countSumCombinations(arr,sum,index+1,target);

    return include + exclude + notpick;
  }
  
  // Example usage
  const arr = [-1, 9, 8, -3, 4];
  const target = 5;
  const sum = 0;

  const result = countSumCombinations(arr, sum,0,target);
  console.log(result);
  
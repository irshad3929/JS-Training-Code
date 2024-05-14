
//1- map()
let nums = [2,4,5,6,34,12]
const ans = nums.map((num)=>{
    return num * 2;
})
console.log(ans);

const ans2 = nums.map(function(num){
    return num + 20;
})
console.log(ans2);


//2- filter
const ans3 = nums.filter((num)=>{
    return num > 7;
})
console.log(ans3);

const ans4 = nums.filter(function(val){
    return val < 20;
})
console.log(ans4);

//3- reduce
const ans5 = nums.reduce((acc,curr)=>{
    return acc + curr;
})
console.log(ans5);

const ans6 = nums.reduce((acc,curr)=>{
    return acc - curr;
})
console.log(ans6);






const numbers = [1, 2, 3, 4, 5];

const evenSum = numbers.reduce((accumulator, currentValue, index) => {
  if (index % 2 === 0) {
    return accumulator + currentValue;
  }
  return accumulator;
}, 0);

console.log(evenSum); // Output: 9 (1 + 3 + 5)



const numberss = [1, 2, 3, 4, 5];

const product = numberss.reduce((accumulator, currentValue, index, array) => {
  if (index === array.length - 1) {
    return accumulator * currentValue;
  }
  return accumulator + currentValue;
}, 0);

console.log(product); // Output: 50 ((1 + 2 + 3 + 4) * 5)

const singleElementArray = [10];

const sum = singleElementArray.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum); // Output: 10





const expenses = [
    { category: 'Food', amount: 50 },
    { category: 'Transportation', amount: 30 },
    { category: 'Food', amount: 20 },
    { category: 'Utilities', amount: 80 },
    { category: 'Transportation', amount: 40 },
    { category: 'Food', amount: 15 },
    { category: 'Utilities', amount: 60 }
  ];
  
  const totalByCategory = expenses.reduce((acc, expense) => {
    if (acc[expense.category]) {
      acc[expense.category] += expense.amount;
    } else {
      acc[expense.category] = expense.amount;
    }
    return acc;
  }, {});
  
  console.log(totalByCategory);
  




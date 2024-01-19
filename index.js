
function sumReducer1(arr){
  
  //reduce function accepts 2 parameters, then invokes the callback for each item of the array, updating the accumulator at each step. 
  //first parameter is the callback function that updates the accumulator value, 
  //second parameter is the initial value of the accumulator. 
  
  let total = arr.reduce((sum, number)=> {
  const updatedSum = sum + number;
  return updatedSum;
}, 0);
return total;
}
console.log(sumReducer1([15, 16, 17, 18, 19]));



function sumReducer2(arr){ 
  
  //second parameter omitted so that accumulator value is initialized with the first item of the array, and the iteration starts from the second item.
  
let total = arr.reduce((sum, number)=> {
  return sum + number;
});
return total;
}
console.log(sumReducer2([15, 16, 17, 18, 19]));

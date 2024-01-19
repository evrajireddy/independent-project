
function sumReducer1(arr){
  
  //reduce function accepts 2 parameters, then invokes the callback for each item of the array, updating the accumulator at each step. 
  //first parameter is the callback function that updates the accumulator value, 
  //second parameter is the initial value of the accumulator. 
  
  arr.reduce((sum, number)=> {
  const updatedSum = sum + number;
  return updatedSum;
}, 0);

}
console.log(sumReducer1([1, 3, 5, 7]));



function sumReducer2(arr){ 
  
  //second parameter omitted so that accumulator value is initialized with the first item of the array, and the iteration starts from the second item.
  
arr.reduce((sum, number, index)=>() {
  return sum + number;
});

}
console.log(sumReducer2([1, 3, 5, 7]));

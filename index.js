//This is to demo Array.Reduce function with Callback and Initial Value 
function sumReducer1(arr){
  
  //reduce function accepts 2 parameters, then invokes the callback for each item of the array, updating the accumulator at each step. 
  //first parameter is the callback function that updates the accumulator value, 
  //second parameter is the initial value of the accumulator. 
  
  let total = arr.reduce((sum, number)=> {
  const updatedSum = sum + number;
  return updatedSum;
}, 10);
return total;
}
console.log(sumReducer1([5, 6, 7, 8, 9]));


//This is to demo Array.Reduce function without Initial Value
function sumReducer2(arr){
  
  //second parameter omitted so that accumulator value is initialized with the first item of the array, and the iteration starts from the second item.
  
let total = arr.reduce((sum, number)=> {
  return sum + number;
});
return total;
}
console.log(sumReducer2([5, 6, 7, 8, 9]));


// This is to demo Array.reduce Time Complexity
function timeComplexityReducer(){
  //Size of the object is 3
const users = [
  {name:'Luis', age:15},
  {name:'Jose', age:18},
  {name:'Aaron', age:40}
];

const reducer= (accumulator, item)=> accumulator + item.age;
  //Below reducer will be called on each object of the array i.e., 3 times
const totalAge =  users.reduce(reducer,0);
const ageAverage = totalAge / users.length;
console.log(`Total ${totalAge}, Average ${ageAverage}`); // Total 73, Average 24.333333333333332
}
timeComplexityReducer();


function sumReducer1(arr){
arr.reduce((sum, number)=> {
  const updatedSum = sum + number;
  return updatedSum;
}, 0);

}
console.log(sumReducer1([1, 3, 5, 7]));



function sumReducer2(arr){
arr.reduce((sum, number, index)=>() {
  return sum + number;
});

}
console.log(sumReducer2([1, 3, 5, 7]));

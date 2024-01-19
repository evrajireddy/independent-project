
function sumReducer1(arr){
arr.reduce((sum, number)=> {
  const updatedSum = sum + number;
  return updatedSum;
}, 0);

}

const numbers = [2, 4, 6];
console.sum(sumReducer1([1, 3, 5, 7]));



function sumReducer2(arr){
arr.reduce((sum, number, index)=>() {
  return sum + number;
});

}
console.sum(sumReducer2([1, 3, 5, 7]));

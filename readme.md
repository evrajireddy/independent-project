# Reduce

## Introduction

The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
The array.reduce() is a method on array that accepts 2 arguments:
```js
const value = array.reduce(callback[, initialValue]);
```
## Algorithm Description

1. ### Callback & Initial Value:
   The callback is an obligatory argument that is a function performing the reduce operation, and the second optional argument is the initial value.

JavaScript invokes the callback function upon each item of the array with 4 arguments: the accumulator value, the current array item, the current array item index, and the array itself. The callback function must return the updated accumulator value.

```js
function(accumulator, item, index, array) {
  // Use `accumulator` and `item` 
  // to calculate `updatedAccumulator`...
  return updatedAccumulator;
}
```

array.reduce(sum, 0) calculates the sum of all elements in the array.

The callback is invoked for every item in the array with the accumulated sum and the iterated number. callback adds the iterated item to the already accumulated sum, and returns that updated sum.

That's how an array is reducing to a sum.

Also, note the second argument of arr.reduce(callback, 0) — the sum of array items is initialized with 10.

The callback would be invoked five times, with the arguments and return values in each call being as follows



| Call   |   accumulator   |   currentValue   |   index   |   Return value   |
| -------- | ------- | -------- | ------- | ------- |
| First call   | 10   |   5   |   0   |   15   |
| Second call   | 15   |   6   |   1   |   21   |
| Third call   | 21   |   7   |   2   |   28   |
| Fourth call   | 28   |   8   |   3   |   36   |
| Fifth call   | 36   |   9   |   4   |   45   |
	



2. ### Callback Omitting initial value argument
    You can also omit the second argument of the array.reduce(). In such a case the reduce method initializes the accumulator value with the first item of the array, and the iteration starts from the second item.

```js
arr.reduce((sum, number)=>() {
  return sum + number;
});
```

The callback would be invoked four times, with the arguments and return values in each call being as follows:

| Call   |   accumulator   |   currentValue   |   index   |   Return value   |
| -------- | ------- | -------- | ------- | ------- |
| First call   | 5   |   6   |   1   |   11   |
| Second call   | 11   |   7   |   2   |   18   |
| Third call   | 18   |   8   |   3   |   26   |
| Fourth call   | 26   |   9   |   4   |   35   |

The value returned by reduce() would be that of the last callback invocation (35).





## Big O Evaluation

### Time Complexity

If the array/object's size is `n`, reducer will be called for each element. Hence the time complexity is O(n)

```js
const users = [
  {name:'Luis', age:15},
  {name:'Jose', age:18},
  {name:'Aaron', age:40}
];

const reducer= (accumulator, item)=> accumulator + item.age;
const totalAge =  users.reduce(reducer,0);
const ageAverage = totalAge / users.length;
console.log(`Total ${totalAge}, Average ${ageAverage}`); 
```

### Space Complexity

Reduce method applies a callback against an accumulator and each element in the array to reduce it to a single value. space complexity - O(1) 

## Use Cases

Because selection sort is not very efficient it's good for small data sizes, and as an intro for sorting algorithms for beginner coders

## Edge Cases and Concerns

As mentioned above, the algorithm is not very efficient so the edge cases and concerns would be for large data inputs.
Other sorting algorithms such as quick-sort and merge-sort have a time complexity of O(n\*log(n)) which are way more efficient.

## Citations

[Wikipedia - Selection Sort](https://en.wikipedia.org/wiki/Selection_sort)

[How to Use Array Reduce Method in JavaScript](https://dmitripavlutin.com/javascript-array-reduce/)

[The gif to illustrate selection sort](https://s-satsangi.medium.com/insertion-sort-selection-sort-and-bubble-sort-5eb16d55a4de)

[ChatGPT Link to chat](https://chat.openai.com/share/078ea7b9-c88d-4abb-a8d9-8878aac4640c)

[Time complexity Big 0 for Javascript Array methods and examples](https://dev.to/lukocastillo/time-complexity-big-0-for-javascript-array-methods-and-examples-mlg)

[Understanding Time and Space Complexity of Common JavaScript Built-in Methods](https://javascript.plainenglish.io/understanding-time-and-space-complexity-of-common-javascript-built-in-methods-39a3285a6409)

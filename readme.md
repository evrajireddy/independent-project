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

Also, note the second argument of arr.reduce(callback, 0) — the sum of array items is initialized with 0.

The callback would be invoked five times, with the arguments and return values in each call being as follows



| Call   |   accumulator   |   currentValue   |   index   |   Return value   |
| -------- | ------- | -------- | ------- | ------- |
| First call   | 0   |   15   |   0   |   25   |
| Second call   | 25   |   16   |   1   |   41   |
| Third call   | 41   |   17   |   2   |   58   |
| Fourth call   | 58   |   18   |   3   |   76   |
| Fifth call   | 76   |   19   |   4   |   85   |
	



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
| First call   | 15   |   16   |   1   |   31   |
| Second call   | 31   |   17   |   2   |   48   |
| Third call   | 48   |   18   |   3   |   66   |
| Fourth call   | 66   |   19   |   4   |   85   |

The value returned by reduce() would be that of the last callback invocation (85).

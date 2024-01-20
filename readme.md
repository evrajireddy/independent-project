# Reduce

## Introduction

The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
The array.reduce() is a method on array that accepts 2 arguments:
```js
const value = array.reduce(callback, initialValue]);
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

### Sum all the values of an array
In the below code, studentResult array has 5 numbers. Using the reduce() method array is reduced to a single value that the sum of all values of the studentResult array and the result is assigned to the total.

```js
const studentResult = [67, 90, 100, 37, 60];

const total = studentResult.reduce((accumulator, currentValue) => accumulator +currentValue, 0);

console.log(total);
```
Output:
```js
354
```

### Sum of values in an object array
Generally, we are fetching data from the back-end as object arrays. Therefore, the reduce() method helps to manage our front-end logic. In the below code, studentResult object array has three subjects with their marks as objects. Here, currentValue.marks take the marks of each subject in the studentResult object array.

```js
const studentResult = [
    { subject: 'Maths', marks: 78 },
    { subject: 'Physics', marks: 80 },
    { subject: 'Chemistry', marks: 93 }
];

const total = studentResult.reduce((accumulator, currentValue) => accumulator + currentValue.marks, 0);

console.log(total);
```
Output:
```js
251
```

### Flatten an array of arrays
“Flatten an array” means the transformation of the multi-dimensional array into one dimension. In the below code, twoDArr 2D array is transformed into oneDArr one dimensional array. Here, the first [1,2] array is assigned to the accumulator and then each rest of the elements of the twoDArr array is concatenated to the accumulator.

```js
const twoDArr = [ [1,2], [3,4], [5,6], [7,8] , [9,10] ];

const oneDArr = twoDArr.reduce((accumulator, currentValue) => accumulator.concat(currentValue));

console.log(oneDArr);
```
Output:
```js
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

### Grouping objects by a property
Based on the properties of an object, we can group the object array into several groups using the reduce() method. You can understand the idea clearly with the below code fragment. Here, result object array has five objects that each object has subject and marks properties. The subject is passed if marks are greater than or equal to 50. Otherwise the subject fails. reduce() is used to group the result into the pass and fail. First initialValue is assigned to the accumulator, then push() method adds current object to the pass and the fail properties as object arrays after checking the condition.

```js
const result = [
    {subject: 'Physics', marks: 41},
    {subject: 'Chemistry', marks: 59},
    {subject: 'Pure Maths', marks: 36},
    {subject: 'Applied Maths', marks: 90},
    {subject: 'English', marks: 64},
];

let initialValue = {
    pass: [], 
    fail: []
}

const groupedResult = result.reduce((accumulator, current) => {
    (current.marks>=50) ? accumulator.pass.push(current) : accumulator.fail.push(current);
    return accumulator;
}, initialValue);

console.log(groupedResult);
```

Output:
```js
{
 pass: [
  { subject: ‘Chemistry’, marks: 59 },
  { subject: ‘Applied Maths’, marks: 90 },
  { subject: ‘English’, marks: 64 }
 ],
 fail: [
  { subject: ‘Physics’, marks: 41 },
  { subject: ‘Pure Maths’, marks: 36 }
 ]
}
```

 ### Remove duplicates in an array
In the below code fragment, duplicates in the duplicatedArr array are removed. First, an empty array is assigned to the accumulator as initial value. accumulator.includes() checks whether each element of the duplicatedArr array is already available in the accumulator. If the currentValue is not available in the accumulator, it is added using the push().
```js
const duplicatedsArr = [1, 5, 6, 5, 7, 1, 6, 8, 9, 7];

const removeDuplicatedArr = duplicatedsArr.reduce((accumulator, currentValue) => {
    if(!accumulator.includes(currentValue)){
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);

console.log(removeDuplicatedArr);
```

Output:
```js
[ 1, 5, 6, 7, 8, 9 ]
```

## Edge Cases and Concerns
If the array only has one element (regardless of position) and no initialValue is provided, or if initialValue is provided but the array is empty, the solo value will be returned without calling callbackFn.

If initialValue is provided and the array is not empty, then the reduce method will always invoke the callback function starting at index 0.

If initialValue is not provided then the reduce method will act differently for arrays with length larger than 1, equal to 1 and 0, as shown in the following example:
```js
const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
[1, 100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50

// callback is invoked once for element at index 1
[1, 100].reduce(getMax); // 100

// callback is not invoked
[50].reduce(getMax); // 50
[].reduce(getMax, 1); // 1

[].reduce(getMax); // TypeError
```


## Citations

[Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

[How to Use Array Reduce Method in JavaScript](https://dmitripavlutin.com/javascript-array-reduce/)

[Use Cases for reduce() in JavaScript](https://javascript.plainenglish.io/5-use-cases-for-reduce-in-javascript-61ed243b8fef)

[Time complexity Big 0 for Javascript Array methods and examples](https://dev.to/lukocastillo/time-complexity-big-0-for-javascript-array-methods-and-examples-mlg)

[Understanding Time and Space Complexity of Common JavaScript Built-in Methods](https://javascript.plainenglish.io/understanding-time-and-space-complexity-of-common-javascript-built-in-methods-39a3285a6409)

# Reduce

## Introduction

The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
The array.reduce() is a method on array that accepts 2 arguments:
```js
const value = array.reduce(callback[, initialValue]);
```
## Algorithm Description

1. Callback: The callback is an obligatory argument that is a function performing the reduce operation, and the second optional argument is the initial value.

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

Also, note the second argument of numbers.reduce(summarize, 0) — the sum of array items is initialized with 0.


2. Iterate over the array, element by element. For each element in the array, iterate over the entire array to find the element with the minimum value on the right side of the array, the unsorted side.

```js
for (let i = 0; i < array.length; i++) {
  // Any elements in an index greater than i are considered in the unsorted part of the array
  let minIndex = i; // initialize min to the current element
  for (let j = i + 1; j < array.length; j++) {
    // iterate over the unsorted side of the array
    minIndex = array[minIndex] > array[j] ? j : minIndex; // Find the min element's index in the unsorted side of the array
  }
}
```

3. Swap: Swap the minimum element with the first element in the unsorted portion.

```js
[array[minIndex], array[i]] = [array[i], array[minIndex]]; // swap the element at index i with the min element
```

4. Expansion of Sorted Portion: Move the boundary between the sorted and unsorted portions one position to the right.

```js
// This step is already taken care of in the external for loop
```

5. Repeat: Repeat steps 2-4 until the entire list is sorted and return the input array that was sorted in-place

![Selection Sort Animation](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*5WXRN62ddiM_Gcf4GDdCZg.gif)

## Big O Evaluation

### Time Complexity

If the array's length is `n`, and for each element in the array we iterate over the entire unsorted part of the array to find the minimum element, than every time we iterate over an array of `n - 1` length compared to the previous iteration. That, in the worst case would be `O(n^2)` because even though the unsorted portion is shrinking, the number of comparisons is still proportional to the square of the size of the input

```js
for (let i = 0; i < array.length; i++) {
  // a for loop over the entire length of the array --> n
  let minIndex = i; // creating a variable --> 1
  for (let j = i + 1; j < array.length; j++) {
    // nested for loop over the unsorted side of the array --> n - 1
    minIndex = array[minIndex] > array[j] ? j : minIndex; // comparing each element with the next --> 2n - 2
  }
  [array[minIndex], array[i]] = [array[i], array[minIndex]]; // swapping outside the nested loop --> n
}

// (n + 1) * (3n - 3) + n --> 3n^2 - 3n + 3n - 4
// Dropping the constants and linear expressions --> O(n^2)
```

### Space Complexity

We're only creating one variable for the `minIndex` which makes the space complexity highly the highly efficient --> O(1)

## Use Cases

Because selection sort is not very efficient it's good for small data sizes, and as an intro for sorting algorithms for beginner coders

## Edge Cases and Concerns

As mentioned above, the algorithm is not very efficient so the edge cases and concerns would be for large data inputs.
Other sorting algorithms such as quick-sort and merge-sort have a time complexity of O(n\*log(n)) which are way more efficient.

## Citations

[Wikipedia - Selection Sort](https://en.wikipedia.org/wiki/Selection_sort)

[GeekForGeeks - Selection Sort](https://www.geeksforgeeks.org/selection-sort/#)

[The gif to illustrate selection sort](https://s-satsangi.medium.com/insertion-sort-selection-sort-and-bubble-sort-5eb16d55a4de)

[ChatGPT Link to chat](https://chat.openai.com/share/078ea7b9-c88d-4abb-a8d9-8878aac4640c)

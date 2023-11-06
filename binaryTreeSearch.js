function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let iteration = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Element found, return its index
    } else if (arr[mid] < target) {
      left = mid + 1; // Adjust the left boundary
    } else {
      right = mid - 1; // Adjust the right boundary
    }
    iteration++;
    console.log("Iteration number: " + iteration)
    console.log("Actual mid position " + mid)
    console.log("Left position after this iteration: " + left)
    console.log("Right position after this iteration: " + right + "\n")

  }

  return -1; // Element not found
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetElement = 14;

const result = binarySearch(sortedArray, targetElement);

if (result !== -1) {
  console.log(`Element ${targetElement} found at index ${result}.`);
} else {
  console.log(`Element ${targetElement} not found in the array.`);
}

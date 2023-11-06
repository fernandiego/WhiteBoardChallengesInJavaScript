function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: an array with 0 or 1 elements is already sorted
  }

  const pivot = arr[Math.floor(Math.random() * arr.length)]; // Choose a random pivot element
  const left = [];
  const right = [];
  const equal = [];

  for (const element of arr) {
    if (element < pivot) {
      left.push(element);
    } else if (element > pivot) {
      right.push(element);
    } else {
      equal.push(element);
    }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)]; // Recursively sort left and right subarrays
}

// Example usage:
const unsortedArray = [5, 2, 9, 3, 6, 1, 8, 4, 7];
const sortedArray = quickSort(unsortedArray);

console.log("Original Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);

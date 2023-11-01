function diagonalDifference(arr) {
    // Initialize variables to store the sums of the two diagonals
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    // Loop through the matrix to calculate the sums
    for (let i = 0; i < arr.length; i++) {
        primaryDiagonalSum += arr[i][i]; // Sum of elements on the primary diagonal
        secondaryDiagonalSum += arr[i][arr.length - 1 - i]; // Sum of elements on the secondary diagonal
    }

    // Calculate the absolute difference
    const absoluteDifference = Math.abs(primaryDiagonalSum - secondaryDiagonalSum);

    return absoluteDifference;
}

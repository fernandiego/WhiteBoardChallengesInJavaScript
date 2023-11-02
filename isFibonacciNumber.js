function isFiboNumber(number, a = 0, b = 1) {
    if (a === number || b === number) {
        return true;
    }
    if (b > number) {
        console.log(number + " is not a Fibonacci number.");
        console.log("The previous Fibonacci number is " + a);
        console.log("The next Fibonacci number is " + b);
        return false;
    }
    return isFiboNumber(number, b, a + b);
}

const numberToCheck = 233; // Change this to the number you want to check
if (isFiboNumber(numberToCheck)) {
    console.log(numberToCheck + " is a Fibonacci number");
}
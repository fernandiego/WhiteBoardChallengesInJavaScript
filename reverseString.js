function reverseString(inputString) {
  let reversed = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversed += inputString[i];
  }
  return reversed;
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);

console.log("Original string: " + originalString);
console.log("Reversed string: " + reversedString);

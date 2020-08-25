const numbers = [12, 27, 0, 5, 64, 42, 56, 7, 10, 3, 7, 32, 37, 42, 1];

//Reduce is useful for adding things up
const sum = numbers.reduce((currentTotal, currentNumber) => {
  return currentTotal + currentNumber;
}, 0); // inital Value

const average = sum / numbers.length;

console.log("The Sum of all the numbers is" + " " + "(" + sum + ")");

console.log("Average of Numbers is" + " " + "(" + average + ")");

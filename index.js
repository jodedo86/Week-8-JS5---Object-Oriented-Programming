//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; //created the array
let firstAge = ages[0];
let lastAge = ages[ages.length - 1]; //programmatically subtracts the first element in the array from the last element of the array.
let diff = lastAge - firstAge;
console.log(diff);

// Add a new age to your array and repeat the step above to ensure it is dynamic.
ages.push(17); //adding new age to array
firstAge = ages[0];
lastAge = ages[ages.length - 1]; //programmatically subtracts the first element in the array from the last element of the array.
difference = lastAge - firstAge;
console.log(diff);

//loop to iterate through the array and calculate the average age.
let totalAge = 0;
for (let i = 0; i < ages.length; i++) {
  totalAge += ages[i];
}
let averageAge = totalAge / ages.length;
console.log(averageAge);

//2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'. Use a loop to iterate through the array and calculate the average number of letters per name. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
//for loop to iterate through array and calculate the average number of letters per name
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log(averageLetters);

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let combinedNames = " ";
for (let i = 0; i < names.length; i++) {
  combinedNames += names[i] + " ";
}
combinedNames = combinedNames.trim(); //used .trm to remove white spaces from both sides of the the string
console.log(combinedNames);

//3. How do you access the last element of any array?
const array = [1, 2, 3, 4, 5];
const lastElement = array[array.length - 1];
console.log(lastElement);

//4. How do you access the first element of any array?
const array = [1, 2, 3, 4, 5];
const firstElement = array[0];
console.log(firstElement);

//5 Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let names = ["Kelly", "Sam", "Kate"]; // Starting with this array
let nameLengths = []; // Create a new array

// Iterate over the names array with for loop
for (let i = 0; i < names.length; i++) {
  // Add the length of each name to the nameLengths array
  nameLengths.push(names[i].length);
}
console.log(nameLengths); // Expected Output: [5, 3, 4]

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let nameLengths = [5, 3, 4]; // Starting with the nameLengths array
let totalSum = 0; // Initialize a variable to hold the sum
// Iterate over the nameLengths array with for loop
for (let i = 0; i < nameLengths.length; i++) {
  // Add each element to the totalSum
  totalSum += nameLengths[i];
}

console.log(totalSum); // Expected Output: 12

//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function repeatWord(word, n) {
  let result = "";

  for (let i = 0; i < n; i++) {
    result += word; // Loop `n` Times: Use a for loop to iterate `n` times.
  }

  return result;
}
console.log(repeatWord("Hello", 3)); // Expected Output: "HelloHelloHello"

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function fullName(firstName, lastName) {
  //used temperate literal
  return `${firstName} ${lastName}`;
}
console.log(fullName("Jackie", "Smith")); // Expected Output: "Jackie Smith"

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isSumGreaterThan100(numbers) {
  let sum = 0; // Initialize the sum to 0

  for (let number of numbers) {
    // Iterate over the array and get the sum
    sum += number;
  }
  return sum > 100; //Return true if the sum is greater than 100, if not than return false
}
console.log(isSumGreaterThan100([30, 70, 40])); // Expected Output: true
console.log(isSumGreaterThan100([10, 30, 50])); // Expected Output: false

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function getAverage(numbers) {
  let sum = 0; // Initialize the sum to 0
  if (numbers.length === 0) {
    return 0; //Check if the array is empty to avoid division by zero
  }
  for (let number of numbers) {
    //// Iterate over the array and get the sum
    sum += number;
  }
  let average = sum / numbers.length; // get the average
  return average;
}
console.log(getAverage([10, 20, 30, 40])); // Expected Output: 25
console.log(getAverage([5, 15, 25])); // Expected Output: 15
console.log(getAverage([])); // Expected Output: 0

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function isAverageGreater(arr1, arr2) {
  const average = (arr) => arr.reduce((sum, num) => sum + num, 0) / arr.length; //callback function
  return average(arr1) > average(arr2);
}
const array1 = [6, 7, 8, 9, 10];
const array2 = [1, 2, 3, 4, 5];
console.log(isAverageGreater(array1, array2)); //Expected output: True

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
  // Return true if it is hot outside and money in pocket is greater than 10.50
  return isHotOutside && moneyInPocket > 10.5;
}
console.log(willBuyDrink(true, 15)); // Output: true
console.log(willBuyDrink(true, 10)); // Output: false
console.log(willBuyDrink(false, 15)); // Output: false
console.log(willBuyDrink(false, 5)); // Output: false

//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
/**
 Funtion checks if a given number is even.
 * This function returns true if the number is even and false if not.
 *
 * @param {number} num - The number to check.
 * @return {boolean} - Returns true if the number is even, false otherwise.
 */
function isEven(num) {
  return num % 2 === 0;
}

// Example, print to console
const exampleNumber = 4;
console.log(isEven(exampleNumber)); // Expected output: true

// Create two variables called width and height.
// Each of those variables should hold some number.
// Then, create a new variable that holds the area of a rectangle, calculated based on the width and height variables.
// Print it to the console.

const width = 9;
const height = 3;

const rectangleArea = width * height;

console.log(rectangleArea);

// Create two variables called firstNumber and secondNumber.
// Assign each of them with a different number.
// Write a program that swaps both values.

let firstNumber = 5;
let secondNumber = 10;

const temporaryNumber = firstNumber

firstNumber = secondNumber;
secondNumber = temporaryNumber;

console.log(firstNumber);
console.log(secondNumber);

// Create variables that hold grades from three different classes:
//     Physics
//     Math
//     English
// Calculate the average of the grades.
// If the average equals 4 out of 5 or higher, print "Good job!".
// Otherwise, print "Try harder!"

let gradePhysic = 4;
let gradeMath = 4;
let gradeEnglish = 4;

averageGrades = (gradePhysic + gradeMath + gradeEnglish) / 3;
if (averageGrades >= 4) {
    console.log('Good job!');
} else {
    console.log('Try harder!');
}

// Fix the code:

const currentAge = 30;
const retirementAgeInPoland = 67;

yearsLeftToRetirenment = retirementAgeInPoland - currentAge;

alert(yearsLeftToRetirenment);

// Fix the code (2 mistakes):
// the expected result of the above code: tax to pay: 1225

const isPayingVAT = true;
let VATRateInPoland = 0.23;
const incomeTaxRate = 0.12;
let monthlyIncome = 3500;

if (isPayingVAT) {
    taxToPay = monthlyIncome * VATRateInPoland;
}

taxToPay = taxToPay + monthlyIncome * incomeTaxRate;

alert(`tax to pay: ${taxToPay}`);

// Declare a variable called isSunny and assign a boolean value to it.
// Create an if-else statement that checks if it's sunny. If it is, print "Don't forget your sunglasses!".
// If it's not, print "You might need an umbrella."

const isSunny = true;

if (isSunny === true) {
    console.log("Don't forget your sunglasses!");
} else {
    console.log("You might need an umbrella.");
}

// Create a variable named currentMonth and assign a number representing the current month.
// Use an if statement to check the month and print a message based on the season (e.g., "It's winter" for December, January, and February).

let currentMonth = 11;

if (currentMonth === 12 || currentMonth === 1 || currentMonth === 2) {
    console.log("It's winter");
} else if (currentMonth === 3 || currentMonth === 4 || currentMonth === 5) {
    console.log("It's spring");
} else if (currentMonth === 6 || currentMonth === 7 || currentMonth === 8) {
    console.log("It's summer");
} else if(currentMonth === 9 || currentMonth === 10 || currentMonth === 11) {
    console.log("Its autumn");
}

// Create two variables personWeight and personHeight  and assign some numbers there.
// Calculate the BMI (and store it in well-named variable) using the formula BMI = weight / (height * height).
// Print the calculated BMI.

let personWeight = 80
let personHeight = 1.80

calculateBMI = personWeight / (personHeight * personHeight);

console.log(calculateBMI);

// Write a program that checks if a person is eligible to vote.
// Declare a variable called age and assign it a numeric value.
// Use an if-else statement to determine if the person can vote (age >= 18) and print (using console.log() ) the result:
// a citizen can vote  if the age is at least 18
// a citizen can't vote if the age is less than 18

const age = 17;

if (age >= 18) {
    console.log("A citizen can vote");
} else if (age < 18) {
    console.log("A citizen can't vote");
}
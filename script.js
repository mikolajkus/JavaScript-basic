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

const gradePhysic = 4;
const gradeMath = 4;
const gradeEnglish = 4;

const averageGrades = (gradePhysic + gradeMath + gradeEnglish) / 3;
if (averageGrades >= 4) {
    console.log('Good job!');
} else {
    console.log('Try harder!');
}

// Fix the code:

const currentAge = 30;
const retirementAgeInPoland = 67;

const yearsLeftToRetirement = retirementAgeInPoland - currentAge;

alert(yearsLeftToRetirement);

// Fix the code (2 mistakes):
// the expected result of the above code: tax to pay: 1225

const isPayingVAT = true;
const VATRateInPoland = 0.23;
const incomeTaxRate = 0.12;
const monthlyIncome = 3500;
let taxToPay = 0;

if (isPayingVAT) {
    taxToPay = monthlyIncome * VATRateInPoland;
}

taxToPay = taxToPay + monthlyIncome * incomeTaxRate;

alert('tax to pay: ' + taxToPay);

// Declare a variable called isSunny and assign a boolean value to it.
// Create an if-else statement that checks if it's sunny. If it is, print "Don't forget your sunglasses!".
// If it's not, print "You might need an umbrella."

const isSunny = true;

if (isSunny === true) {
    console.log('Do not forget your sunglasses!');
} else {
    console.log('You might need an umbrella.');
}

// Create a variable named currentMonth and assign a number representing the current month.
// Use an if statement to check the month and print a message based on the season (e.g., "It's winter" for December, January, and February).

const currentMonth = 11;

if (currentMonth === 12 || currentMonth === 1 || currentMonth === 2) {
    console.log('It is winter');
} else if (currentMonth === 3 || currentMonth === 4 || currentMonth === 5) {
    console.log('It is spring');
} else if (currentMonth === 6 || currentMonth === 7 || currentMonth === 8) {
    console.log('It is summer');
} else if (currentMonth === 9 || currentMonth === 10 || currentMonth === 11) {
    console.log('It is autumn');
}

// Create two variables personWeight and personHeight  and assign some numbers there.
// Calculate the BMI (and store it in well-named variable) using the formula BMI = weight / (height * height).
// Print the calculated BMI.

const personWeight = 80
const personHeight = 1.80

const calculateBMI = personWeight / (personHeight * personHeight);

console.log(calculateBMI);

// Write a program that checks if a person is eligible to vote.
// Declare a variable called age and assign it a numeric value.
// Use an if-else statement to determine if the person can vote (age >= 18) and print (using console.log() ) the result:
// a citizen can vote  if the age is at least 18
// a citizen can't vote if the age is less than 18

const age = 17;

if (age >= 18) {
    console.log('A citizen can vote');
} else if (age < 18) {
    console.log('A citizen can not vote');
}

// Write a code that simulates a traffic light.
// Declare a variable called currentColor with values "red", "yellow", or "green".
// Use an if statement to print a message based on the current color (e.g., "Stop" for red, "Speed up" for yellow, "Go" for green).

const currentColor = 'yellow';

if (currentColor === ('red')) {
    console.log('Stop');
} else if (currentColor === ('yellow')) {
    console.log('Speed up');
} else if (currentColor === ('green')) {
    console.log('Go');
}

// Declare a variable called month with the number of the month.
// Use an if statement to print the month's name.

const month = 5;

if (month === 1) {
    console.log('January');
} else if (month === 2) {
    console.log('February');
} else if (month === 3) {
    console.log('March');
} else if (month === 4) {
    console.log('April');
} else if (month === 5) {
    console.log('May');
} else if (month === 6) {
    console.log('June');
} else if (month === 7) {
    console.log('July');
} else if (month === 8) {
    console.log('August');
} else if (month === 9) {
    console.log('September');
} else if (month === 10) {
    console.log('October');
} else if (month === 11) {
    console.log('November');
} else if (month === 12) {
    console.log('December');
}

// Declare a variable and assign a number to it.
// Print "Divisible by 3" if the variable is divisible by 3.
// Print "Divisible by 5" if the variable is divisible by 5.
// Print "Divisible by 3 and 5" if the variable is divisible both by 3 and by 5.

const number = 15;

if (number % 3 === 0 && number % 5 === 0) {
    console.log('Divisible by 3 and 5');
} else if (number % 5 === 0) {
    console.log('Divisible by 5');
} else if (number % 3 === 0) {
    console.log('Divisible by 3');
}





// ================================
// JS Tutorial - Optimized Version
// ================================

// Utility function for printing section headers
function logSection(title) {
    console.log(`\n=== ${title} ===\n`);
};

// ================================
// Exercise 1: Variable Creation
// ================================
logSection("Exercise 1. Variable Creation");

let fruit = 'apple';
let box = 'banana';
console.log("Initial values:", fruit, box);

box = 'tomato';
console.log("Updated box:", box);

// ================================
// Exercise 2: Data Types - String
// ================================
logSection("Exercise 2. Data Types - String");

let str1 = "Hello World";
let str2 = 'Nice to meet you';
let str3 = "She's a girl";
console.log("Combined strings:", str1, str2, str3);

// ================================
// Exercise 3: Data Types - Number
// ================================
logSection("Exercise 3. Data Types - Number");

let num1 = 10;
let num2 = 3.14;
console.log("Sum of numbers:", num1 + num2);

// Additional info: string + number
logSection("Additional info: string + number");
num2 = "3.14"; // now a string
console.log("String + number:", num1 + num2); // will concatenate

// ================================
// Exercise 4: Data Types - Function
// ================================
logSection("Exercise 4. Data Types - Function");

// Function expression
let sum = function(a, b) {
    return a + b;
};
console.log("Function expression sum:", sum(10, 20));

// Arrow function
const sums = (a, b) => a + b;
console.log("Arrow function sum:", sums(20, 10));

// ================================
// Exercise 5: Data Types - Arrays
// ================================
logSection("Exercise 5. Data Types - Arrays");

let fruits = ["Apple", "Banana"];
console.log("Initial array:", fruits, "First element:", fruits[0]);

fruits.unshift("Nanas"); // add to beginning
fruits.push("Durian");   // add to end
console.log("After unshift/push:", fruits);

fruits.shift(); // remove first
fruits.pop();   // remove last
console.log("After shift/pop:", fruits);

fruits[1] = "Melinjo"; // replace second element
console.log("After replacement:", fruits);

// ================================
// Exercise 6: Data Types - Object
// ================================
logSection("Exercise 6. Data Types - Object");

let student = {
    name: "Elice",
    age: 20,
    skills: ['Java', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    sum: function(a, b) { return a + b; }
};

console.log("Student name:", student.name);

student.name = 'Park';
console.log("Updated name (dot notation):", student.name);

student['name'] = 'Jisung';
console.log("Updated name (bracket notation):", student.name);

console.log("Sum using student method:", student.sum(10, 29));

// ================================
// Exercise 7: Data Types - Undefined, Null
// ================================
logSection("Exercise 7. Data Types - Undefined, Null");

let string1;
let empty = null;
console.log("Undefined variable:", string1);
console.log("Null variable:", empty);

// ================================
// Exercise 8: Data Types - Boolean
// ================================
logSection("Exercise 8. Data Types - Boolean");

let t = true;
let f = false;
console.log("Boolean values:", t, f);

// ================================
// Exercise 9: Properties and Methods - Strings
// ================================
logSection("Exercise 9. Properties and Methods - Strings");

let strs1 = "Hi! Elice";
console.log("strs1 length:", strs1.length);
console.log("strs1 charAt(1):", strs1.charAt(1));
console.log("strs1 split('!'):", strs1.split("!"));

let strs2 = "Hello World";
console.log("strs2 length:", strs2.length);
console.log("strs2 charAt(0):", strs2.charAt(0));
console.log("strs2 split(' '):", strs2.split(" "));

// ================================
// Exercise 10: Properties and Methods - Arrays
// ================================
logSection("Exercise 10. Properties and Methods - Arrays");

let fruitArray = ["Apple", "Banana", "Tomato"];
console.log("fruitArray length:", fruitArray.length);

// add the data 'A' to the end of fruitArray:
fruitArray.push("A")
console.log("add the data 'A' to the end of fruitArray:", fruitArray);

// add the data 'B' to the start of fruitArray:
fruitArray.unshift("B")
console.log("add the data 'B' to the start of fruitArray:", fruitArray);

// remove the data in the last index of fruitArray:
fruitArray.pop()
console.log("remove the data in the last index of fruitArray:", fruitArray);

// remove the data in the first index of fruitArray:
fruitArray.shift()
console.log("remove the data in the first index of fruitArray:", fruitArray);

// ================================
// Exercise 11: Properties and Methods - Math
// ================================
logSection("Exercise 11. Properties and Methods - Math");

// Math.abs()
console.log("Absolute values of -3: ", Math.abs(-3));

// Math.ceil()
console.log("Ceiling values of 0.3: ", Math.ceil(0.3));

// Math.floor()
console.log("Floor values of 10.9: ", Math.floor(10.9));

// Math.random()
console.log("Random values: ", Math.random());

// ================================
// Exercise 12: Properties and Methods - Method to Convert String to Number
// ================================
logSection("Exercise 11. Properties and Methods - Method to Convert String to Number");

// Convert string to Int
let strNum = "20.14";
let intNum = parseInt(strNum);
console.log("'20.14' Parsed to Int: ", intNum);

// Convert string to Float
let fltNum = parseFloat(strNum);
console.log("'20.14' Parsed to Float: ", fltNum);

// ================================
// Mission 1: Create a Function to Calculate the Area of a Triangle
// ================================
logSection("Mission 1: Create a Function to Calculate the Area of a Triangle");

// Define the function
let triangleArea = (base, height) => {
    return (base * height) / 2;
};

// Print it on console
console.log("The area of a Triangle with base of 5cm and height of 7cm is: ", triangleArea(5, 7))

// ================================
// Mission 2: Accessing Data in an Array of Arrays
// ================================
logSection("Mission 2: Accessing Data in an Array of Arrays");

// Define Array of Arrays
let arrTest = [
    [100, 200, 300],
    [1000, 2000, 3000],
    [1111, 2222, 3333]
]

// Access the array, and find the value 3000!
console.log("The location of " + arrTest[1][2] + " value is located on arrTest[1][2]");
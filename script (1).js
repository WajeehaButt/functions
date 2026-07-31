/*=========================================================
TechTide Summer Internship 2026
Week 4 – Day 3
JavaScript Functions Assignment

Student Name : Wajeeha Butt
=========================================================*/

console.clear();

console.log("========================================");
console.log("JAVASCRIPT FUNCTIONS ASSIGNMENT");
console.log("Student : Wajeeha Butt");
console.log("========================================\n");


/*=========================================================
Task 1
Greeting Function
=========================================================*/

function welcomeUser(userName) {
    console.log(`Welcome ${userName}! We are glad to have you at TechTide Corporation.`);
}

console.log("TASK 1 : Greeting Function");

welcomeUser("Salman");
welcomeUser("Wajeeha");
welcomeUser("Ahmed");

console.log("\n");


/*=========================================================
Task 2
Calculator Functions
=========================================================*/

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {

    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
}

let firstValue = 55;
let secondValue = 11;

console.log("TASK 2 : Calculator");

console.log(`Addition       : ${addition(firstValue, secondValue)}`);
console.log(`Subtraction    : ${subtraction(firstValue, secondValue)}`);
console.log(`Multiplication : ${multiplication(firstValue, secondValue)}`);
console.log(`Division       : ${division(firstValue, secondValue)}`);

console.log("\n");


/*=========================================================
Task 3
Even / Odd Checker
=========================================================*/

const evenOdd = (value) => {

    return value % 2 === 0
        ? `${value} is Even`
        : `${value} is Odd`;

};

console.log("TASK 3 : Even / Odd Checker");

console.log(evenOdd(25));
console.log(evenOdd(48));
console.log(evenOdd(73));
console.log(evenOdd(100));

console.log("\n");
/*=========================================================
Task 4
Grade Calculator
=========================================================*/

const findGrade = function (marks) {

    if (marks < 0 || marks > 100) {
        return "Invalid Marks";
    }

    switch (true) {

        case (marks >= 90):
            return "Grade A";

        case (marks >= 80):
            return "Grade B";

        case (marks >= 70):
            return "Grade C";

        case (marks >= 60):
            return "Grade D";

        default:
            return "Grade F";
    }

};

console.log("TASK 4 : Grade Calculator");

let studentMarks = 91;

console.log(`Marks Obtained : ${studentMarks}`);
console.log(`Result Grade   : ${findGrade(studentMarks)}`);

console.log("--------------------------------------");

console.log(`76 Marks : ${findGrade(76)}`);
console.log(`65 Marks : ${findGrade(65)}`);
console.log(`48 Marks : ${findGrade(48)}`);

console.log("\n");


/*=========================================================
Task 5
Largest Number
=========================================================*/

function largestValue(num1, num2, num3) {

    if (num1 >= num2 && num1 >= num3) {
        return num1;
    }

    if (num2 >= num1 && num2 >= num3) {
        return num2;
    }

    return num3;

}

console.log("TASK 5 : Largest Number");

let first = 145;
let second = 92;
let third = 201;

console.log(`Numbers : ${first}, ${second}, ${third}`);
console.log(`Largest : ${largestValue(first, second, third)}`);

console.log("\n");


/*=========================================================
Task 6
Factorial Function
=========================================================*/

function getFactorial(number) {

    if (number < 0) {
        return "Invalid Number";
    }

    if (number === 0 || number === 1) {
        return 1;
    }

    let answer = 1;

    for (let count = number; count >= 1; count--) {
        answer *= count;
    }

    return answer;

}

console.log("TASK 6 : Factorial Function");

console.log(`4! = ${getFactorial(4)}`);
console.log(`6! = ${getFactorial(6)}`);
console.log(`8! = ${getFactorial(8)}`);

console.log("\n");
/*=========================================================
Task 7
Temperature Converter
=========================================================*/

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log("TASK 7 : Temperature Converter");

let cityTemperature = 22;
let roomTemperature = 86;

console.log(`${cityTemperature}°C = ${toFahrenheit(cityTemperature).toFixed(1)}°F`);
console.log(`${roomTemperature}°F = ${toCelsius(roomTemperature).toFixed(1)}°C`);

console.log("\n");


/*=========================================================
Task 8
Student Result System
=========================================================*/

function total(subjectOne, subjectTwo, subjectThree) {
    return subjectOne + subjectTwo + subjectThree;
}

function percentage(obtainedMarks, totalMarks) {
    return (obtainedMarks / totalMarks) * 100;
}

function grade(percentageValue) {

    switch (true) {

        case (percentageValue >= 90):
            return "A";

        case (percentageValue >= 80):
            return "B";

        case (percentageValue >= 70):
            return "C";

        case (percentageValue >= 60):
            return "D";

        default:
            return "F";
    }

}

const status = (percentageValue) =>
    percentageValue >= 60 ? "PASS" : "FAIL";


function printResult(studentName, english, mathematics, computer) {

    const maximumMarks = 300;

    const obtainedMarks = total(
        english,
        mathematics,
        computer
    );

    const finalPercentage = percentage(
        obtainedMarks,
        maximumMarks
    );

    console.log("======================================");
    console.log("          STUDENT REPORT");
    console.log("======================================");

    console.log(`Student Name : ${studentName}`);

    console.log("--------------------------------------");

    console.log(`English      : ${english}`);
    console.log(`Mathematics  : ${mathematics}`);
    console.log(`Computer     : ${computer}`);

    console.log("--------------------------------------");

    console.log(`Obtained     : ${obtainedMarks}/${maximumMarks}`);
    console.log(`Percentage   : ${finalPercentage.toFixed(2)}%`);
    console.log(`Grade        : ${grade(finalPercentage)}`);
    console.log(`Status       : ${status(finalPercentage)}`);

    console.log("======================================\n");

}

console.log("TASK 8 : Student Result System");

printResult(
    "Wajeeha Butt",
    94,
    90,
    96
);

printResult(
    "Areeba Fatima",
    72,
    69,
    75
);
/*=========================================================
Bonus Challenge
Simple Banking System
=========================================================*/

let availableBalance = 10000;

// Show Current Balance
function showBalance() {
    console.log(`Available Balance : Rs. ${availableBalance}`);
}

// Deposit Money
function addMoney(amount) {

    if (amount <= 0) {
        console.log("Deposit Failed! Please enter a valid amount.\n");
        return;
    }

    availableBalance += amount;

    console.log(`Deposit Successful : Rs. ${amount}`);
    showBalance();
    console.log("--------------------------------------");
}

// Withdraw Money
function removeMoney(amount) {

    if (amount <= 0) {
        console.log("Withdrawal Failed! Invalid amount.\n");
        return;
    }

    if (amount > availableBalance) {
        console.log("Transaction Declined! Insufficient funds.");
        showBalance();
        console.log("--------------------------------------");
        return;
    }

    availableBalance -= amount;

    console.log(`Withdrawal Successful : Rs. ${amount}`);
    showBalance();
    console.log("--------------------------------------");
}

// Mini Statement
function miniStatement() {

    console.log("\n========== MINI STATEMENT ==========");
    showBalance();
    console.log("Account Status : Active");
    console.log("====================================\n");

}

console.log("BONUS TASK : SIMPLE BANKING SYSTEM\n");

showBalance();

console.log("--------------------------------------");

addMoney(3000);

removeMoney(2500);

addMoney(1500);

removeMoney(8000);

removeMoney(5000);

miniStatement();


/*=========================================================
Assignment Summary
=========================================================*/

console.log("==============================================");
console.log("     JAVASCRIPT FUNCTIONS ASSIGNMENT");
console.log("==============================================");
console.log("Student Name : Wajeeha Butt");
console.log("Internship   : TechTide Summer Internship 2026");
console.log("----------------------------------------------");
console.log("Completed Tasks");
console.log("----------------------------------------------");
console.log("✓ Greeting Function");
console.log("✓ Calculator Functions");
console.log("✓ Even / Odd Checker");
console.log("✓ Grade Calculator");
console.log("✓ Largest Number");
console.log("✓ Factorial Function");
console.log("✓ Temperature Converter");
console.log("✓ Student Result System");
console.log("✓ Banking System (Bonus)");
console.log("----------------------------------------------");
console.log("Status : Assignment Completed Successfully");
console.log("==============================================");
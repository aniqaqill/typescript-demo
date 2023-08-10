"use strict";
// declare variable
let nama;
nama = "aniq";
let namaBesar = nama.toUpperCase();
console.log(nama);
console.log(namaBesar);
let age;
age = 20;
let umur = age + 10;
console.log(age);
console.log(umur);
let text = "10";
let text2number = parseInt(text);
console.log(text);
let isValid;
isValid = true;
console.log(isValid);
//two ways to declare array
let emptylist;
emptylist = ["aniq", "budi", "caca"];
let numList;
numList = [1, 2, 3, 4, 5];
console.log(emptylist);
console.log(numList);
//filter array with arrow function
let result = numList.filter((num) => num > 2);
console.log(result);
//find array with arrow function
let result2 = emptylist.find((nama) => nama === "aniq");
console.log(result2);
//reduce function
//calculate sum of array
//examples you have product price in array and you want to calculate total price
let result3 = numList.reduce((total, num) => total + num);
console.log(result3);
let c = 1 /* Color.Green */;
console.log(c);
//tuple
//tuple is a way to declare array with fixed length and fixed type
//is use to return multiple value from function
let swapNumber;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumber = swapNumbers(10, 20);
swapNumber[0];
swapNumber[1];
//any
//any is a way to declare variable with any type
//it is not recommended to use any
let department;
department = "IT";
department = 10;
//void
//void is a way to declare function that not return anything

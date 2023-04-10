"use strict";
//way to write functions
//1. 
function add(a, b) {
    return a + b;
}
//kalau takde return type, dia akan return void
let tambah = add(10, 20);
console.log(tambah);
console.log(add(20, 20));
//add three number if c is not provided
//optional parameter
function add3(a, b, c) {
    return c ? a + b + c : a + b;
}
//2.
const sub = (num1, num2) => num1 - num2;
console.log(sub(10, 20));
//3.
const mul = function (num1, num2) {
    return num1 * num2;
};
console.log(mul(10, 20));
//rest parameter
//rest parameter is a way to declare function with variable number of parameters
//rest parameter must be the last parameter
function add4(a, b, ...c) {
    let total = a + b;
    c.forEach((num) => {
        total += num;
    });
    return total;
}
console.log(add4(10, 20, 30, 40, 50));
//or
function add5(a, b, ...c) {
    return a + b + c.reduce((total, num) => total + num);
}
let numbers = [10, 20, 30, 40, 50];
console.log(add5(10, 20, ...numbers));
//generic function
//generic function is a way to declare function with generic type
function getItems(items) {
    return new Array().concat(items);
}
let numArray = getItems([1, 2, 3, 4, 5]);
let strArray = getItems(["aniq", "budi", "caca"]);
//dia declare sekali dgn type 

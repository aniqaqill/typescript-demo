"use strict";
exports.__esModule = true;
var _a = { name: "John", age: 25, id: 1, email: "  " }, userName = _a.name, userLogin = _a.email;
var employee2 = { name: "John", age: 25, id: 1, email: "  ", salary: 1000 };
// let users : User[] = [
//     { name: "John", age: 25, id: 1, email: "  " },
//     { name: "Jane", age: 25, id: 2, email: "  " },
//     { name: "Bob", age: 25, id: 3, email: "  " },
// ];
// console.log(users[0].name)
// console.log(users[1].name)
var _b = [
    { name: "John", age: 25, id: 1, email: "  " },
    { name: "Jane", age: 25, id: 2, email: "  " },
    { name: "Bob", age: 25, id: 3, email: "  " },
    { name: "Aniq", age: 20, id: 4, email: "  " }
], user1 = _b[0], user2 = _b[1], restUsers = _b.slice(2);
console.log(user1.name);
console.log(user2.name);
console.log(restUsers);

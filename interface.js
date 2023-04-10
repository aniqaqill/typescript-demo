"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let { name: userName, email: userLogin } = { name: "John", age: 25, id: 1, email: "  " };
let employee2 = { name: "John", age: 25, id: 1, email: "  ", salary: 1000 };
// let users : User[] = [
//     { name: "John", age: 25, id: 1, email: "  " },
//     { name: "Jane", age: 25, id: 2, email: "  " },
//     { name: "Bob", age: 25, id: 3, email: "  " },
// ];
// console.log(users[0].name)
// console.log(users[1].name)
let [user1, user2, ...restUsers] = [
    { name: "John", age: 25, id: 1, email: "  " },
    { name: "Jane", age: 25, id: 2, email: "  " },
    { name: "Bob", age: 25, id: 3, email: "  " },
    { name: "Aniq", age: 20, id: 4, email: "  " }
];
console.log(user1.name);
console.log(user2.name);
console.log(restUsers);

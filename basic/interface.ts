export interface User {
    name: string;
    age: number;
    id : number;
    email : string;
}

let {name:userName ,email:userLogin } : User = { name: "John", age: 25, id: 1, email: "  " };    

interface Employee extends User {
    salary: number;
}

let employee2 : Employee = { name: "John", age: 25, id: 1, email: "  ", salary: 1000 };

export interface login {
    login():User;
}

// let users : User[] = [
//     { name: "John", age: 25, id: 1, email: "  " },
//     { name: "Jane", age: 25, id: 2, email: "  " },
//     { name: "Bob", age: 25, id: 3, email: "  " },
// ];

// console.log(users[0].name)
// console.log(users[1].name)


let [user1,user2,...restUsers] : User[]= [
    { name: "John", age: 25, id: 1, email: "  " },
    { name: "Jane", age: 25, id: 2, email: "  " },
    { name: "Bob", age: 25, id: 3, email: "  " },
    {name : "Aniq",age : 20,id : 4,email : "  "}
];

console.log(user1.name)
console.log(user2.name)
console.log(restUsers)
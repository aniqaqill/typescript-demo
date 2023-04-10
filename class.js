"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getNamewithAge() {
        return `${this.name} is ${this.age} years old`;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
let person1 = new Person("Aniq", 20);
person1.greet();
class employee {
    constructor(id, name, adress) {
        _employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _employee_id, id, "f");
        this.name = name;
        this.adress = adress;
    }
    set empId(id) {
        __classPrivateFieldSet(this, _employee_id, id, "f");
    }
    get empId() {
        return __classPrivateFieldSet(this, _employee_id, __classPrivateFieldGet(this, _employee_id, "f"), "f");
    }
    getNamewithAdress() {
        return `${this.name} stays at ${this.adress}`;
    }
}
_employee_id = new WeakMap();
let emp1 = new employee(1, "Aniq", "Jalan 1");
let emp2 = new employee(2, "Aniq", "Jalan 2");
emp1.empId = 3;
console.log(emp1);
console.log(emp2.getNamewithAdress());
console.log(emp1.empId);
//multiple constructor in class is not allowed
//inheritance
//inheritance is a way to extend a class
class Programmer extends Person {
    constructor(name, age) {
        super(name, age);
    }
    greet() {
        console.log(`Hello ${this.name} from Programmer class`);
    }
}
let prog1 = new Programmer("Aniq", 20);
prog1.greet();
console.log(prog1.getNamewithAge());
//abstract class
// login():User{
//     return { name: "John", age: 25, id: 1, email: "  " };
// }

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getNamewithAge = function () {
        return "".concat(this.name, " is ").concat(this.age, " years old");
    };
    Person.prototype.greet = function () {
        console.log("Hello ".concat(this.name));
    };
    return Person;
}());
var person1 = new Person("Aniq", 20);
person1.greet();
var employee = /** @class */ (function () {
    function employee(id, name, adress) {
        _employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _employee_id, id, "f");
        this.name = name;
        this.adress = adress;
    }
    Object.defineProperty(employee.prototype, "empId", {
        get: function () {
            return __classPrivateFieldSet(this, _employee_id, __classPrivateFieldGet(this, _employee_id, "f"), "f");
        },
        set: function (id) {
            __classPrivateFieldSet(this, _employee_id, id, "f");
        },
        enumerable: false,
        configurable: true
    });
    employee.prototype.getNamewithAdress = function () {
        return "".concat(this.name, " stays at ").concat(this.adress);
    };
    return employee;
}());
_employee_id = new WeakMap();
var emp1 = new employee(1, "Aniq", "Jalan 1");
var emp2 = new employee(2, "Aniq", "Jalan 2");
emp1.empId = 3;
console.log(emp1);
console.log(emp2.getNamewithAdress());
console.log(emp1.empId);
//multiple constructor in class is not allowed
//inheritance
//inheritance is a way to extend a class
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(name, age) {
        return _super.call(this, name, age) || this;
    }
    Programmer.prototype.greet = function () {
        console.log("Hello ".concat(this.name, " from Programmer class"));
    };
    return Programmer;
}(Person));
var prog1 = new Programmer("Aniq", 20);
prog1.greet();
console.log(prog1.getNamewithAge());
//abstract class
// login():User{
//     return { name: "John", age: 25, id: 1, email: "  " };
// }

//class
//class is a way to declare object with properties and methods
import { User,login } from "./interface";

class Person{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }

    getNamewithAge(){
        return `${this.name} is ${this.age} years old`
    }
    greet(){
        console.log(`Hello ${this.name}`)
        
    }
}

let person1 = new Person("Aniq",20)
person1.greet()

class employee {
    #id!:number
    protected name!:string
    adress!:string

    constructor(id:number,name:string,adress:string){
        this.#id = id
        this.name = name
        this.adress = adress
    }

    set empId(id:number){
        this.#id = id
    }

    get empId(){
        return this.#id = this.#id;
    }

    getNamewithAdress(){
        return `${this.name} stays at ${this.adress}`
    }

}

let emp1 = new employee(1,"Aniq","Jalan 1")
let emp2 = new employee(2,"Aniq","Jalan 2")
emp1.empId = 3

console.log(emp1)
console.log(emp2.getNamewithAdress())
console.log(emp1.empId)

//multiple constructor in class is not allowed

//inheritance
//inheritance is a way to extend a class
class Programmer extends Person{
    constructor(name:string,age:number){
        super(name,age)
    }
    greet(){
        console.log(`Hello ${this.name} from Programmer class`)
    }
}

let prog1 = new Programmer("Aniq",20)
prog1.greet()
console.log(prog1.getNamewithAge())

//abstract class

// login():User{
//     return { name: "John", age: 25, id: 1, email: "  " };

// }

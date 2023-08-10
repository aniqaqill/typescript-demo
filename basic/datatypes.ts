
// declare variable
let nama:string
nama = "aniq"
let namaBesar = nama.toUpperCase()
console.log(nama)
console.log(namaBesar)
let age:number
age = 20
let umur = age + 10
console.log(age)
console.log(umur)
let text ="10"
let text2number = parseInt(text)
console.log(text)

let isValid : boolean

isValid = true
console.log(isValid)

//two ways to declare array
let emptylist :string[];
emptylist = ["aniq","budi","caca"]

let numList : Array<number>
numList = [1,2,3,4,5]

console.log(emptylist)
console.log(numList)

//filter array with arrow function
let result = numList.filter((num)=>num>2)
console.log(result)

//find array with arrow function
let result2 = emptylist.find((nama)=>nama === "aniq");

console.log(result2)

//reduce function
//calculate sum of array
//examples you have product price in array and you want to calculate total price
let result3 = numList.reduce((total,num)=>total+num)
console.log(result3)


//enum
//enum is a way to give more friendly name to numeric values
const enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;
console.log(c)

//tuple
//tuple is a way to declare array with fixed length and fixed type
//is use to return multiple value from function

let swapNumber : [number,number]

function swapNumbers(num1:number,num2:number):[number,number]{
    return [num2,num1]
}
swapNumber = swapNumbers(10,20)
swapNumber[0];
swapNumber[1];

//any
//any is a way to declare variable with any type
//it is not recommended to use any
let department: any
department = "IT"
department = 10

//void
//void is a way to declare function that not return anything
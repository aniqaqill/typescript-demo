//way to write functions
//1. 
function add(a:number,b:number):number{
    return a+b
}
//kalau takde return type, dia akan return void

let tambah:number = add(10,20)
console.log(tambah)
console.log(add(20,20))

//add three number if c is not provided
//optional parameter
function add3(a:number,b:number,c?:number):number{
    return c? a+b+c : a+b
}

//2.
const sub = (num1:number,num2:number): number => num1 - num2;
console.log(sub(10,20))

//3.
const mul = function(num1:number,num2:number):number{
    return num1*num2
}
console.log(mul(10,20))

//rest parameter
//rest parameter is a way to declare function with variable number of parameters
//rest parameter must be the last parameter
function add4(a:number,b:number,...c:number[]):number{
    let total = a+b
    c.forEach((num)=>{
        total+=num
    })
    return total
}

console.log(add4(10,20,30,40,50))

//or

function add5(a:number,b:number,...c:number[]):number{
    return a+b+c.reduce((total,num)=>total+num)
}
let numbers = [10,20,30,40,50]
console.log(add5(10,20,...numbers))

//generic function
//generic function is a way to declare function with generic type
function getItems<Type>(items:Type[]):Type[]{
    return new Array<Type>().concat(items)
}

let numArray = getItems<number>([1,2,3,4,5])
let strArray = getItems<string>(["aniq","budi","caca"])
//dia declare sekali dgn type 



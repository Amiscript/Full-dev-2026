// variables
//let - store data temporarly
//const - store data permeantly
// var

//syntax rule variable 


// hoisting


let firstName = "Emmanuel"
// console.log(firstName)
// re-assignment
firstName = "joel"
console.log(firstName)


const lastName = "Java"
// lastName = "javascript" - do not re-assign
console.log(lastName)


// naming of variables


//pascal- 
//  FirstName 


//snake
// Student_name 


// camel case 
// studentName

// UpperCase
// STUDENT_NAME


// Data types 
// categories- primitive data and the  non-primitive data

// primitive
// Numbers and Maths 

// int -  2345
// float - 3.5

 let a = 3
 let b = 4

// console.log(a + b) // 7

//1.  Arithemtic operator
// +  = add
// -  = sub
// * = multipiction
// / = division 
// ** = exponenation - 2**2 = 4
// %  = modulo = 5%2 = remainder - 1

console.log(a + b) // 7
console.log(a - b) // -1
console.log(a * b) // 12
console.log(a / b) // 0.75
console.log(a ** b) // 81
console.log(b % a) // 1


// BODMAS
// Bracket---
// division 
// Mult
// Add
// sub

const sum = 2 + 2 -3 * 4 / 2  + ( 2 + 3)
console.log(sum)


// Math method - in built functions  for mathemical problems

// 2. assignment operator equal to sign (=)

const num = 6.1
const num2  = -5

const max = [1, 3 , 4]
let  ceil  = Math.ceil(num) // 7
 let ran = Math.random() * 4 // 0-1 0.1 
let round = Math.round(num) // 6
let floor = Math.floor(num) // 6
let trunc = Math.trunc(num) // 6
let abs = Math.abs(num2) // 5
let maxi =Math.max(max) // 4
let mini = Math.min(max) // 1
let pow = Math.pow(2, 3) // 8
let sq =Math.sqrt(16)  // 4
let pi = Math.PI
let e = Math.E

console.log(e)

const toNumber = "12"
const floatNumber = "1.2"
const mix = "12px"
// conversion methods
// Number()-
//parseInt-
// parseFloat -

// typeof --

const convert = Number(toNumber)
const parse = parseInt(toNumber)
const float =Math.ceil( parseFloat(floatNumber))
console.log(Math.random() * float)

// console.log( Number(mix))
console.log(parseInt(mix))







// console.log(typeof toNumber) // type of data types


 
// String - primitive value or data use to present text
 // string literals

//"" double quote
const strD =  "Joel"
const strD2 = "  i'm Joel "
console.log(strD2)

// '' single quote

const strS = 'Emmanuel'

const strS2 = ' "this is  the point " '
console.log(strS2)
// ` `backticks- template literals or string 

const strB = `Me  "Double  ", 'single'`
const strB2  = `This is ${strD}, This is ${strS}`
const strB3 = ` 2 + 2 = ${2 + 2 }`

console.log(strB3)














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
     // 0 -E m-1 m-2 a- 3 l-7 indexing  -1-L -2-e n-(-3)

const strS2 = ' "this is  the point " '
console.log(strS2)
// ` `backticks- template literals or string 

const strB = `Me  "Double  ", 'single'`
const strB2  = `This is ${strD}, This is ${strS}`
const strB3 = ` 2 + 2 = ${2 + 2 }`

console.log(strB3)

// Strings Methods
// length- total characters or letter in a string or text
const len = strS.length
console.log(` the total lenght of this is ${len} `)
 
const upper = strS.toUpperCase()

const lower = strS.toLowerCase()

const include = strS.includes("m")// true or false


const char = strS.charAt(5)


const at = strS.at(-3)

const greeting = "Hello Class"


const start = strS.startsWith("E") // true 

// splice(start, end )

const slice = greeting.slice(0, 3)
const sl= greeting.slice(3) // 
console.log(slice)


const fruits = "apple, orange, grape"

// console.log(fruits)

const split = fruits.split(",")

console.log(split)



const linus  = "   linus   "
console.log(linus)
console.log(linus.charAt(0))

const trim = linus.trim()
console.log(trim)
console.log(trim.charAt(0))






const repalce = greeting.replace("Hello", "Hi")
console.log(repalce)


const star = "8,"
const repeat = star.repeat(5)

console.log(repeat.split(","))



console.log(start)



// string conversion 

const num1 =  123
console.log(typeof num1)

// String()

console.log( typeof String(num1))



// Boolen -bprimitive data type that can only have two values
// true
//false

const isTrue = true
const isFalse = false
console.log( isTrue)
console.log( isFalse)

// truthy and falsy values

// truthy values - values that are true
// falsy values - values that are false

// falsy values - 0, -0,  "", null, undefined, NaN, false

// truthy values - 1, "not an empty string", []- array, {}- object, true,



// Operators - symbols that perform operations on values and variables


//1.  Arithemtic operator
// +  = add
// -  = sub
// * = multipiction
// / = division 
// ** = exponenation - 2**2 = 4
// %  = modulo = 5%2 = remainder - 1

// unary operator - operator that takes one operand
// ++ = increment
// let  x = x + 1 --- 
let x = 5
// x = x + 1
// x+=1
x++
console.log(x);


// -- = decrement
x--
console.log(x);

// Assignment operator - operator that assigns a value to a variable

let y = 5
y += 5 // y = y + 5

y -= 5 // y = y - 5

y *= 5 // y = y * 5

y /= 5 // y = y / 5

y %= 5 // y = y % 5

y **= 5 // y = y ** 5



// comparison operator - operator that compares two values and returns a boolean value

// ==  = equal to
// double equal to sign (==) - compare only value
console.log(2 == 2); // true

console.log(2 == "2"); // true


// === = equal value and equal type
console.log(2 === "2"); 

// !=  = not equal to
console.log(2 != 2); 
// !== = not equal value or not equal type

console.log(2 !== "2");
// >   = greater than
console.log(2 > 4 );
// <   = less than
console.log(2 < 4 );
// >=  = greater than or equal to
console.log(2 >= 2 );
// <=  = less than or equal to
console.log(2 <= 4 );


// logical operator - operator that performs logical operations on boolean values

// && = and - both values must be true for the result to be true- if both values are false, the result will be false
 console.log(4 > 2 &&  2  >  4); 

// || = or - at least one value must be true for the result to be true - if both values are false, the result will be false

 console.log(4 > 2 ||  2  >  4); 

// !  = not - reverses the boolean value of an expression
console.log(!(4 > 2));


// tenary operator - operator that takes three operands

// condition ? expression1 : expression2

// ? -(and ) if the condition is true, the expression1 will be executed

// :(or) - if the condition is false, the expression2 will be executed


// null  - a value that represents no value, intentionally your value to or variable  to empty 

const product = null
console.log(product);


// undefine -  
let item;
console.log(item);


// Symbol()



const symbol1 = " this is one"

const symbol2 = " this is one"

console.log( Symbol(symbol1) === Symbol(symbol2));


// Non- primitive data types-- contains more than on value 

// Array --  is a collection of   two or more values 

// syntax 

//1. []

// Array - string

const names = [ "Emmanuel", "joel", "linus"]
// console.log(names);
console.log(names[2]);

// Array - numbers

const numbers = [1, 2, 3, 4, 5]
// console.log(numbers);
console.log(numbers[4]);

// Array - booleans 
const bool = [true, false]
console.log(bool[1]);

// Array- object 
const object = [{name:"joel", age:100}, {gender:'male'}]
console.log(object[0].age);

// Array - nested - array of array

const nestedArray = [ 1,2, [3, 4]]
console.log(nestedArray[2][1]);


// mix Array 

const mixArray = [1 , 2 , "Emmauel", true,{name:"joel", age:100}, [ 1, "Joel"] ]

console.log(mixArray[4].age);

// Accessing an array

//index - 0





///ways to write a function
//JS is an interpreted language, read on the fly and used on the fly as needed. Unlike compiled languages

//METHOD 1
//original way - includes hoisting which means entire file is read first and all funcions are stored in memory before anything else is done. This means you can invoke before you define. Not very efficient memory wise.

// //invoke the function
// myFunc1()

// //function definition
// function myFunc1(){
//     console.log("Hello World")
// }

// //prototype attached to function when function keyword is used. Meaning you can use a functio to create an object
// //this keyword creates a new instance of a dog. Others reading code may be confused. Better to use classes to create objects
// function Dog(){
//     this.name = "Sparky"
// }
// //create new dog object by invoking the Dog function and using the new keyword
// const Sparky = new Dog()
// console.log(Sparky.name)

// METHOD #2
//asiging function to a variable, not hoisted - use of function must be after the function, but still has a prototype
// const myFunc = function(){
//     console.log('Hello Word')
// }
// //invoke
// myFunc()

//METHOD #3 - ARROW FUNCTIONS, THE STANDARD
//not hoisted, no prototype - cannot be used as a constructor
//data in parens is being passed into the instructions
// const myFunc = () => {
//     console.log('Hello World')
// }

// myFunc()

//PASSING IN DATA
//first argument assigned to first parameter, second assigned to second parameter
//can name default value in parameters
//taking in more arguments than defined in params - use rest operator. Only necessary with arrow functions
// const add = (x = 1, y = 1, ...z) =>{
//     console.log(x + y)
//     console.log(z)
// }
// // add(5,6)
// // add()
// add(4, 5, 6, 7, 8, 9)

// //aspect of prototyping is that additional arguments are saved in local variable "arguments" - obj contains all other arguments
// const addAgain = function(x = 1, y = 2){
//     console.log([...arguments])//All arguments are inside. more useful to put into array with spread operator
//     console.log(x+y)
// }

// addAgain(1, 2, 3, 4, 5, 6)

//GETTING DATA FROM FUNCTIONS - return values
//console.log logs results onto screen but it doesn't mean that you have the data to manipulate. just console.logging gives you nothing back. The way a function gives data back is by using return statements. Same for all function syntaxes.

// const add = (x = 1, y = 2) => {
//     return x + y 
// }

// const result = add(1, 2) + add(3,4)
// console.log(result)


//DESTRUCTURING IN FUNCTIONS
//destructuring the data going in

// //object destructuring, pass in the information that we want from object as params
// const person = {
//     name: 'Alex Merced',
//     age: 35
// }
// //pull out the property name and nothing else, more efficient. Looks inside the object, sees that it will need to destructure, finds a value called name and assigns it ot property called name. (name:name)
// const printName = ({name}) => {
//     console.log(name)
// }

// printName(person)

//array destructuring
// const person = ['Samantha Solomon', 35]
// //first item in array gets passed into first variable, second to second, etc. breaking down the array you pass in. Instead of passing in all different arguments, pass in an object or array that has all the different things that one needs.
// const printName = ([name = "Bob", age = 5]) => {
//     console.log(name)
// }

// printName(person)

//destructure return values
// taking the return value and destructuring when you invoke so you can access data individually

// const returnSam = () => {
//     return ["Samantha", 35]
// }
//array, first item gets assigned to first value in parameter and so on
// const [name, age] = returnSam()

// console.log(name, age)

// const returnSam = () => {
//     return {name: "Samantha", age: 35}
// }
// //object - looks for name and age value in return object, useful for getting back more than one thing
// const {name, age} = returnSam()

// console.log(name, age)

//REFERENCE VERSUS VALUE
//primitives are pass by value: numbers, strings, boolean
//collections are passed by referense: objects arrays maps sets

// let num = 5

// const changeNum = (theNum) => {
//     //num is not changed, a copy is made called theNum
//     thisNum = 6
//     console.log(thisNum)
// }
// changeNum(num)
// console.log(num)

// //when passing in an obj or array function is working with a reference in memory, so changes the object outside of the function
// let myObj = {name: "Samantha", age: 35}

// const changeName = (person) => {
//     //take the original person obj, break it apart and put inside new obj also called person - in order to not alter the original obj
//     person = {...person}
//     person.name = "Leah"
//     console.log(person)
// }
// changeName(myObj)
// console.log(myObj)

//CLOSURE
//things with the same scope can access each other

const myFunc = () => {
    let  number = 5
    //function runs and returns function
    // return () => number // no curly brakets means implied return
    return [() => number, value => number = value] //one param does not require parens, none or two or more does
}
//return gets assigned to this variable
// const getNum = myFunc()

//use array destructuring to access the functions in the returned array
const [getNum, setNum] = myFunc() 
setNum(6)

//this will return an error because number is scoped, only exists inside the function
// console.log(number)

//now you can print the value of the function
console.log(getNum())

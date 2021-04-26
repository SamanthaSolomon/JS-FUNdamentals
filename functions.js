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

const add = (x = 1, y = 2) => {
    return x + y 
}

const result = add(1, 2) + add(3,4)
console.log(result)




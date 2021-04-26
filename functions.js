///ways to write a function

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



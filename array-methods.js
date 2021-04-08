myArray = [1,2,3,4,5,6,7,8,9,10]

//join
// console.log(myArray.join)
// console.log(myArray.join(' '))
// console.log(myArray.join('-'))

// //split
// myString = "Hello World"
// console.log(myString.split())
// //seperate by parameter
// console.log(myString.split(''))
// console.log(myString.split(' '))

// //POP -end of array
// console.log(myArray.pop())
// console.log(myArray)

// //PUSH - end of array
// console.log(myArray.push(10))
// console.log(myArray)

// //Shift & Unshift - add to the beginning
// console.log(myArray.shift())
// console.log(myArray)

// console.log(myArray.unshift(1))
// console.log(myArray)

//SLICE - stops before the end parameter, return the chunk of array
// console.log(myArray.slice(4,7))
// console.log(myArray)//does not mutate original, pure function

// //splice - params are (start point, how many items)
// console.log(myArray.splice(4,3))
// console.log(myArray)//not pure, mutates the array

myArr2 = ['four', 'five', 'six']

//SOME - loops through each item to see if it is true or false, if one comes up true, then whole function returns true. SOME always takes a callback function or reg function as the parameter
// console.log(myArr2.some((value) => {
//   return value.length == 6
// }))

//FILTER - also take callback, but returns the values that are true
console.log(myArr2.filter((value)=>{
  return value.length == 4
}))

//MAP - return a new arr where you can touch each item and make a change, does not mutate. New arr
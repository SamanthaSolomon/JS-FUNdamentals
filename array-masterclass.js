// const myArr = [1, 2, 3, 4]
// const two = 2

// //index 0
// console.log(myArr[0])
// //index 2 becuase 2 is the value of two
// console.log(myArr[two])
// //index 3
// console.log(myArr[2 + 1])

//new keyword plus object keyword - Array
// const myArr = new Array(1,2,3,4)
// console.log(myArr)

//arrays can have numbers, string, nested arrays, objects, and functions in them
// const myArr = [1, 'cheese', [1,2], {name: 'alex'}, () => {console.log('i work')} ]
// console.log(myArr)
// console.log(myArr[2])
// //accessing nested or multidemnsional array
// console.log(myArr[2][0])
// //access property withing object
// console.log(myArr[3].name)
// //invoke function stored at index
// console.log(myArr[4]())



//COMBINING
// const myArr1 = [1,2]
// const myArr2 = [3,4]

// //creates nested arr in 3rd arr
// const myArr3 = [myArr1, myArr2]
// console.log(myArr3)

// //turn into sting and concatinate
// const myArr4 = myArr1 + myArr2
// console.log(myArr4)

// //combine two arr using .concat method
// const myArr5 = myArr1.concat(myArr2)
// console.log(myArr5)

// //combine using spread operator
// const myArr6 = [...myArr1, ...myArr2]
// console.log(myArr6)


// //DESTRUCTURING - break in to pieces
// const myArr1 = [1,2]
// const [one, two] = myArr1
// console.log(one, two)


//LOOP OVER ARRAYS
// const myArr = [1, 2, 3, 4]

// //for loop
// for (i = 0; i < myArr.length; i++){
//     console.log(myArr[i])
// }

// //for of loop
// for (value of myArr){
//     console.log(value)
// }
//                       //value of index  
// const loopFunction = (value, index) => {
//     console.log (value, index)
// }
// //using forEach to say do this function for each value - callback function - using function as a value
// myArr.forEach(loopFunction)

// //use raw function as parameter
// myArr.forEach((value, index) => {
//     console.log (value, index)
// })

//PUSH, POP, SHIFT, UNSHIFT
// const myArr = [1, 2, 3, 4]
// //remove one from end
// myArr.pop()
// //add 5 to end
// myArr.push(5)
// //remove one from front
// myArr.shift()
// //add one form front
// myArr.unshift(0)

// console.log(myArr)


//SLICE AND SPLICE

// const myArr1 = [1, 2, 3, 4]

// //cut up to but not including the second index
// const myArr2 = myArr1.slice(1, 3)

// console.log(myArr1, myArr2)

// //1st param is which index you want to start at, 2nd is how many items to take out
// const myArr3 = myArr1.splice(1, 2)
// console.log(myArr1, myArr3)


//INDEX OF, FIND, FINDINDEX, SOME, EVERY

// const myArr = [ 1, 2, 3, 4 ]

// //tells you the index of a value
// const index = myArr.indexOf(2)
// console.log(index)

// //search array to find first value that matches param
// const find = myArr.find((value, index) => {
//     return value > 2
// })
// console.log(find)

// //search array to find index of first value that matches param
// const findIndex = myArr.findIndex((value, index) => {
//     return value > 2
// })
// console.log(findIndex)

// //seach array to determin is at least one value matches test, returns t/f
// const some = myArr.some((value, index) => {
//     return value > 2
// })
// console.log(some)

// //determins if all values in the array pass test, returns boolean
// const every = myArr.every((value, index) => {
//     return value > 2
// })
// console.log(every)


//FILTER & MAP
//return new arrays
const myArr = [1, 2, 3, 4]

//return new array with values that match
const filter = myArr.filter((value) => {
    return value > 2
})

console.log(filter)

//maps over array, makes change, returns new array w/ changes
const map = myArr.map((value) => {
    return value * 5 / 2
})

console.log(map)
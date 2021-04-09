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

const myArr = [1, 2, 3, 4]

//for loop
for (i = 0; i < myArr.length; i++){
    console.log(myArr[i])
}

//for of loop
for (value of myArr){
    console.log(value)
}
                      //value of index  
const loopFunction = (value, index) => {
    console.log (value, index)
}
//using forEach to say do this function for each value - callback function - using function as a value
myArr.forEach(loopFunction)

//use raw function as parameter
myArr.forEach((value, index) => {
    console.log (value, index)
})
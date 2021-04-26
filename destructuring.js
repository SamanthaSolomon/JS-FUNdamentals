const myArr1 = [1, 2, 3]

//no destructuring
// const one = myArr[0]
// const two = myArr[1]
// const three = myArr[2]

//destructuring
//arr L of = 
// const [one, two, three] = myArr

// console.log(one, two, three)

//Rest operator ... same as spread operator, called different things depending on when you use them
            //the rest of the arry is assigned to this variable    
// const [one, ...twoThree] = myArr
// console.log(one, twoThree)

//skipping indicies
// const [one, ,three] = myArr
// console.log(one, three)

//swapping values
// let a = 5
// let b = 6

// //take value of b and assign a, take value of a and swap to b
// [a, b] = [b, a]
// console.log(a, b)

// const myArr2 = [4,5,6]
// //grabs the two arrays and puts them in another array
// const myArr3 = [myArr1, myArr2]
// //spread operator spreads out the elements in the two arrays into one array
// const myArr4 = [...myArr1, ...myArr2]
// console.log(myArr3, myArr4)

//OBJECTS

// const myObj1 = {
//     name: 'Sam',
//     age: 35,
// }

// const myObj2 = {
//     name: 'Clint',
//     age: 41,
// }
// // old way without destructuring
// // const name = myObj.name
// // const age = myObj.age

// //object destructuring, look in myObj for a propery named name etc.
// const {name, age} = myObj1
// //can't reassign variables, add new variable name to acces values in other obj
// const {name:name2, age:age2} = myObj2

// console.log(name, age)
// console.log(name2, age2)

//ARRAY OF OBJECTS

// const myObjArr = [
//     {
//     name: 'Sam',
//     age: 35,
// }, 
// {
//     name: 'Clint',
//     age: 41,
// } 
// ]

// //destructure array and objects in array in same line
// const [{name, age}, {name:name2, age:age2}] = myObjArr

// console.log(name, age)
// console.log(name2, age2)

//SPREAD OPERATOR WITH OBJECTS

// const myObj = {
//         name: 'Sam',
//         age: 35,
//     }

// const myHouse = {
//     location: 'Baltimore',
//     rooms: 5,
// }
// //js knows property name and value are same when writtin like this instead of like this myObj:myObj
// //create two obj inside of another obj
// // const samsLife = { myObj, myHouse }
// //spread operator combines obj to be in one obj
// const samsLife = { ...myObj, ...myHouse }
// console.log(samsLife)

// //manipulating objects
// //destructure rooms puts it in its own variable. Use rest operator to take the rest and put it in samsLife2 var
// //This is the syntax for destructuring
// const {rooms, ...samsLife2} = samsLife
// console.log(samsLife2)



//DESTRUCTURE FUNCTION with array

// //passing in two parameters (values) into an array, use the rest operator to put other values in another variable
// const myFunc = ([val1, val2, ...theRest]) => {
//     console.log('in the func-', val1, val2)
//     console.log(theRest)
//     //params get assigned
//     return [ val1, val2 ]
// }
// //destructure return value of function and pass in params
// const [five, cheese] = myFunc([5, 'cheese', 6, 7, 8])

// console.log('out of the func-', five, cheese)

//DESTRUCTURE FUNCTION with obj
const myFunc = ({name, age, ...theRest}) => {
    console.log('in the fun-', name, age, theRest)
    return{name, age}
}

const {name, age} = myFunc({
    name: 'Alex',
    age: 35,
    height: "5' 0",
    glasses: false
})

console.log(name, age)
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

const myObj1 = {
    name: 'Sam',
    age: 35,
}

const myObj2 = {
    name: 'Clint',
    age: 41,
}
// old way without destructuring
// const name = myObj.name
// const age = myObj.age

//object destructuring, look in myObj for a propery named name etc.
const {name, age} = myObj1
//can't reassign variables, add new variable name to acces values in other obj
const {name:name2, age:age2} = myObj2

console.log(name, age)
console.log(name2, age2)
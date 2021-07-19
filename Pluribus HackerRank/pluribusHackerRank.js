// function makeInputVerifier(minimum, maximum){
//     function verify(inputValue){
//         //if inputValue <  min
//         if (inputValue < minimum){
//             //return str "input is less than minimum value"
//             return "input is less than minimum value"
//         //if inputValue >= min && <= max
//         } else if (inputValue >= minimum && inputValue <= maximum){
//             //return "input is in range"
//             return "input is in range"
//         //if inputValue > max
//         } else if (inputValue > maximum){
//         //return "input is more than maximum value"
//             return "input is more than maximum value"
//         }
//     }
    
//     //return function 
//     return verify(5)
// }
// console.log(makeInputVerifier(10, 20))

// let dates = ["20th Oct 2052", "6th Jun 1933", "26th May 1960", "20th Sep 1958", "16th Mar 2068", "25th May 1912", "16th Dec 2018", "6th Jun 1933", "26th Dec 2061", "4th Nov 2030", "28th Jul 1963"]

// const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dev"]

// let convertedDates = [""]

// function preprocessDates(dates){
//     //split items to array baised on spaces
//     //convert month to numer
//     //months.indexOf(months + 1)
//     //move array item in position 2 to position 0
//     //move array item in position 0 to position 2
//     //rejoin array
//     //pop last two items in array
//     //stringify 
//     return convertedDates
// }

const API = "https://jsonmock.hackerrank.com/api/movies?Year="
let req = new XMLHttpRequest()


async function getMovieList(year) {
    req.open ('GET', "https://jsonmock.hackerrank.com/api/movies?Year=" + year)

    req.onload = () => {
        if (req.status >= 200 && req.status < 400){
            const data = JSON.parse(req.responseText)
            console.log('data-', data)
            render(data)
        } else {
            console.log("error")
        }
    }
    req.send()

    let render = (movies) => {
        let array = ""
        for (i = 0; i < movies.length; i++){
            console.log(movies[i].title)
        }
    }


}

console.log(getMovieList(2012));








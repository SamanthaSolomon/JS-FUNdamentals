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
//expected output for first date "10 20 2052"


// AJAX REQUEST AND RENDER
// url in varibale for cleaner code
const API = "https://jsonmock.hackerrank.com/api/movies?Year="

// creating a new XMLHttpRequest object and naming it req
let req = new XMLHttpRequest()

//async function executing the get movie action. Chose async because of performance reasons, browser recieves a callbck when data is recieved so the browser can keep working on any other code there. Prevents freezing should there be a delay in fetching data from API
async function getMovieList(year) {
    //req.open initializes a new request, passing in the GET method and the appropriate url
    req.open ('GET', API + year)
    //re.onload is a property of the GlobalEventHandlers mixin, processes load events, fires when resources have loaded
    req.onload = () => {
        //if the status is between 200 and 400, meaning a successful call
        if (req.status >= 200 && req.status < 400){
            //convert the text recieved from the server into json and put it into a variable called data
            const data = JSON.parse(req.responseText)
            let renderHTML = data.data.map(title => {
                return `<h1>${title.Title}<h1>`
            }).join('')
            // console.log(renderHTML)
            // console.log('data-', data.data)
            document.querySelector('#title-list').innerHTML = renderHTML
        } else {
            console.log("error")
        }
    }
    //sends the request
    req.send()

}

getMovieList(2012);










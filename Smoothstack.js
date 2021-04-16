// There is a road consisting of N segments, numbered from 0 to N-1. Segment S[K] of the road may contain a pothole, denoted by a single uppercase "X" character or may be a good segment without any potholes denoted by a single dot "."
// For example, string ".X..X" means that there are two potholes in total in the road: one is located in segment S[1] and one in segment S[4]. All other segments are good.
// The road fixing machine can patch over three consecutive segments at once with asphalt and repair all the potholes located within each of these segments. Good or already repaired segments remain good after patching them.
// Your task is compute the mimimum number of patches to repair all potholes in the road.
// let A = ".X..X"
// // answer 2
// let B = "X.XXXXX.X"
// // answer 3
// let C = "XX.XXX"
// answer 2
// let D = "XXXX"
// //answer 2



// function solution(S) {    
//   let count = 0
//   let array = S.split('')
//   for (let i = 0; i <= array.length; i++) {
//       console.log('original', array)
//       if (array[i] === 'X' || array[i+1] === 'X' || array[i+2] === 'X') {
//           count++
//           array.splice(array[i], 3)
//       } 
//       console.log('resulting', array)
//     }
//   console.log(count)
//     // return "answer", patchCount
// }
// //working
// // solution(A)
// // solution(B)
// // solution(C)
// //not working
// solution(D)

// There are N coins, each showing either heads or tails. We would like all the coins to form a sequence of alternating heads and tails. What is the minimum number of coins that must be reversed to acheive this?
// Given an array A consisting of N integers representing the coins, returns the minmum number of coins that must be reversed. Consecutive elements of array A represent Consecutive coins and contain either a 0 (heads) or a 1 (tails).
let A = [1, 0, 1, 0, 1, 1]
//answer 1
let B = [1, 1, 0, 1, 1]
//answer 2
let C = [0,1,0]
// answer 0
let D = [0,1,1,0]
// answer 2

function solution(A) {
    let numFlips = 0
    for (let i = 0; i < A.length; i++) {
        switch(A){
            case 1: 
                A[i-1] === 0 && A[i] === 0
                A[i-1] = 1
                numFlips++
            default:
                A[i-1] === undefined
        }
        if (A[i-1] === undefined) {
            continue
        } else if (A[i-1] === 0 && A[i] === 0) {
            
        } else if (A[i-1] === 1 && A[i] === 1) {
            A[i-1] = 0
            numFlips++
        } else if (A[i-1] === 0 && A[i] === 1 && A[i+1] === 1) {
            A[i+1] = 0
            numFlips++
        } 
    }
    // console.log(numFlips)
    return numFlips
}
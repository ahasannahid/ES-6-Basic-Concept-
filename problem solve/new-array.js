/**
 * Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
 */

const number1 = [ 34, 56, 32, 45, 65]
const number2 = [ 54, 66, 12, 25, 54]

// const combindArray = (number1, number2) =>{
//     const newNubers = []
//     for(number of number1){
//         newNubers.push(number);
//     }

//     for(number of number2){
//         newNubers.push(number);
//     }
//     const largest = Math.max(...newNubers);
//     return largest;
// }

// console.log(combindArray(number1, number2));

const newArray = (num1, num2) => {
    return Math.max(...num1, ...num2);
}

console.log(newArray(number1, number2));
/**
 * Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
 */

const numbers = [10, 10, 15]

const avgsquareNuumber = (numbers) => {
    // const newNubers = [];
    let sum = 0;
    for(let number of numbers){
       const sqrNumber = number * number;
       sum = sum + sqrNumber;
    //    newNubers.push(sqrNumber);
    }
    const avg = sum / numbers.length;

    return avg;
}


console.log(avgsquareNuumber(numbers));
/**
 * You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
 */

const number = [1, 9, 17, 22];

// const total = number.reduce((previous, current) => previous + current, 0);
let sum = 0;
for (let i = 0; i < number.length; i++) {
    // const element = number[i];
    // sum = sum + element;
    sum += number[i]
}


console.log(sum);
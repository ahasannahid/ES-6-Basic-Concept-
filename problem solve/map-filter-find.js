/**
 * You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.
 */

const oddNumber = [ 1, 3, 5, 7, 9 ]

// const evenNumber = number => {
//     const newEvenNumber = [];
//     for(let i = 0; i < number.length; i++){
//         const element = number[i] + 1;
//         newEvenNumber.push(element);
//     }
//     return newEvenNumber;
// }

const evenNumber = oddNumber.map(number => number + 1);
console.log(evenNumber);

/**
 * You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.
 */
const divisible = [33, 50, 79, 78, 90, 101, 30 ];
const divisibleBy10 = divisible.filter(num => num % 10 === 0);

console.log(divisibleBy10);

/**
 * Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.
 */

const divisiblee = [33, 50, 79, 78, 90, 101, 30 ];
const divisibleBy10Find = divisiblee.find(num => num % 10 === 0);

console.log(divisibleBy10Find);
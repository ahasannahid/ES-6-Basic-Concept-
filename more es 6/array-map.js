const numbers = [2, 8, 4, 6, 3];
// const output = [];
// for(number of numbers){
//     const doubled = number * 2;
//     output.push(doubled);
// }
// console.log(output);

function getDoubles(numbers) {
    const output = [];
    for (number of numbers) {
        // const doubled = number * 2;
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}
// reguler function
// function doubleIt(num){
//     return num * 2;
// }
// arrow function
const doubleIt = num => num*2;

const result = getDoubles(numbers);
console.log(result);

/**
 1. get an array
 2. for every elements of the array do something
 3. store the result in an array
 4. return the result array
 */

 const makeDouble = numbers.map(doubleIt);
 console.log(makeDouble);

 const makeDoubleDirect = numbers.map(num => num * 2)
 const makeDoubleDirect2 = numbers.map(x => x * 2)
 console.log(makeDoubleDirect);
 console.log(makeDoubleDirect2);

 const fiveTimes = [1,2,3,4].map(x => x * 5);
 console.log(fiveTimes);
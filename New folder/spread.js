const max = Math.max(12,14,85,98,34,32);
const numbers = [85,98,34,32];

const largest = Math.max(...numbers)
console.log(largest);
const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(7777);
console.log(numbers);
console.log(numbers2);

const numbers4 = [112, ...numbers, 111]
console.log(numbers4);
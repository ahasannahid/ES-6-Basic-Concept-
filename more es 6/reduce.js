// map, forEach, filter, find, reduce
const numbers = [12, 5, 23];

// .reduce (accumulator function, initial value)
// accumulator function use two parameter(1. current item, update value)
// const total = numbers.reduce( (previous, current) =>previous + current , 0);
const total = numbers.reduce( (a, b) =>{
    console.log(a, b);
    return a + b
}, 0)

console.log(total) ;
// function declearation
// function add(first, second){
//     const total = first + second;
//     return total;
// }

const num = 10;

// function expression(function name optional)
const add1 = function add1(first, second){
    const total = first + second;
    return total;
}
// function expression with anpnymus function
// const add2 = function(first, second){
//     const total = first + second;
//     return total;
// }


// function add(first, second){
//     const total = first + second;
//     return total;
// }

function add4(first, second){
    return first + second;
}

const add5 = function(first, second){
    return first + second;
}
// arrow sign =>
const add6 = (first, second) => first + second;
const result = add6(10,20);
console.log(result);
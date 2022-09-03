const add = (first, second) => first + second;
const getFullName = (first, last) => first + ' ' + last; 
const multiply = (a, b) => a * b;
const addAll = (a, b, c, d, e) => a + b + c + d + d;

// when we have no perameter arrow function
const getPi = () => 3.14

// one perameter
const doucleIt = (num) => num * 2;
// one perameter simple version
const fiveTimes = num => num * 5;

// multiLine Arrow Function. By default return hbyna. if you return something use the return statement
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondtSum = y + z;
    const multiplyResult = firstSum + secondtSum;
    const result = multiplyResult / 2;
    return result

}
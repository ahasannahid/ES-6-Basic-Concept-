const numbers = [12, 5, 23, 29, 45, 11, 18, 9, 55, 61, 1];

const bigNums = numbers.filter(Number => Number > 20);
console.log(bigNums);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 55000},
    {id: 3, name: 'watch', price: 35000},
    {id: 4, name: 'tablet', price: 35000},
];

// const expensive = products.filter(product => product.price > 100000);
const expensive = products.filter(product => product.price > 10000);
console.log(expensive);
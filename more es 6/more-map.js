const numbers = [12, 56, 87, 44]
const half = numbers.map( n => n / 2 );
const third = numbers.map( n => n / 3 );
// console.log(half);
// console.log(third);

const friend = ['nahid', 'tom', 'ahasan', 'haisb'];

const firstLetters = friend.map(friend => friend[0]);
// console.log(firstLetters);

const nameLength = friend.map(friend => friend.length);
// console.log(nameLength);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 55000},
    {id: 3, name: 'watch', price: 35000},
    {id: 4, name: 'tablet', price: 35000},
]

// const items = products.map(product => console.log(product));
// console.log(items); return undefine
// const items = products.map(product =>console.log(product.name));
const items = products.map(product => product.name);
console.log(items);
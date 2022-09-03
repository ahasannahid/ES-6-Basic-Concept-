// object destructuring

const fish = {
    name: 'king Hilsha',
    address: 'chandpur',
    color: 'silver',
    phone: '01910613458',
    price: 4000
}
// console.log(fish.phone);
// const phone = fish.phone;
const color = fish.color;
const price = fish.price;

// obejct er property er nam e variable declare korte caiel
// const {phone}= fish;
// console.log(phone);

const {age, phone} = {name: 'nahid', age: 24, phone: '01795015383'}
console.log(age);
console.log(phone);

// array destructuring

const [first,another] = [44,99];
console.log(first);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(lost);

function getNames(){
    return ['alim', 'halim'];
}

const [baba, cacha] = getNames();
console.log(cacha, baba);
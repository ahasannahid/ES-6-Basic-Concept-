const players = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Bithi', age: 22 },
]
const totalAge = players.reduce((pAge, player) => pAge + player.age, 0);
console.log(totalAge);
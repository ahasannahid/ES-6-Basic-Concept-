const users = [
    {id: 1, name: 'abul', job: 'doctor'}
]
// console.log(users);
// console.log(users[0]);
// console.log(users[0].name);

const data = {
    count: 500,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id: 2, name: 'dabul', job: 'co-leader'}
    ]
}
const firstJob = data.data[0].job;
// console.log(firstJob);

const user = {
    id: 5001,
    name: 'Edison',
    address: {
        street: {
            first: '35/A, Mirpur 1',
            second: 'third floor',
            floor: 'third'
        },
        postOffice: 'Mirpur',
        city: 'Dhaka'
    }
}
// const userFloor = user.address.street.floor;
// if we have not get any value use ? . its called optional chaining
const userFloor = user.address.stret?.floor;

console.log(userFloor);
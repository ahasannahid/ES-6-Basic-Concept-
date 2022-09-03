const student = {
    name: 'ahasan',
    age: 24
}
const { age, name} = student;
// console.log(age);
// console.log(name);

let data = {
    location: [
        {latitude : '12, 16',
        longtitude: '18, 20',
        city: 'Dhaka',
        country: 'Bangladesh'
    }
    ]
}

const {location} = data;
console.log(location[0].city);
const friend = ['nahid', 'tom', 'ahasan', 'haisb'];

// friend.forEach(friend => console.log(friend));
friend.forEach(friend => {
    const friends = friend;
    console.log(friends);
});

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 55000},
    {id: 3, name: 'watch', price: 35000},
    {id: 4, name: 'tablet', price: 35000},
];

products.forEach(product => console.log(product));
products.forEach(product => console.log(product.name));

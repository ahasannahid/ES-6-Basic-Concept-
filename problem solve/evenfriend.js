/**
 Write an arrow function where it will do the following:
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
 */

const friends = ['ahasan', 'habib', 'nahid']

const friend = (friends) => {
    const newfriend = [];
    // for(let i = 0; i<friends.length;i++){
    //     const element = friends[i];
    //     newfriend.push(element);
    // }
    for(let friend of friends){
        if(friend.length % 2 ===0){
            newfriend.push(friend);
        }
        
    }
    return newfriend
}

const news = friend(friends);

console.log(news);
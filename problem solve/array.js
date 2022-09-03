/**
 * Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
 */

const friends = ['ahasan', 'habib', 'nahid']

const friend = (friends) => {
    const newfriend = [];
    // for(let i = 0; i<friends.length;i++){
    //     const element = friends[i];
    //     newfriend.push(element);
    // }
    for(let friend of friends){
        newfriend.push(friend);
    }
    return newfriend
}

const news = friend(friends);

console.log(news);
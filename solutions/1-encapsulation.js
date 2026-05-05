// BEGIN
const getMutualFriends = (user1, user2) => {
  let result = []
  for (let i = 0; i < user1.friends.length; i++) {
    for (let j = 0; j < user2.friends.length; j++) {
      if (user1.friends[i].id === user2.friends[j].id) {
        result.push(user1.friends[i])
      }
    }
  }
  return result
}

export {getMutualFriends}
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});
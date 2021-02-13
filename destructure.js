const person = {name: 'Jack William', age: 17, job: 'facebooker', gfName: 'Ema Watson', address: 'Kochu Khet', phone: '01717112211', friends: ['Tom Hancks', 'Tom Cruise', 'Jaclin Mithila']};
const {phone, gfName, address, salary} = person;
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, salary, address);
// console.log(gfName, phone, salary, address);


const friends = ['Sakib Khan', 'Arman Khan', 'Aamir Khan', 'Salman Khan', 'Shahrukh Khan'];
const [chotoFriend, nextFriend, ...restFriends] = friends;
console.log(restFriends);
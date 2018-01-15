// Object destructuring example

// const person = {
//     name: 'Steven',
//     age: 30,
//     location: {
//         city: 'Los Angeles',
//         temp: 100
//     }
// };

// const {name = 'anonymous', age, location} = person;

// console.log(`${name} is ${age}`);

// const {city, temp : temperature} = person.location;

// console.log(`It's ${temperature} in ${location.city}`);

// const book = {
//     title: 'You dont know JS',
//     author: "Idunno Who",
//     publisher: {
//         name: "Paperwerks"
//     }
// }

// const {title, author} = book;
// const {name : publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//Array Destructuring example

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [street, city, state, zip] = address;

// console.log(`You are in ${city}, ${state}`)

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

console.log('A medium coffee (hot) costs $2.50');

const [itemName, , medium] = item;

console.log(`A medium ${itemName} costs ${medium}`);
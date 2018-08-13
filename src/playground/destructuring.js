// Objesct Destructuring

// const person = {
//     name: 'Aaron',
//     age: 26,
//     location: {
//         city: 'Millbrae',
//         temp: '78'
//     }
// };

// const {name = 'Anonymous', age} = person;
//const {name: firstname = 'Anonyous', age} = person;
// const name = person.name;
// const age = person.age;

// console.log(`${name} is ${age}.`);

// const {city, temp: temperature} = person.location;

// if (city && temperature){
//     console.log(`It;s ${temperature} in ${city}`);
// }

// if (person.location.city && person.location.temp){
//     console.log(`It's ${person.location.temp} in ${person.location.city}`);
// }


//Array Destructuring

const address = ['1299 S Juniper Stree', 'Philidelphia', 'Pennsylvania', '191447'];

const [, city, state = 'New York', ] = address;
console.log(`You are in ${city} ${state}`);
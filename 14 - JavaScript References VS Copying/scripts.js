// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2); // 100 100
age = 200;
console.log(age, age2); // 200 100

let name = "owo";
let name2 = name;
console.log(name, name2); // owo owo
name = "uwu";
console.log(name, name2); // uwu owo


// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;
console.log(players, team); // ["Wes", "Sarah", "Ryan", "Poppy"] ["Wes", "Sarah", "Ryan", "Poppy"]

// You might think we can just do something like this:
team[3] = "Lux";

// however what happens when we update that array?
console.log(players, team); // ["Wes", "Sarah", "Ryan", "Lux"] ["Wes", "Sarah", "Ryan", "Lux"]

// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice(); // slice() without arguments returns a copy of the array

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];

// now when we update it, the original one isn't changed
team4[3] = "heeee hawww";
console.log(players, team4); // ["Wes", "Sarah", "Ryan", "Poppy"] ["Wes", "Sarah", "Ryan", "heeee hawww"]

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:
const captain = person;
captain.number = 99;
console.log(person, captain); // {name: "Wes Bos", age: 80, number: 99} {name: "Wes Bos", age: 80, number: 99}

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(person, cap2); // {name: "Wes Bos", age: 80, number: 99} {name: "Wes Bos", age: 12, number: 99}

const cap3 = JSON.parse(JSON.stringify(person));
console.log(person, cap3); // {name: "Wes Bos", age: 80, number: 99} {name: "Wes Bos", age: 80, number: 99}

// We will hopefully soon see the object ...spread
const cap4 = { ...person };
console.log(person, cap4); // {name: "Wes Bos", age: 80, number: 99} {name: "Wes Bos", age: 80, number: 99}

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

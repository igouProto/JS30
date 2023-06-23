// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteens = inventors.filter((inventor) => {
    return inventor.year >= 1500 && inventor.year < 1600;
});
console.table(fifteens); // console.table() is a nice way to display objects in a table

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map((inventor) => {
    return `${inventor.first} ${inventor.last}`;
});
console.table(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a, b) => {
    return a.year > b.year ? 1 : -1;
}); // moves items up and down in the array
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

// the old way without reduce:
// let totalYears = 0;
// for (let i = 0; i < inventors.length; i++) {
//     totalYears += inventors[i].passed - inventors[i].year;
// }
// console.log(totalYears);

// with reduce:
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0); // 0 is the starting point for total
console.log(totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// run this code in the console on the wikipedia page above

/*
const category = document.querySelector(".mw-category");

// links is a NodeList, not an array
// so we need to convert it to an array first for the map and filter methods to work
const links = Array.from(category.querySelectorAll("a")); // you can run querySelector on any element

// or spread it like this:
// const links = [...category.querySelectorAll("a")];

const allDeBlvds = links
.map((link) => link.textContent)
.filter((streetName) => streetName.includes("de"));

console.table(allDeBlvds);
*/

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedByLastName = people.sort((a, b) => {
    const [aLast, aFirst] = a.split(", ");
    const [bLast, bFirst] = b.split(", ");
    return aLast > bLast ? -1 : 1;
});
console.table(sortedByLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const transportation = data.reduce((obj, item) => {
    if (!obj[item]) obj[item] = 0;
    obj[item]++;
    return obj;
}, {
    car: 0,
    truck: 0,
    bike: 0,
});

console.table(transportation);

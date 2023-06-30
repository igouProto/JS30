function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// console.xyz

// Regular
console.log("hewwo!")

// Interpolated
console.log("Hello I am %s!", "owo");
console.log(`Hello I am ${"owo"}!`);

// Styled
console.log("%c I am some great text!!!!!", "font-size: 50px; color: gray; background: white; text-shadow: 10px 10px 0 blue");
// so this is how they make some kind of warning or error message

// warning!
console.warn("Oh boi");

// Error :|
console.error("Oh BOI!");

// Info
console.info("oh boi?");

// Testing
console.assert(1 === 2, "That is wrong!");

const paragraph = document.querySelector("p");
console.assert(paragraph.classList.contains("ouch"), "That is wrong!");
console.assert(paragraph.classList.contains("wow"), "That is right!"); // not displayed since it is true

// clearing
// console.clear();

// Viewing DOM Elements
const paragraph2 = document.querySelector("p");
// console.log(paragraph2);
console.dir(paragraph2);

// Grouping together
const dogs = [
    { name: "Snickers", age: 2 },
    { name: "hugo", age: 8 },
];

dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count("owo");
console.count("owo");
console.count("uwu");

// timing
console.time("fetching something!");
fetch("https://api.github.com/users/igouProto")
.then(data => data.json())
.then(data => {console.timeEnd("fetching something!");});


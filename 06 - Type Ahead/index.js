const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
fetch(endpoint)
  .then((blob) => {
    // at this point we don't know what kind of data it is yet
    console.log(blob);
    return blob.json(); // blob.json() returns a promise
  })
  .then((data) => {
    // console.log(data);
    cities.push(...data); // spread operator to push each item in the array
  });

console.log(cities);

const filterCities = (query, cities) => {

    if (query.length === 0) {
        return [];
    }

    return cities.filter(place => {
        // match the query with the city or state
        const regex = new RegExp(query, 'gi'); // g: global (looks at the entire array), i: case-insensitive
        return place.city.match(regex) || place.state.match(regex);
    })
}

const displayfilteredCities = function() {
    // console.log(this.value);
    const matches = filterCities(this.value, cities);
    // console.log(matches);

    // turn the list into HTML
    const html = matches.map(place => {

        // hightlight the matching text
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
            <li> 
                <span class="name"> ${cityName}, ${stateName} </span>
                <span class="population"> ${place.population} </span>
            </li>
        `
    }).join(''); // map returns an array, so we need to join it into a string
    suggestions.innerHTML = html;
}

// connect the script to the DOM
const queryInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// listen for the change in the input field
queryInput.addEventListener('change', displayfilteredCities);
// the change event only fires when you click out of the input field
// if we want to listen for every keystroke, we need to listen for the keyup event
queryInput.addEventListener('keyup', displayfilteredCities);
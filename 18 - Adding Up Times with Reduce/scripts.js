// get all the time nodes
const timeNodes = document.querySelectorAll('[data-time]');
// note that querySelectorAll returns a NodeList, not an array
// console.log(timeNodes);

// convert NodeList to array
const timeNodesArray = Array.from(timeNodes);

// get all the times
const seconds = timeNodesArray
    .map(node => node.dataset.time)
    .map(timeCode => {
        // split timeCode into minutes and seconds
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
    })
    .reduce((total, sec) => {return total + sec}, 0);
// console.log(seconds);

// time parser
const timeParser = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds - (hours * 3600)) / 60);
    const secs = seconds - (hours * 3600) - (minutes * 60);
    return `${hours}:${minutes}:${secs}`;
};

// stuff the converted seconds back into the DOM
const display = document.querySelector('.totalTime strong');
display.textContent = timeParser(seconds);
// get all the links that would be highlighted
const triggers = document.querySelectorAll('a');

// make the highlight pill
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

// move the highlight pill to the link that is hovered over
const highlightLink = (e) => {
    // console.log(e.target, "highlighting!")
    // find the coordinates of the link that is hovered over
    const linkCoords = e.target.getBoundingClientRect();
    const coordinates = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY, // remember to account for the scroll
        left: linkCoords.left + window.scrollX
    }

    // adjust the hightlight pill to match the link that is hovered over
    highlight.style.width = `${coordinates.width}px`;
    highlight.style.height = `${coordinates.height}px`;

    // move it
    // highlight.style.transform = `translate(${linkCoords.left}px, ${linkCoords.top}px)`;
    // remember to account for the scroll
    highlight.style.transform = `translate(${coordinates.left}px, ${coordinates.top}px)`;
}

// add listeners to each link to be highlighted
triggers.forEach(item => {
    item.addEventListener('mouseenter', highlightLink);
})
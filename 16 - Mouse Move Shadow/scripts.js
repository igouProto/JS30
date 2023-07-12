// same as before, grab the elements

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

const walk = 100; // 100px

function shadow (e) {
    // console.log(e);

    // destructure the offsetWidth and offsetHeight from the hero element
    const { offsetWidth: width, offsetHeight: height } = hero;

    // destructure the offsetX and offsetY from the event
    let { offsetX: x, offsetY: y } = e;

    // filter out the target elements that are not what we intend to listen to
    // in this case, the target element is the hero element
    if (e.target !== this) { // this refers to the element that is listening to the event
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }

    // example: if walk is 100, then xWalk and yWalk will be between -50 and 50
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    // console.log(xWalk, yWalk);

    // now we can apply the text shadow to the text element based on the xWalk and yWalk
    text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(0, 0, 0, 0.2)`;

    console.log(xWalk, yWalk);
}

// listen to the hero element for a mouse move event
hero.addEventListener('mousemove', shadow);

// we need a script to toggle the open class on the panels

const panels = document.querySelectorAll('.panel');

const toggleOpen = function() {
    this.classList.toggle('open');
}

const toggleActive = function(e) {
    // this.classList.toggle('open-active'); // but which transitionend event do we want to listen for?
    // console.log(e.propertyName);
    if (e.propertyName.includes('flex')) { // covers flex and flex-grow
        this.classList.toggle('open-active');
    }
}

// for each panel, listen for a click event and toggle the open class
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

// add a transitionend event listener to each panel
// when the transition ends, toggle the open-active class
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
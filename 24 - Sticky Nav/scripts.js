// start by selecting the nav element
const nav = document.querySelector('#main');

// the offsetTop property returns the top position (in pixels) 
// relative to the top of the parent element.
const topOfNav = nav.offsetTop;

// see where the top of the nav bar is on the page
// to decide when to add the class
// if the nav is off screen it should fix itself to the top
const fixNav = () => {
    // console.log(topOfNav, window.scrollY);
    
    // whenever the window is scrolled down past the top of the nav bar
    // apply the class of 'fixed-nav' to the nav bar
    if (window.scrollY >= topOfNav) {
        nav.classList.add('fixed');
        // add padding to the body to compensate for the nav bar
        document.body.style.paddingTop = nav.offsetHeight + 'px';
    }else{
        nav.classList.remove('fixed');
        // remove the padding from the body
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);
function debounce(func, wait = 50, immediate = true) {
  var timeout; // ref to the timeout so we can clear it later

  return function () {
    var context = this;
    var args = arguments;

    var later = function () { // 
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout; // if there are no timeouts, call the function now
    clearTimeout(timeout); 
    timeout = setTimeout(later, wait); // set a timeout to call the function later (the actual debounce)
    if (callNow) func.apply(context, args);
  };
}


// select the images we're sliding in
const sliderImages = document.querySelectorAll('.slide-in');

const checkSlide = (e) => {

    // loop over each image and figure out where it should be shown
    // once the image is visible (i.e. 50% of its height it visible), 
    // add a class to it to show it

    // console.log(window.scrollY); // how far we've scrolled down the page

    sliderImages.forEach((sliderImage, index) => {
        // a couple things to know
        // window.scrollY is how far we've scrolled down the page
        // window.innerHeight is the height of the window
        // sliderImage.height is the height of the image
        // sliderImage.offsetTop is how far the top of the image is from the top of the window
        
        // halfway through the img
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        
        // bottom of the img
        const imgBottom = sliderImage.offsetTop + sliderImage.height;

        // if the image is half shown
        const isHalfShown = slideInAt > sliderImage.offsetTop;

        // if the image is not scrolled past
        const isNotScrolledPast = window.scrollY < imgBottom;

        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        }else{
            sliderImage.classList.remove('active');
        }

        // console.log(index, slideInAt, imgBottom, isHalfShown, isNotScrolledPast);
    });

}

// window.addEventListener('scroll', checkSlide); // aaahhh so many events!
window.addEventListener('scroll', debounce(checkSlide)); // much better
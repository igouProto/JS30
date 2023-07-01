// aquire all the checkboxes
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

console.log(checkboxes);

// remember the last checked item
// so when the user press shift and click on the last item
// we know the range of items to check
let lastChecked;

// the check function
const handleCheck = (e) => {
    // console.log(e);

    // check for the shift key
    // and they are checking it
    let inBetween = false;
    if (e.shiftKey && e.target.checked) {
        // loop thru every single checkbox
        // and check if it is in between the last checked and the current checked
        // if it is, then check it
        checkboxes.forEach(checkbox => {
            // console.log(checkbox);
            // if the checkbox is the last checked or the current checked
            // then we are "in between"
            if (checkbox === e.target || checkbox === lastChecked) {
                // flip inBetween when the current item is the last checked item or the current checked item
                // inBetween would be true when the current item is the last checked item (enter)
                // and be false when the current item is the current checked item (exit)
                // and vise versa
                inBetween = !inBetween;
                console.log('--in between--', inBetween);
            }

            // check the checkbox if it is inBetween
            if (inBetween) {
                checkbox.checked = true;
            }

        }); 
    }

    lastChecked = e.target;
    // console.log("last", lastChecked);
};

// add event listener to each checkbox
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

// a little shift key indicator i added
const shiftKey = document.querySelector('.shift-indicator');
window.addEventListener('keydown', (e) => {
    if (e.shiftKey) {
        shiftKey.classList.add('active');
    }
});
window.addEventListener('keyup', (e) => {
    if (!e.shiftKey) {
        shiftKey.classList.remove('active');
    }
});
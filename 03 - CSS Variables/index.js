
const inputs = document.querySelectorAll('.controls input');
const spacingDisplay = document.querySelector('.spacingdisp');
const blurDisplay = document.querySelector('.blurdisp');

window.onload = () => { // set default values
    spacingDisplay.textContent = inputs[0].value + inputs[0].dataset.sizing;
    blurDisplay.textContent = inputs[1].value + inputs[1].dataset.sizing;
}

const handleUpdate = (e) => {
    // console.log(e.target.dataset);
    // a dataset is an object that contains all the data attributes
    // that the specific element has (the event target)

    const suffix = e.target.dataset.sizing || ''; // if there is no sizing, it will be an empty string 
    // console.log(suffix);
    // console.log(e.target.name); // this will give us the name of the input

    document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix);
    // this works by selecting the root element (document.documentElement) of the document
    // and change the value of the variable (--spacing, --blur, --base) to the value of the input

    if (e.target.name === 'spacing') {
        spacingDisplay.textContent = e.target.value + suffix;
    }

    if (e.target.name === 'blur') {
        blurDisplay.textContent = e.target.value + suffix;
    }

} // this listens to the changes in the input

inputs.forEach((input) => input.addEventListener('change', handleUpdate)); 
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));
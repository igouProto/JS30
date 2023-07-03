const keySequence = [];
const secret = 'owowhatsthis';

console.log('%c type owowhatsthis to see the secret message', 'font-size: 1.5rem; color: green;');

// listen for keyup events on the window
window.addEventListener('keyup', (e) => {
    // console.log(e.key);
    keySequence.push(e.key);
    keySequence.splice(-secret.length - 1, keySequence.length - secret.length);
    // console.log(keySequence.join(''));

    if (keySequence.join('').includes(secret)) {
        console.log('DING DING!');
        displaySecret();
    }
});

const displaySecret = () => {
    const secretDiv = document.createElement('div');
    const secretText = document.createTextNode('DING DING!');
    secretDiv.appendChild(secretText);

    document.body.appendChild(secretDiv);
}
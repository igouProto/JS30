  // how the animation works:
  // when a key is pressed, add the class "playing" to the div element with the corresponding data-key
  // same for the sound, listen for key event -> play sound
  // for this we need a listener for the keydown event
  window.addEventListener('keydown', (ev) => {

    const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
    // querySelector: works just like CSS selector
    // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors

    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();

    // select the key to add the class "playing"
    const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);
    key.classList.add('playing');
  })

  // transition end event:
  // when the transition ends, remove the class "playing"
  const removeTransition = (ev) =>  {
    // console.log(ev);
    // ok why there are so many events??
    // that's because the transitionend event is fired for every single property that is transitioned
    // (see propertyName in the console)
    // so let's filter out everything that is not transform (or any other event that you want)
    if (ev.propertyName !== 'transform') return;
    
    // then we remove the class "playing"
    ev.target.classList.remove('playing');

  }
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

  /* this also works if we want to remove the class "playing" when the key is released
  window.addEventListener('keyup', (ev) => {
    const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);
    key.classList.remove('playing');
  })
  */
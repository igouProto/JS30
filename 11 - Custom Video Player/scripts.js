// as usual, start by gaining access to the elements we need
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

// progress bar
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

// buttons
const toggle = player.querySelector('.toggle'); // the play/pause button
const skipButtons = player.querySelectorAll('[data-skip]');
const fullscreenButton = player.querySelector('.fullscreen');

// sliders
const sliders = player.querySelectorAll('.player__slider');

// number displays
const displays = player.querySelectorAll('.num-display');
const timeDisplay = player.querySelector('.num-display.time');


// then, build the functions
const togglePlay = () => {
    /*
    if (video.paused) video.play();
    else video.pause();
    */
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

const skip = (e) => {
    console.log(e.target.dataset);
    video.currentTime += parseFloat(e.target.dataset.skip);
}

const handleRangeUpdate = (e) => {
    // console.log(e.target.name, e.target.value);
    video[e.target.name] = e.target.value;

    // update the numbers
    displays.forEach(number => {
        // console.log(number.dataset.name, e.target.name);
        if (number.dataset.name === 'volume' && e.target.name === 'volume') {
            number.textContent = parseInt(e.target.value * 100) + '%';
        }
        if (number.dataset.name === 'playbackRate' && e.target.name === 'playbackRate') {
            number.textContent = e.target.value + 'x';
        }
    });
}

const handleProgress = () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
    
    // update the time display
    timeDisplay.textContent = `${parseTime(video.currentTime)} / ${parseTime(video.duration)}`;
}

// convert from seconds to minutes:seconds
const parseTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if (seconds < 10) seconds = '0' + seconds;
    return `${minutes}:${seconds}`;
}

// toggle the play/pause button
const updateButton = () => {
    const icon = video.paused ? `<span class="material-symbols-rounded">play_arrow</span>` : `<span class="material-symbols-rounded">pause</span>`;
    toggle.innerHTML = icon;
}

// scrub the video
const scrub = (e) => {
    console.log(e);
    console.log(e.offsetX, progress.offsetWidth);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// fullscreen!
const toggleFullscreen = () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
}


// finally, wire the listeners
video.addEventListener('click', togglePlay); // click on video to play/pause
video.addEventListener('play', updateButton); // update the play/pause button
video.addEventListener('pause', updateButton); // update the play/pause button
video.addEventListener('timeupdate', handleProgress); // updates the progress bar
toggle.addEventListener('click', togglePlay); // click on button to play/pause
skipButtons.forEach(button => button.addEventListener('click', skip)); // click on skip buttons to skip
sliders.forEach(slider => slider.addEventListener('change', handleRangeUpdate)); // change the volume or playback rate
sliders.forEach(slider => slider.addEventListener('mousemove', handleRangeUpdate)); // change the volume or playback rate


progress.addEventListener('click', scrub); // click on progress bar to scrub

// click and drag on progress bar to scrub
let mousedown = false;
progress.addEventListener('mousedown', () => mousedown = true); 
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)); // click and drag on progress bar to scrub
// like conditional rendering in react, if mousedown is true, then scrub(e) will run

// fullscreen button
fullscreenButton.addEventListener('click', toggleFullscreen);
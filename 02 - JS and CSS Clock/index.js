// grab the hands
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalClock = document.querySelector('.digitalTime');

// to make the clock tick every second,
// we need something that runs every second first
const setDate = () => {
    // console.log('Hewwo');
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90; // 90 is the offset we just gave
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutesDegrees = ((minutes / 60) * 360) + 90; // 90 is the offset we just gave
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hoursDegrees = ((hours / 12) * 360) + 90; // 90 is the offset we just gave
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    if (secondsDegrees <= 91 || secondsDegrees >= 449) {
        secondHand.style.transition = 'none';
    }else{
        secondHand.style.transition = 'all 0.05s';
    } // this is to prevent the hand from going backwards

    digitalClock.innerHTML = `${hours < 10? '0' + hours : hours}:${minutes < 10? '0' + minutes : minutes}:${seconds < 10? '0' + seconds : seconds}`;
}
setInterval(setDate, 1000); // this will run every second
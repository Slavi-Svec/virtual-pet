// this is the code that animates sammy icon in the game screen.it is just a demo and will need to be completed thruout the program

function moveSammy() {
    document.getElementById('egg-image').style.center = Math.random() * 200 + 'px';
    document.getElementById('egg-image').style.top = Math.random() * 100 + 'px';
}

// this is all the code for the clock feature in the game face
let timeOfDay = '';
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10){
        seconds = '0' + seconds;
    }
    if (hours >= 12 && hours < 24){
        const timeOfDay = 'pm';
    } else {
        timeOfDay = 'am';
    }
    if (hours > 12) {
        hours = hours -12;
    }
    // TODO: use es6
    const currentTime = hours + ':' + minutes + ':' + seconds + '' + timeOfDay
    const theClock = document.getElementById('clock-face');
    theClock.innerHTML = currentTime;
}

const clockButtonElement = document.getElementById('clock-button');
const theClock = document.getElementById('clock-face');
const clockButton = document.getElementById('clock-button');

clockButtonElement.addEventListener('click', () => {
    setInterval(() => {
        updateTime();
    }, 200);
    clockButton.innerHTML = 'clock';
});


const startButton = document.getElementById('start');
const eggImage = document.getElementById('egg-image');
const message = document.getElementById('message');

startButton.addEventListener('click', () => {
    eggImage.style.visibility = 'visible';
    message.innerHTML = 'Please wait five minutes for your egg to hatch';
    setInterval(() => {
        updateTime();
    }, 200);
    clockButton.innerHTML = 'clock';

    setTimeout(() => {
        eggImage.src = 'images/cracked-egg.png';
        message.innerHTML = '';
    }, 2000);

    setTimeout(() => {
        eggImage.src = 'images/squirm_2.png';
        setInterval(moveSammy, 250);
    }, 4000);
})


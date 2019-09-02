// this is the code that animates sammy icon in the game screen.it is just a demo and will need to be completed thruout the program
const timer = window.setInterval(moveSammy, 250);

function moveSammy() {
    document.getElementById('sammy').style.center = Math.random() * 200 + 'px';
    document.getElementById('sammy').style.top = Math.random() * 200 + 'px';
    // document.getElementById('sammy').style.left=Math.random()*500+'px';
    // document.getElementById('sammy').style.right=Math.random()*500+'px';
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
clockButtonElement.addEventListener('click', () => {
    const theClock = document.getElementById('clock-face');
    const displaySettings = theClock.style.display;
    const clockButton = document.getElementById('clock-button');

    if (displaySettings == 'block') {
        theClock.style.display = 'none';
        clockButton.innerHTML = 'clock';
    } else {
        theClock.style.display = 'block';
        clockButton.innerHTML = 'clock';
    } 
});

// function toggleClock() {
//     const theClock = document.getElementById('clock-face');
//     const displaySettings = theClock.style.display;
//     // const clockButton = document.getElementById('clock-button');

//     if (displaySettings == 'block') {
//         theClock.style.display = 'none';
//         clockButton.innerHTML = 'clock';
//     } else {
//         theClock.style.display = 'block';
//         clockButton.innerHTML = 'clock';
//     }
// }






function getTime() {
    const date = new Date();
    const amOrPm = date.getHours() < 12 ? 'am' : 'pm';
    return `${date.toTimeString().substring(0, 9)} ${amOrPm}`;
}

const SAMMYMAXHEALTH = 100;

const clockButtonElement = document.getElementById('clock-button');
const clock = document.getElementById('clock-face');
const clockButton = document.getElementById('clock-button');

clockButtonElement.addEventListener('click', () => {
    setInterval(() => {
        getTime();
    }, 200);
    clockButton.innerHTML = 'clock';
});

let sammy = {
    health: 100,
}


const backScreen = document.getElementById('screen');
const startButton = document.getElementById('start');
const eggImage = document.getElementById('egg-image');
const graveImage = document.getElementById('grave-image');
const message = document.getElementById('message');
const healthBar =document.getElementById('health-bar');

const healthDots = document.getElementsByClassName('health-dot');


startButton.addEventListener('click', () => {
    setInterval(() => {
        for (let i = 0; i < healthDots.length; i++) {
            if (sammy.health === 80) {
                healthDots[0].style.display = 'none'
            }
            if (sammy.health === 60) {
                healthDots[1].style.display = 'none'
            }
            if (sammy.health === 40) {
                healthDots[2].style.display = 'none'
            }
            if (sammy.health === 20) {
                healthDots[3].style.display = 'none'
                document.body.style.backgroundColor =  '#AA0000';
            }
            if (sammy.health === 0) {
                healthDots[4].style.display = 'none'
                backScreen.style.visibility = 'visible';
                document.body.style.background =  'black';
                eggImage.style.visibility = 'hidden';
                graveImage.style.visibility = 'visible';
                backScreen.style.background =  'black';
            }
        }
        sammy.health = sammy.health - 20
    }, 2000);

    eggImage.style.visibility = 'visible';
    healthBar.style.visibility = 'visible';
    message.innerHTML = 'Please wait for the egg to hatch';
    setInterval(() => {
        const clock = document.getElementById('clock-face');
        clock.innerHTML = getTime();
    }, 100);
    clockButton.innerHTML = 'clock';

    setTimeout(() => {
        eggImage.src = 'images/cracked-egg.png';
        message.innerHTML = '';
    }, 2000);

    setTimeout(() => {
        document.getElementById('stage').setAttribute('class', 'test');
        document.getElementById('egg-image').setAttribute('class', 'box bounce');
        eggImage.src = 'images/squirm_2.png';
    }, 4000);
})

const reset = document.getElementById('reset');

reset.addEventListener('click', () => {
    const userHasClickedOK = confirm('are you sure you want to re-set?');

    if (userHasClickedOK) {
        document.getElementById('egg-image').setAttribute('class', '');
        eggImage.src = 'images/start.png';
    }
})

const feedMe = document.getElementById('feed');

feedMe.addEventListener('click', () => {
    if (sammy.health >= SAMMYMAXHEALTH) {
        return;
    } else {
        sammy.health = sammy.health + 20;
        if (sammy.health === 80) {
            healthDots[0].style.display = 'block'
        }
        if (sammy.health === 60) {
            healthDots[1].style.display = 'block'
        }
        if (sammy.health === 40) {
            healthDots[2].style.display = 'block'
        }
        if (sammy.health === 20) {
            healthDots[3].style.display = 'block'
        }
    }

    document.getElementById('food-chicken').style.display = 'block';

    setInterval(() => {
        document.getElementById('food-chicken').style.display = 'none';
    }, 1000);
})


// this code below is the strobe light featture

const bodyElement = document.querySelector('body');

const requestAnimationFrame = window.requestAnimationFrame ||
                              window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame ||
                              window.msRequestAnimationFrame;

// var delay = 0;

function changeColor() {
    // delay++;

    if (sammy.health === 20) {
        bodyElement.style.backgroundColor = getRandomColor();
        delay = 0;
    }

    requestAnimationFrame(changeColor);
}
changeColor();

function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var hexR = r.toString(16);
    var hexG = g.toString(16);
    var hexB = b.toString(16);

    if (hexR.length == 1) {
        hexR = '0' + hexR;
    }

    if (hexG.length == 1) {
        hexG = '0' + hexG;
    }

    if (hexB.length == 1) {
        hexB = '0' + hexB;
    }

    var hexColor = '#' + hexR + hexG + hexB;
    return hexColor.toUpperCase();
}

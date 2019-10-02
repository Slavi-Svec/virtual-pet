
function getTime() {
    const date = new Date();
    const amOrPm = date.getHours() < 12 ? 'am' : 'pm';
    return `${date.toTimeString().substring(0, 9)} ${amOrPm}`;
}

const SAMMYMAXHEALTH = 100;

const clockButtonElement = document.getElementById('clock-button');
const clock = document.getElementById('clock-face');


clockButtonElement.addEventListener('click', () => {
    setInterval(() => {
        getTime();
    }, 200);
    clockButton.innerHTML = 'clock';
});

let sammy = {
    health: 100,
    sleep: 100,

}

// const music = document.getElementById('audio/8bit-happy1.wav');
const backScreen = document.getElementById('screen');
const buttonCol = document.getElementsByClassName('col');

const healthBar = document.getElementById('health-bar');
const healthDots = document.getElementsByClassName('health-dot');

const sleepBar = document.getElementById('sleep-bar');
const sleepDots = document.getElementsByClassName('sleep-dot');
// Images are here:
const eggImage = document.getElementById('egg-image');
const graveImage = document.getElementById('grave-image');
const startImage = document.getElementById('start-image');
const sleepzImage = document.getElementById('sleepz-image');
const startImageTwo = document.getElementById('press-start2');
// buttons are here:
const feedButton = document.getElementById('feed');
const cleanButton = document.getElementById('clean');
const trainButton = document.getElementById('train');
const sleepButton = document.getElementById('sleep');
const infoButton = document.getElementById('info');
const startButton = document.getElementById('start');
const clockButton = document.getElementById('clock-button');
const resetButton = document.getElementById('reset');

const message = document.getElementById('message');




startButton.addEventListener('click', () => {
    const audio = new Audio("audio/8bit-happy1.wav");
     audio.play();
     startImage.style.visibility = 'hidden';
     sleepzImage.style.visibility = 'hidden';
     backScreen.style.backgroundColor = 'white';


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
                healthDots[4].style.display = 'none';
                document.body.style.background =  'black';
                eggImage.style.visibility = 'hidden';
                graveImage.style.visibility = 'visible';
                startImageTwo.style.visibility = 'visible';

                for (let i = 0; i < buttonCol.length; i++) {
                    buttonCol[i].style.background = 'black';
                    buttonCol[i].style.border = 'black';
                }

                startButton.style.background = 'white';
            }
        }
        sammy.health = sammy.health - 20
    }, 10000);

    eggImage.style.visibility = 'visible';
    healthBar.style.visibility = 'visible';
    message.innerHTML = 'Please wait for the egg to hatch';
    setInterval(() => {
        // clock.innerHTML = getTime();
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

resetButton.addEventListener('click', () => {
    const userHasClickedOK = confirm('are you sure you want to re-set?');

    if (userHasClickedOK) {
        startImage.style.visibility = 'visible';
        sleepzImage.style.visibility = 'hidden'
        sleepzImage.style.visibility = 'hidden'

    }

})



feedButton.addEventListener('click', () => {
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
    }, 2000);
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
// sleep feature

let sammyIsAsleep = false;
sleepButton.addEventListener('click', function() {
    sammyIsAsleep = !sammyIsAsleep
    sammyIsAsleep
        ? eggImage.style.visibility = 'hidden'
        : eggImage.style.visibility = 'visible';

    backScreen.style.backgroundColor === 'black'
        ? backScreen.style.backgroundColor = null
        : backScreen.style.backgroundColor = 'black';

    sleepzImage.style.visibility === 'visible'
        ? sleepzImage.style.visibility = 'hidden'
        : sleepzImage.style.visibility = 'visible';
});


sleepButton.addEventListener('click', function() {
    // const audio = new Audio("audio/sleep-music.wav");
    // audio.play();
    const audio = new Audio("audio/sleep1.wav");
    audio.play();
})




clockButtonElement.addEventListener('click', () => {
   clock.innerHTML = getTime();
})




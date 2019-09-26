function getTime() {
    const date = new Date();
    const amOrPm = date.getHours() < 12 ? 'am' : 'pm';
    return `${date.toTimeString().substring(0, 9)} ${amOrPm}`;
}

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

const startButton = document.getElementById('start');
const eggImage = document.getElementById('egg-image');
const message = document.getElementById('message');

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
            }
            if (sammy.health === 0) {
                healthDots[4].style.display = 'none'
            }
        }
        sammy.health = sammy.health - 20
    }, 5000);

    eggImage.style.visibility = 'visible';
    message.innerHTML = 'Please wait five minutes for your egg to hatch';
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
        eggImage.src = 'images/cracked-egg.png';
    }
})





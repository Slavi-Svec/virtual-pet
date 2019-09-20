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


const startButton = document.getElementById('start');
const eggImage = document.getElementById('egg-image');
const message = document.getElementById('message');

startButton.addEventListener('click', () => {
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
        setInterval(moveSammy, 250);
    }, 4000);
})

const reset = document.getElementById('reset');

reset.addEventListener('click', () => {
    document.getElementById('egg-image').setAttribute('class', '');
    eggImage.src = 'images/cracked-egg.png';
})
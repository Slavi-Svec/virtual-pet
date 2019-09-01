// alert('hellosammy');



var timer =window.setInterval(moveSammy,250);
function moveSammy() {
    document.getElementById("sammy").style.center=Math.random()*200+"px";
    document.getElementById("sammy").style.top=Math.random()*200+"px";
    // document.getElementById("sammy").style.left=Math.random()*500+"px";
    // document.getElementById("sammy").style.right=Math.random()*500+"px";
}

// this is all the code for the clock feature in the console face
function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10){
        seconds ='0' + seconds;
    }
    if (hours >= 12 && hours <24){
        var timeOfDay = 'pm';
    }
    else {
        var timeOfDay = 'am';
    }
    if(hours>12) {
        hours = hours -12;
    }

    var currentTime = hours + ':' + minutes + ':' + seconds +'' + timeOfDay
    var theClock= document.getElementById("clock-face");
    theClock.innerHTML = currentTime;
}

function toggleClock() {
    var theClock = document.getElementById("clock-face");
    var displaySettings = theClock.style.display;
    var clockButton =document.getElementById('clock-button');
    if (displaySettings == 'block') {
        theClock.style.display = 'none';
        clockButton.innerHTML = 'clock';
    }
    else {
    theClock.style.display = 'block';
    clockButton.innerHTML = 'clock';
    }
}
    // if (displaySettings == 'block') {
    //     theClock.style.display = 'block';
    //      clockButton.innerHTML = 'clock';
    //  }
    //  else {
    // theClock.style.display = 'none';
    // clockButton.innerHTML = 'clock';
    //  }
    // }




    // console.log(hours,minutes)
    // console.log(now,hours,minutes,seconds)
// }
// var now = new Date();
// console.log(now)



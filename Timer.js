let seconds;
let isOn = false;
let firstClick = true;
let timer;

let useTimer = (secs = 60) => {
    if (firstClick === true) {
        seconds = secs;
        firstClick=false;
    }
    if (isOn){
        isOn=false;
        clearInterval(timer);
    }
    else{
        isOn=true;
        timer = window.setInterval(function() {
            myFunction(seconds);
        }, 1000); // every second;
    }

}

function myFunction(secs = 60) {
    seconds = secs;
    document.getElementById("timer").innerHTML = seconds;
    if (seconds > 0 ) { // so it doesn't go to -1
        seconds--;
    }
    else if (seconds === 0) {
        seconds = secs;
    }
}

let resetTimer = () => {
    isOn=false;
    firstClick=true;
    seconds=null;
    clearInterval(timer);
    document.getElementById("timer").innerHTML = null;
}
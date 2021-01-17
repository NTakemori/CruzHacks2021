let seconds;
let isOn = false;
let firstClick = true;
let timer;

let useTimer = (secs = 60, timerID = "timer") => {
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
            myFunction(seconds, timerID);
        }, 1000); // every second;
    }

}

function myFunction(secs = 60, timerID = "timer") {
    seconds = secs;
    document.getElementById(timerID).innerHTML = seconds;
    if (seconds > 0 ) { // so it doesn't go to -1
        seconds--;
    }
    else if (seconds === 0) {
        seconds = secs;
    }
}

let resetTimer = (timerID = "timer") => {
    isOn=false;
    firstClick=true;
    seconds=null;
    clearInterval(timer);
    document.getElementById(timerID).innerHTML = null;
}
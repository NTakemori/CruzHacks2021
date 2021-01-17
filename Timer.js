let minutes = [30*60, 60*60, 45*60];
let isOn = [false, false, false];
let firstClick = [true, true, true];
let timer = [null, null, null];

let useTimer = (timerID = "timer", id) => {

    if (firstClick[id] === true) {
        minutes[id];
        firstClick[id]=false;
    }
    if (isOn[id]){
        isOn[id]=false;
        clearInterval(timer[id]);
    }
    else{
        isOn[id]=true;
        timer[id] = window.setInterval(function() {
            myFunction(minutes[id], timerID, id);
        }, 1000); // every second;
    }
}

function myFunction(mins = 60, timerID = "timer", id) {
    minutes[id] = mins;
    let formattedMins = Math.floor(minutes[id]/60);
    let formattedSecs = Math.floor(minutes[id]%60);
    document.getElementById(timerID).innerHTML = formattedMins + " " + formattedSecs;
    if (minutes[id] > 0 ) { // so it doesn't go to -1
        minutes[id]--;
    }
    else if (minutes[id] === 0) {
        minutes[id] = mins;
    }
}

let resetTimer = (timerID = "timer", id) => {
    isOn[id]=false;
    firstClick[id]=true;
    minutes[id]=null;
    clearInterval(timer[id]);
    document.getElementById(timerID).innerHTML = null;
}
let seconds=63;
let isOn = false;
let timer;

let useTimer = () => {
    if (isOn){
        isOn=false;
        clearInterval(timer);
    }
    else{
        isOn=true;
        timer = window.setInterval(function() {
            myFunction();
        }, 1000); // every second;
    }

}

function myFunction() {
    document.getElementById("timer").innerHTML = seconds;
    if (seconds > 0 ) { // so it doesn't go to -1
        seconds--;
    }
    if (seconds === 0) {
        seconds = 3;
    }
}
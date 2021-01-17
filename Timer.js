// let seconds;
// let isOn = false;
// let firstClick = true;
// let timer;
//
// let useTimer = (secs = 60, timerID = "timer") => {
//
//     if (firstClick === true) {
//         seconds = secs;
//         firstClick=false;
//     }
//     if (isOn){
//         isOn=false;
//         clearInterval(timer);
//     }
//     else{
//         isOn=true;
//         timer = window.setInterval(function() {
//             myFunction(seconds, timerID);
//         }, 1000); // every second;
//     }
// }
//
// function myFunction(secs = 60, timerID = "timer") {
//     seconds = secs;
//     document.getElementById(timerID).innerHTML = seconds;
//     if (seconds > 0 ) { // so it doesn't go to -1
//         seconds--;
//     }
//     else if (seconds === 0) {
//         seconds = secs;
//     }
// }
//
// let resetTimer = (timerID = "timer") => {
//     isOn=false;
//     firstClick=true;
//     seconds=null;
//     clearInterval(timer);
//     document.getElementById(timerID).innerHTML = null;
// }

class timer {
    constructor(seconds, TimerID) {
        this.seconds = seconds;
        this.isOn = false;
        this.TimerID = TimerID;
        this.timer
        this.myFunction()
    }

    useTimer() {
        console.log("Hertseers");
        if (this.isOn){
            this.isOn=false;
            clearInterval(this.timer);
        }
        else{
            this.isOn=true;
            this.timer = window.setInterval(function() {
                this.myFunction();
            }, 1000); // every second;
        }
    }

    myFunction() {
        console.log("hi");
        seconds = this.seconds;
        document.getElementById(this.timerID).innerHTML = seconds;
        if (this.seconds > 0 ) { // so it doesn't go to -1
            this.seconds--;
        }
        else if (this.seconds === 0) {
            this.seconds = secs;
        }
    }

    resetTimer() {
        this.isOn=false;
        this.seconds=null;
        this.clearInterval(timer);
        document.getElementById(this.timerID).innerHTML = null;
    }
}

let Timers = [new timer(30, 'Timer'), new timer(60, 'Timer2')];
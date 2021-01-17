//meditation(every 2 hours for 5 min), stand up(every hour for 1 min),
//look away(every 20 min for 20 sec), drink water(every 30 min for 30 sec)
let minutes = [120*60, 60*60, 20*60, 30*60];
let minsResetter = [120*60, 60*60, 20*60, 30*60];
let intervalTime = [60*5, 60, 20, 30];
let isOn = [false, false, false, false];
let inInterval = [false, false, false, false];
let timer = [null, null, null, null];

// const $ = require( "jquery" )( window );

// $(document).ready(function(){
//     alert("jquery in js file");
// });

let useTimer = (timerID = "timer", id) => {
    if (isOn[id]){
        isOn[id]=false;
        clearInterval(timer[id]);
    }
    else{
        isOn[id]=true;
        timer[id] = window.setInterval(function() {
            myFunction(timerID, id); 
            let css = ".circle_animation" + id.toString();
            console.log(css);
            document.getElementsByClassName(css).css('stroke-dashoffset', 0);
        }, 1000); // every second;
    }
}

function myFunction(timerID = "timer", id) {
    let formattedMins = Math.floor(minutes[id]/60);
    let formattedSecs = Math.floor(minutes[id]%60);
    let h = "H" + id.toString();
    console.log("ID  ",  id);
    let elements = document.getElementsByClassName("H0");
    console.log("element found  ", elements[0]);
    elements[0].innerHTML = formattedMins + " " + formattedSecs;
    // for( let i = 0; i < elements.length(); i++ ){
        
    // };
    if (minutes[id] > 0 ) { // so it doesn't go to -1
        minutes[id]--;
        document.getElementsByTa.text(formattedMins + ":" + formattedSecs);
        let css = ".circle_animation" + id.toString();
        document.getElementsByClassName(css).css('stroke-dashoffset', 351+((minsResetter[id] - minutes[id]+1)*(351/minsResetter[id])));               
}
    else if (minutes[id] === 0) {
        if (inInterval[id] === false){
            inInterval[id] = true;
            minutes[id] = intervalTime[id];
        }
        else {
            inInterval[id] = true;
            minutes[id] = minsResetter[id];
        }
    }
}

useTimer('timer', 0);

let resetTimer = (timerID = "timer", id) => {
    isOn[id]=false;
    minutes[id]=minsResetter[id];
    clearInterval(timer[id]);
    document.getElementById(timerID).innerHTML = null;
}

let startAll = () => {
    for (let i=0; i<4; i++){
        isOn[i] = false;
    }
    useTimer('timer', 0);
    useTimer('timer2', 1);
    useTimer('timer3', 2);
    useTimer('timer4', 3);
}

let stopAll = () => {
    for (let i=0; i<4; i++){
        isOn[i] = true;
    }
    useTimer('timer', 0);
    useTimer('timer2', 1);
    useTimer('timer3', 2);
    useTimer('timer4', 3);
}

let resetAll = () => {
    resetTimer('timer', 0);
    resetTimer('timer2', 1);
    resetTimer('timer3', 2);
    resetTimer('timer4', 3);
}
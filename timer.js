
//meditation(every 2 hours for 5 min), stand up(every hour for 1 min),
//look away(every 20 min for 20 sec), drink water(every 30 min for 30 sec)
// let minutes = [120*60, 60*60, 20*60, 30*60];
// let minsResetter = [120*60, 60*60, 20*60, 30*60];
let minutes = [100, 100, 100, 100];
let minsResetter = [100, 100, 100, 100];
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
            // console.log("hello");
            // if( document.getElementsByClassName("circle_animation1")[0] )
            //     document.getElementsByClassName("circle_animation1")[0].style.strokeDashoffset = 0; 
        }, 1000); // every second;
    }
}

function myFunction(timerID = "timer", id) {
    let formattedMins = Math.floor(minutes[id]/60);
    let formattedSecs = Math.floor(minutes[id]%60);
    let h = "head" + id.toString();
    let timePassed = minsResetter[id] - minutes[id];
    let dist = ((timePassed+1)*(351/minsResetter[id]));
    if (document.getElementsByClassName("yeet")[0]) {
        document.getElementsByClassName("yeet")[0].innerHTML = formattedMins + ":" + formattedSecs;
    }
    if (document.getElementsByClassName("circle_animation1")) {
        // console.log(timePassed);
        document.getElementsByClassName("circle_animation1")[0].style.strokeDashoffset = dist;
    }
    // console.log("element found  ", elements[0]);
    // elements[0].innerHTML 
    // for( let i = 0; i < elements.length(); i++ ){
        
    // };
    if (minutes[id] > 0 ) { // so it doesn't go to -1
        minutes[id]--;
        // document.getElementsByTa.text(formattedMins + ":" + formattedSecs);
        let css = ".circle_animation" + id.toString();
        // if ( document.getElementsByClassName("yeet")[0] )
        // let dist = 351-((minsResetter[id] - minutes[id]+1)*(351/minsResetter[id]));
        // console.log(dist);
        // if( document.getElementsByClassName("yeet")[0] ){
        //     console.log("attempting to change")
        //     document.getElementsByClassName("yeet")[0].style.strokeDashoffset = dist;     
        // }          
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

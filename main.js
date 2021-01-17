const { app, BrowserWindow, Tray, ipcMain, Menu, remote } = require('electron');


let mainWindow = null;
let timerWindow = null;
let tray = null;


async function getAPI(){
  const response = await fetch('http://127.0.0.1:5000/api/workout');
  var data = await response.json();

  console.log(data["videoID"].toString())
  var link = "https://www.youtube.com/embed/" + data['videoID'].toString() + "?autoplay=1"; 
  //console.log(link);
  

  let myIframe = document.getElementById("myIframe");
  console.log(link);
  myIframe.src = link;


}

// function getAPI(){
//   var ID;
//   fetch('http://127.0.0.1:5000/api/med') 
//   .then(res => res.json()) 
//   .then(data => ID = data)

//   console.log(ID);
 
//   let link = "https://www.youtube.com/embed/" + ID['videoID'] + "?autoplay=1"; 
//   console.log(link);
//   return link;
  
// }

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

let timer2020 = 30 * 60;
let timerWater = 100;
let timerExer = 2 * 60 * 60;

const contextMenu = [
    { label: `${timer2020.toString()}   20/20/20`, type: "normal", click() {stopTimer("eyes")}},
    { label: "13:00   20/22/20", type: "normal", click() {stopTimer("eyes")}},
    { label: "13:00   20/27/20", type: "normal", click() {stopTimer("eyes")}},
    { type: "separator" },
    { label: "Settings", click() {
        //display settings window here
    }},
    { role: "quit", click() {
        app.quit();
    }}
];

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('index.html');
}

function createTimerWindow () {
    // var electronVibrancy = require('..');
    timerWindow = new BrowserWindow({
      width: 300,
      height: 300,
      webPreferences: {
        nodeIntegration: true,
      },
      
      vibrancy: "dark",
    //   frame: false,
    //   titleBarStyle: "customButtonsOnHover"
    });
    
    // mainWindow.loadURL("http://browserify.org");
    // electronVibrancy.SetVibrancy(timerWindow, 0);
    
    timerWindow.loadFile('timers.html');
  }




function startTimer() {
    setInterval(() => {

        timer2020--;
        timerExer--;
        timerWater--;
        if( timerWater === 0 ) {
            console.log("timer done")
        }
        contextMenu[0].label = `${timer2020.toString()}   20/20/20`;
        const menu = Menu.buildFromTemplate(contextMenu);
        tray.setContextMenu(menu);
    }, 1000);
}

function stopTimer(timer) {
    console.log(timer);
}




function createSysTray () {
    tray = new Tray("./assets/darwinAssets/CoffeeTemplate@2x.png");
    const menu = Menu.buildFromTemplate(contextMenu);
    tray.setContextMenu(menu);
}

app.whenReady().then( () => {
    createWindow();
    createTimerWindow();
    createSysTray();
    startTimer();
});
    

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
    if( mainWindow === null ) {
        createWindow(); 
    } else if ( timerWindow === null ) {
        createTimerWindow();
    }
});

ipcMain.on('re-render', () => {
    // console.log("attempting refresh");
    mainWindow.loadFile('index.html');
})

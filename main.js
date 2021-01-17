const { app, BrowserWindow, Tray, ipcMain, Menu, remote } = require('electron');


let mainWindow = null;
let tray = null;

let timer2020 = 30 * 60;
let timerWater = 100;
let timerExer = 2 * 60 * 60;

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




function startTimer() {
    setInterval(() => {
        //console.log(timer2020);
        timer2020--;
        timerExer--;
        timerWater--;
        if( timerWater === 0 ) {
            console.log("timer done")
        }

    }, 1000);
}

function stopTimer(timer) {
    console.log(timer);
}

function createSysTray () {
    tray = new Tray("./assets/darwinAssets/CoffeeTemplate@2x.png");
    const contextMenu = Menu.buildFromTemplate([
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
    ]);
    tray.setContextMenu(contextMenu);
}

app.whenReady().then( () => {
    createWindow();
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
    }
});

ipcMain.on('re-render', () => {
    // console.log("attempting refresh");
    mainWindow.loadFile('index.html');
})

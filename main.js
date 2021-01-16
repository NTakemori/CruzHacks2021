const { app, BrowserWindow, Tray, ipcMain } = require('electron');


let mainWindow = null;
let tray = null;

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

function createSysTray () {
    tray = new Tray("./assets/darwinAssets/CoffeeTemplate@2x.png");
}

app.whenReady().then( () => {
    createWindow();
    createSysTray();
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

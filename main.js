const { app, BrowserWindow, Tray, ipcMain } = require('electron');


let mainWindow = null;
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

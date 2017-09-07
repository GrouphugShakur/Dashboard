const{app, BrowserWindow} = require("electron")
const path = require("path")
const url = require("url")
require('electron-debug')({showDevTools: true});

let win;

function createWindow(){
    win = new BrowserWindow({
        titleBarStyle: 'hidden', 
        width:1280, 
        height:768, 
        frame: true, 
        transparent:true,
        fullscreenable: true, 
        maximizable: true,
        icon: path.join(__dirname, 'assets/icons/png/64x64.png')
    });
    
    win.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol:"file:",
        slashes:true
    }))
}
app.on("ready", createWindow);

app.on('browser-window-created',function(e,window) {
      window.setMenu(null);
});

app.on("window-all-closed", () => {
    if(process.platform!=="darwin"){
        app.quit();
    }
})

app.on("activate", () =>{
    if(win == null){
        createWindow();
    }
})
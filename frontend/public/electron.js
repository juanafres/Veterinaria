const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let appWindow;

function crearVentana() {

    appWindow = new BrowserWindow({
        width: 1200,
        height: 600,
        center: true,
        resizable: true,
        minWidth: 600,
        minHeight:400,
        show: false,
        icon: './icon.png',
        title: 'APV - Administrador Pacientes Veterinaria'
    });

    // appWindow.loadURL(
    //     isDev
    //       ? 'http://localhost:3000' 
    //       : `file://${path.join(__dirname, "../build/index.html")}`
    // );

    appWindow.loadURL('http://localhost:3000');

    // Cuando la app esta lista para verse
    appWindow.once('ready-to-show', () => {
        appWindow.show();
    })
    
}

app.on('ready', crearVentana);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
})

app.on('activate', () => {
    if(appWindow === null) {
        crearVentana();
    }
})
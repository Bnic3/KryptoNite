const electron = require('electron')
const app = electron.app
const {BrowserWindow,ipcMain} = electron
const path = require('path')
const url = require('url')

const logger = require('./utils/MyLogger')

let mainWindow;

function createWindow() {
  logger.info('Hello again distributed logs');
  mainWindow = new BrowserWindow({width: 800, height: 600 })

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL ||
      url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
      })
  )

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('react:log', (e,item)=>{
  const obj = JSON.stringify(item)
  logger.info(`react-log:${obj}`)} );


// react Hack
// const electron = window.require('electron');
// const fs = electron.remote.require('fs');
// const ipcRenderer  = electron.ipcRenderer;
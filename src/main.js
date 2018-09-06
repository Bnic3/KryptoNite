require('dotenv').config()
const electron = require('electron')
const app = electron.app
const {BrowserWindow,ipcMain, Menu} = electron
const path = require('path')
const url = require('url')

const logger = require('./utils/MyLogger')
const {menuTemplateProvider} = require('./electronUtils/myMenu');
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

let mainWindow,mainMenu;


function createWindow() {
  
  mainWindow = new BrowserWindow({width: 1000, height: 800 })

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL ||
      url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
      })
  )
  const {menuTemplate} = menuTemplateProvider(app)
  mainMenu =  Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(mainMenu)

   // Don't show until we are ready and loaded
   mainWindow.once('ready-to-show', () => {
    mainWindow.show()
   
   
  })

  
    

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  installExtension(REACT_DEVELOPER_TOOLS).then((name) => {
    const key = process.env.INFURA_KEY;
    logger.info(`Added Extension:  ${name}`);
    
})
.catch((err) => {
   logger.info('An error occurred: ', err);
});
  
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) { createWindow()  }
})



ipcMain.on('react:log', (e,item)=>{
    let obj = typeof(item) === 'object' ? JSON.stringify(item) : item
  logger.info(`react-log:${obj}`) 
} );


// react Hack
// const electron = window.require('electron');
// const fs = electron.remote.require('fs');
// const ipcRenderer  = electron.ipcRenderer;
//mainWindow.webContents.openDevTools()
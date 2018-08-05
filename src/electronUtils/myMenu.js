const {DARWIN} = require('./e-constants')
  function menuTemplateProvider(app){
    const menuTemplate =[
        {
          label : "File",
          submenu:[
              {label: "Credits"},
              {label : 'Quit',
              accelerator: process.platform === DARWIN ?'Command+Q' : 'Ctrl+Q',
            click(){app.quit()}}
          ]
        },
        {label: "Devtools",
        accelerator: process.platform === DARWIN ?'Command+Alt+I' : 'Ctrl+Shift+I',
        click(item, focusedWindow) {focusedWindow.toggleDevTools()}  }
        //Todo: make this environment specific 
      ] 

      if (process.platform !== DARWIN) {
        menuTemplate.unshift({label:"Juggernut"})
      }

    return {menuTemplate}
  } 


  module.exports = {menuTemplateProvider}
const {app, BrowserWindow, Menu } = require('electron');
const path= require('path');
let mainWindow;
let newWindow;

if (process.env.NODE_ENV !== 'production') {
  require('electron-reload')(__dirname, {

  })
}


app.on('ready', ()=> {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
      })
      
      mainWindow.on('closed', ()=>{
        app.quit();
      });
      
      mainWindow.loadFile('views/index.html')
      // const mainMenu = Menu.buildFromTemplate(templateMenu);
      Menu.setApplicationMenu(null);
    });

    const templateMenu=[
      {
        label:'File', 
        submenu:[
          {
        
            label:'Exit',
            accelerator:'Ctrl+Q',
            click(){
              app.quit();
            }
          }
        ]        
      }
    ];

    if(process.env.NODE_ENV !== 'production'){
      templateMenu.push({
        label:'Devtools',
        submenu:[
          {
            label:'Show / Hide DevTools',
            click(item,focusedWindow){
              focusedWindow.toggleDevTools();
            }
          },
          {
            role:'reload'
          }
        ]
      })
    }


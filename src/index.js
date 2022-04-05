const {app, BrowserWindow, Menu } = require('electron');
const path= require('path');
let mainWindow;
let newWindow;


app.on('ready', ()=> {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
      })
      
      mainWindow.on('closed', ()=>{
        app.quit();
      });
      
      mainWindow.loadFile('views/index.html')
      const mainMenu = Menu.buildFromTemplate(templateMenu);
      Menu.setApplicationMenu(mainMenu);
    });

    function createProduct(){
       newWindow = new BrowserWindow({
          title:'Add new product',
          width:400,
          height:330
          
       })
      newWindow.setMenu(null); 
      newWindow.loadFile('views/newProducts.html')
      newWindow.on('closed',()=>{
        newWindow=null;
      })
    }; 

    const templateMenu=[
      {
        label:'File', 
        submenu:[
          {
            label: 'New Product',
            accelerator: 'Ctrl+N',
            click(){
             createProduct();
            }
          },
          {

            label:'Eliminar todo',
            click(){}

          },
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


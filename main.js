
// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

const width = 1080;
const height = 1920;

console.log("process.env", process.env.npm_config_url)

const url = process.env.npm_config_url || "http://example.com"

app.on('ready', function() {

  // Create the browser window.
  mainWindow = new BrowserWindow({
    'width': width,
    'height': height,
    'max-width': width,
    'max-height': height,
    'fullscreen': true,
    'frame': false,
    'kiosk': true,
    'transparent': true,
    'show': true,
    'resizable': false
  });

  mainWindow.loadURL(url)

});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

 
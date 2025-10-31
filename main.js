
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  win.loadFile(path.join(__dirname, 'app', 'index.html'));
  // Optional: open devtools with F12 in dev
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  // Basic menu with Print shortcut
  const template = [{
    label: 'File',
    submenu: [
      { role: 'reload' },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  }];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

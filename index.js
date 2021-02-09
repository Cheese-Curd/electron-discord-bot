const { app, BrowserWindow } = require('electron');

function createWindow()
{
    const window = new BrowserWindow(
    {
        'width':800,
        'height':600,
        'autoHideMenuBar':true,
        'webPreferences':
        {
            'nodeIntegration':true,
            'enableRemoteModule':true
        }
    });

    window.loadFile('index.html');
}

app.once('ready', createWindow);
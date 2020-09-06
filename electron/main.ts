import { app, BrowserWindow } from 'electron';
import installExtension, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS,
} from 'electron-devtools-installer';
import { autoUpdater } from 'electron-updater';
import * as path from 'path';
import * as url from 'url';

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
    },
    title: 'Valgen',
    icon: '../icon.png',
  });

  mainWindow.on('page-title-updated', (e) => {
    e.preventDefault();
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000');
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true,
      })
    );
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.setAppUserModelId('valgen');

app.allowRendererProcessReuse = true;
autoUpdater.autoInstallOnAppQuit = true;

app
  .on('ready', () => {
    autoUpdater.checkForUpdatesAndNotify();
    createWindow();
  })
  .whenReady()
  .then(() => {
    if (process.env.NODE_ENV === 'development') {
      installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
      installExtension(REDUX_DEVTOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
    }
  });

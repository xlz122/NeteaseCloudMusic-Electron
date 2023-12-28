import { app, BrowserWindow } from 'electron';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1150,
    height: 750,
    minWidth: 1150,
    minHeight: 750,
    // 隐藏窗口边框
    // frame: false,
    // 隐藏标题栏
    // titleBarStyle: 'hidden',
    webPreferences: {
      // vue文件引入node和electron相关的API
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);

    // 打开开发工具
    win.webContents.openDevTools();
  } else {
    win.loadFile('dist/index.html');
  }
};

app.whenReady().then(() => {
  createWindow();

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

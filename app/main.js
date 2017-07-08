const {app, BrowserWindow} = require("electron");

let mainWindow;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 500,
        height: 400
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});

app.on('window-all-closed', function() {
    app.quit();
});
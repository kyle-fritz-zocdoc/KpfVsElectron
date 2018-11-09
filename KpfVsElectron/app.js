const edge = require('electron-edge-js')
const { app, BrowserWindow } = require('electron')

var getMessage = edge.func({
    assemblyFile: '../KpfVsElectron.DotNet/bin/Debug/KpfVsElectron.DotNet.dll',
    typeName: 'KpfVsElectron.DotNet.DotNetExampleClass',
    methodName: 'GetMessage' // This must be Func<object,Task<object>>
})

function createWindow() {

    // Invoke .net class
    getMessage('arg input', function (error, result) {
        // Print the result to the console.
        console.log(result)

        // Create the browser window.
        win = new BrowserWindow({ width: 800, height: 600 })

        // Pass the message to the window.
        win.dotNetMsg = result

        // and load the index.html of the app.
        win.loadURL('file://' + __dirname + '/index.html')
    })

}

app.on('ready', createWindow)
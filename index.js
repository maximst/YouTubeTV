const { app, BrowserWindow } = require('electron')

function createWindow() {
    let win = new BrowserWindow({ width: 1280, height: 720 })
    win.AVPlayManager = {}
    win.loadURL('https://youtube.com/tv/',
        {
//            userAgent: "Mozilla/5.0 (Unknown; Linux armv7l) AppleWebKit/537.1+ (KHTML, like Gecko) Safari/537.1+ LG Browser/6.00.00(+mouse+3D+SCREEN+TUNER; LGE; 42LA660S-ZA; 04.25.05; 0x00000001;); LG NetCast.TV-2013 /04.25.05 (LG, 42LA660S-ZA, wired)"
//            userAgent: 'Mozilla/5.0 (SMART-TV; Linux; Tizen 2.4, SAMSUNG UKS7000) AppleWebKit/537.3 (KHTML, like Gecko) Version/2.4 TV Safari/538.1'
            userAgent: "Mozilla/5.0 (SMART-TV; Linux; Tizen 2.4.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/2.4.0 TV Safari/538.1"
        }
    )

    const ses = win.webContents.session
    console.log(ses.getUserAgent())
}

app.commandLine.appendSwitch("ignore-gpu-blacklist")
app.on('ready', createWindow)

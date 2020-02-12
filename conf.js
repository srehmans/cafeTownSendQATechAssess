exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['cafeTownSendTest.spec.js'],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            binary: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
            args: [],
            extensions: [],
        }
    }
}

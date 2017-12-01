var webdriverio = require('webdriverio');
//var expect = require('chai').expect;


var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    },
};

//var options = new chrome.Options().addExtensions('chrome-minified-dev.crx');

webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .end()
    .catch(function(err) {
        console.log(err);
    });

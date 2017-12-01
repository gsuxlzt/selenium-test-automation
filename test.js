"use strict";
var webdriver = require("selenium-webdriver"),
SeleniumServer = require("selenium-webdriver/remote").SeleniumServer;

var cbtHub = "http://hub.crossbrowsertesting.com:80/wd/hub";

var username = 'aallarde@joinpiggy.com'; //replace with your email address
var authkey = 'ucffc143e7fbed03'; //replace with your authkey

var caps = {
    'browserName': 'Chrome',
    'version': '61x64',
    'platform': 'Windows 7 64-Bit',
    'screenResolution': '1366x768'
};

caps.username = username;
caps.password = authkey;

var driver = new webdriver.Builder()
    .usingServer(cbtHub)
    .withCapabilities(caps)
    .build();
function checkTitle() {
    // driver.getTitle()
    // .then(function(title) {
    //      console.log("The title is: " + title)
    //  });
    driver.get('https://www.google.com');
    driver.getTitle().then(function(title) {
        console.log(title);
    });

    return webdriver.until.titleIs('Selenium Test Example Page');
}

function handleFailure(err) {
     console.error('Something went wrong!\n', err.stack, '\n');
     quitDriver();
}
function quitDriver() {
    console.log("WebDriver is about to close.");
    driver.close();
}
driver.get('http://crossbrowsertesting.github.io/selenium_example_page.html');
driver.wait(checkTitle, 500).then(quitDriver, handleFailure);

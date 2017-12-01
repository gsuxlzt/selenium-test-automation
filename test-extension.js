"use strict";
var webdriver = require("selenium-webdriver"),
SeleniumServer = require("selenium-webdriver/remote").SeleniumServer;

var cbtHub = "http://hub.crossbrowsertesting.com:80/wd/hub";

var username = 'aallarde@joinpiggy.com'; //replace with your email address
var authkey = 'ucffc143e7fbed03'; //replace with your authkey

// var caps = {
//     'browserName': 'Chrome',
//     'version': '61x64',
//     'platform': 'Windows 7 64-Bit',
//     'screenResolution': '1366x768'
// };
//
// caps.username = username;
// caps.password = authkey;

var chromeOptions = webdriver.Capabilities.chrome();

// chromeOptions: [
//   binary: 'C:\Program Files (x86)\Google\Chrome\Application\chrome',
//   args: [],
//   extensions: ['chrome-minified-dev.crx']
// ]

var options = new chrome.Options().addExtensions('chrome-minified-dev.crx');

options.username = username;
options.password = authkey;

var driver = new webdriver.Builder().
  withCapabilities(options).
  build();

function checkPopUp() {
  // driver.getTitle()
  // .then(function(title) {
  //      console.log("The title is: " + title)
  //  });
  driver.get('https://secure-oldnavy.gap.com/buy/shopping_bag.do');
  // // driver.getTitle().then(function(title) {
  // //     console.log(title);
  // });
  driver.findElement(By.id('piggyPromptTryCodes')).then(function(element){
    console.log(element);
  });

  return webdriver.until.titleIs('Piggy Extension Auto-Pop Test');
}

function handleFailure(err) {
     console.error('Something went wrong!\n', err.stack, '\n');
     quitDriver();
}

function quitDriver() {
    console.log("End..");
    driver.close();
}

//driver.get('http://crossbrowsertesting.github.io/selenium_example_page.html');
driver.wait(checkPopUp, 1000).then(quitDriver, handleFailure);

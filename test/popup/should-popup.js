var webdriverio = require('webdriverio');
var assert = require('assert');
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;

var fs = require('fs');

chai.use(chaiWebdriver(browser));

describe('Piggy auto-pop test run', function() {
  beforeEach(function() {
    browser.url('https://www.samsclub.com/sams/cart/cart.jsp?eventId=scCheckout&sortProperties=-lastModifiedDate');
  });

  it('Piggy should not pop-up', function() {
    var title = /^https:\/\/www\.([\w]+)\.com.*/.exec(browser.getUrl())[1];
    var screenshotPath = './screenShots/';
    var filePath = screenshotPath + title + '.png';

    expect('#piggyPromptTryCodes').to.be.there();

    browser.saveScreenshot(filePath);
    console.log('Screenshot: ' + filePath + ', saved!');
  });
});

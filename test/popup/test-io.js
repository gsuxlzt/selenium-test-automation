// var webdriverio = require('webdriverio');
// var assert = require('assert');
// var chai = require('chai');
// var chaiWebdriver = require('chai-webdriverio').default;
//
// var fs = require('fs');
//
// chai.use(chaiWebdriver(browser));
//
// describe('Piggy auto-pop test run', function() {
//     beforeEach(function() {
//       browser.url('https://www.samsclub.com/sams/cart/cart.jsp?eventId=scCheckout&sortProperties=-lastModifiedDate');
//     });
//
//     it('Piggy should pop-up', function() {
//       var title = /^https:\/\/www\.([\w]+)\.com.*/.exec(browser.getUrl())[1];
//       var screenshotPath = './screenShots/';
//       var filePath = screenshotPath + title + '.png';
//
//       expect('#piggyPromptTryCodes').to.be.there();
//         // .then(fs.appendFile('testResultLogs.txt', 'Hello content!', function (error) {
//         //   if(error) { throw error };
//         //   console.log('Saved!');
//         // });
//       // );
//       // browser.log(type);
//
//       browser.saveScreenshot(filePath);
//       console.log('Screenshot: ' + filePath + ', saved!');
//       //browser.logger.info('Screenshot saved!');
//
//       //.replace(/(https:\/\/www\.)(\.com)/g, '')
//
//       //expect('#piggyPromptTryCodes').to.equal('#piggyPromptTryCodesZZZ');
//
//       //expect($('#piggyPromptTryCodes')).to.exist;
//       //expect($('#piggyPromptTryCodes')).to.not.exist;
//
//       // should.exist('#piggyPromptTryCodes');
//
//       // expect('#piggyPromptTryCode').dom.to.exist;
//       // expect('#piggyPromptTryCode').dom.to.not.exist;
//
//       //expect('#piggyPromptTryCode').to.be.there();
//
//       // expect(function() {
//       //   window.document('#piggyPromptTryCodeszzz').waitForExists(20000);
//       // });
//
//       //expect(browser.elements('#piggyPromptTryCodes')).to.not.exist;
//
//       //browser.url('https://www.walmart.com/');
//       //browser.getTitle().should.be.equal('WebdriverIO - WebDriver bindings for Node.js');
//       // wait(30000);
//     });
//
//     // it('Piggy should not pop-up', function() {
//     //   expect('#piggyPromptTryCodes').to.be.there();
//     // });
// });

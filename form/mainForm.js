/**
 * Created by Aleksandr Kuzmin on 09.11.2017.
 */
var mainForm = function() {
    var common = ('../config/common.js'),
        elementSearch = element(by.id('lst-ib')),
        url = 'https://www.google.ru/';

    this.getSite = function () {
        browser.get(url);
    };

    this.sizeForm = function () {
        elementSearch.getSize().then(function (size) {
            console.log('width: ' + size.width);
        });
    };

    this.addText = function () {
        elementSearch.sendKeys('HELLO');
    };

    this.buttonClick = function () {
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    };


    this.haveScroll = function () {
       browser.executeScript("return (document.body.offsetHeight> window.innerHeight);").then(function (result){
           console.log('Наличие скрола на странице: ' + result);
       });

    };

    this.loseCours = function () {
        browser.executeScript("document.getElementById('lst-ib').blur();");
    };

};
module.exports = mainForm;
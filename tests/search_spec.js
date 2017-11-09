describe ("Google test", function(){
    var common = require('../config/common.js'),
        mainForm = new common.mainForm();
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();

    beforeEach(function () {
        mainForm.getSite();
    });

    // 1. Авторизация;
    it("Google search", function () {
        mainForm.sizeForm();
        mainForm.haveScroll();
        mainForm.addText();
        mainForm.buttonClick();
        mainForm.loseCours();
        mainForm.haveScroll();
    });
});
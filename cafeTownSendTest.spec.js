// Created by Shoaib Rehman on 12-02-2020
// Protractor E2E test to Cover login, user creation, edition and deletion technical assesment purpose

let page = require('./pageObject');
var user, userUpdated;

describe('Protractor E2E Test to login, create, edit and delete User', function () {

    it('should have a title', function () {
        //get Url
        browser.get(page.mainUrl);
        page.waitForLoad()
        //verify Title
        expect(browser.getTitle()).toEqual(page.title);
    });

    it('Should login with provided credential and verify that user is logged in', function () {

        //login with given username and password
        page.username.sendKeys('Luke');
        page.passwd.sendKeys('Skywalker');
        page.submit.click();
        //wait for a page to load
        page.waitForLoad()
        //expect(page.logout).toContain('Logout');

    });

    it('Should create user and verify that the user has been created', function () {
        // click on create user button
        page.adduser.click();
        //wait for a page to load
        page.waitForLoad()

        // Fill form with user details
        page.firstName.sendKeys('Shoaib');
        page.lastName.sendKeys('Rehman');
        page.startDate.sendKeys('2020-02-11');
        page.email.sendKeys('shoaib@fakemail.com');

        //click submit and wait for page to load

        page.createBtn.click();
        page.waitForLoad();

        //verify that the user is created by checking user name in list of user
        let value;
        user = 'Shoaib Rehman';
        page.allEmpList.getText()
            .then(function (result) {
                for (index = 0; index < result.length; ++index) {
                    value = result[index];
                    expect(value.match(/Shoaib Rehman/g)).toContain(user);
                }

            });
    });


    it('Edit User and verify that the user has been updated', function () {
        //click on created user to edit username and verfiy that the user is updated
        page.empList.click();
        page.editBtn.click();
        page.waitForLoad();
        page.firstName.clear();
        page.firstName.sendKeys('Shoaib-Updated');
        page.updateBtn.click();
        page.allEmpList.getText()
            .then(function (result) {
                for (index = 0; index < result.length; ++index) {
                    value = result[index];
                    userUpdated = 'Shoaib-Updated Rehman'
                    expect(value.match(/Shoaib-Updated Rehman/g)).toContain(userUpdated)
                }
            });
    });
    it('Should delete user and verify that the user has been deleted', function () {

        page.waitForLoad()
        page.empListUpdated.click();
        page.delBtn.click();
        let Alert = browser.switchTo().alert();
        Alert.accept();
        page.waitForLoad();
        browser.sleep(2000);
        expect(page.allEmpList.getSize.length).toEqual(0);

    });

});

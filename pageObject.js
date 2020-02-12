module.exports = {

    mainUrl: 'http://cafetownsend-angular-rails.herokuapp.com/login',
    title: 'CafeTownsend-AngularJS-Rails',
    username: element(by.model('user.name')),
    passwd: element(by.model('user.password')),
    submit: element(by.deepCss('#login-form > fieldset > button')),
    adduser: element(by.id('bAdd')),
    firstName: element(by.model('selectedEmployee.firstName')),
    lastName: element(by.model('selectedEmployee.lastName')),
    startDate: element(by.model('selectedEmployee.startDate')),
    email: element(by.model('selectedEmployee.email')),
    createBtn: element(by.css('body > div > div > div > form > fieldset > div > button:nth-child(2)')),
    waitForLoad: function () {
        browser.waitForAngular();
        browser.sleep(1000);
    },
    empList: element(by.id('employee-list', 'Shoaib Rehman')),
    empListUpdated: element(by.id('employee-list', 'Shoaib-Updated Rehman')),
    allEmpList: element.all(by.id('employee-list')),
    editBtn: element(by.id('bEdit')),
    delBtn: element(by.id('bDelete')),
    updateBtn: element(by.buttonText('Update')),
    logout : element(by.cssContainingText('body > div > header > div > p.main-button', 'Logout'))
};

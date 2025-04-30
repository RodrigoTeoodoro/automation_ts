const casual = require("casual");
const { checkLogButton } = require("../pages/home/homePage.js");
const {random_log_values} = require("../utils/log.js");
const { I, loginPage, homePage} = inject();

casual.define('log', random_log_values);

/*BeforeSuite(() => {})as
Before ( ()  => {
    //console.log('LogManagement automation')
});
AfterSuite(() => {})
After ( () => {
});*/
/*
Feature('login').tag('@login');
Scenario('Successful_login',  ( ) => {
   // I.runOnAndroid(() => {
      //  I.click('io.selendroid.testapp:id/buttonTest');
   //  });
    login_page.doLogin('devuser@elimbsdevel', 'devuser')
    home_page.checkLogButton()
    // or login_page.doLogin (module_tester@elimbsdevel, module_tester) with the user and password set in login_page.js
    // I.wait(5)  //  I.fillField('~Username Input', user)   // I.fillField('~Password Input', password)  // I.tap('~Login Button')
});
Scenario('Unsuccessful_login',  ( ) => {

    login_page.loginWithError('module_tester@elimbsdevel123', 'module_tester') 
     
 }).retry(1);

Feature('Log_Access');

Scenario('Log_ManagementAccess', () => {

    login_page.doLogin('module_tester@elimbsdevel', 'module_tester')
    home_page.checkLogButton()
    home_page.logManagementOptions()
 
}).tag('@Log_Access');
*/


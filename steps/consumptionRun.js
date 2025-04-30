const casual = require("casual");
const { checkLogButton } = require("../pages/home/homePage.js");
const { random_log_values } = require("../utils/log.js");
const { I, loginPage, homePage } = inject();

const { consumptionLogs, consumptionLogsConsum, consumptionLogDeck } = inject();

casual.define('log', random_log_values);

Feature('Consumption Tickets - Logs');

Scenario('Consumption Logs', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    //homePage.checkLogButton();
    homePage.logManagementOptions();
    consumptionLogs.ConsumptionStepOne();
    consumptionLogs.ConsumptionStepTwo();

});

Scenario('Consumption Comsumed Logs', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    //homePage.checkLogButton();
    homePage.logManagementOptions();
    consumptionLogsConsum.ConsumptionStepOne();
    consumptionLogsConsum.ConsumptionStepTwo();

});


Scenario('Consumption Log Deck', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
   // homePage.checkLogButton();
    homePage.logManagementOptions();
    consumptionLogDeck.ConsumptionStepOne();
    consumptionLogDeck.ConsumptionStepTwo();

}); 
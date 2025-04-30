const casual = require("casual");
const { checkLogButton } = require("../pages/home/homePage.js");
const {random_log_values} = require("../utils/log.js");
const { I, loginPage, homePage } = inject();

const { receivingLogs } = inject();

casual.define('log', random_log_values);

/*
Feature('Receiving Tickets - Logs');

Scenario('Receiving Logs', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    receivingLogs.ReceivingStepOne();
    receivingLogs.ReceivingStepTwo();
    receivingLogs.ReceivingStepThree();

});*/
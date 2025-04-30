const casual = require("casual");
const { checkLogButton } = require("../pages/home/homePage.js");
const {random_log_values} = require("../utils/log.js");
const { I, loginPage, homePage} = inject();

const { transferLogs } = inject();

casual.define('log', random_log_values);
/*
Feature('Transfer Tickets - Logs');

Scenario('Transfer Logs', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    transferLogs.TransferStepOne();
    transferLogs.TransferStepTwo();
    transferLogs.TransferStepThree();

}); */
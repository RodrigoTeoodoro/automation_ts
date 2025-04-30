const casual = require("casual");
const { checkLogButton } = require("../pages/home/homePage.js");
const { random_log_values } = require("../utils/log.js");
const { I, loginPage, homePage } = inject();
const { gatewoodLogs, gwLoggerFrAddCost, gwLoggerFrDeductCost, gwLoggerGvAddCost, gwLoggerGvDeductCost, gwLoggerNvAddCost, gwLoggerNvDeductCost } = inject();
const { gwTruckerFrAddCost, gwTruckerFrDeductCost, gwTruckerGvAddCost, gwTruckerGvDeductCost, gwTruckerNvAddCost, gwTruckerNvDeductCost } = inject();
const { gwMinMaxLenDiaY, gwMinMaxLenDiaN } = inject();
const { gwEditLog } = inject();
const { gatewoodRenumber } = inject();
const { gwUpdateFullLoadPrice } = inject();

casual.define('log', random_log_values);

/*
Feature('Scale Tickets - Logs');

Scenario('GW Only Logs', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    gatewoodLogs.scaleTicketsGatewood();
    gatewoodLogs.scaleTicketsPageThree();
    gatewoodLogs.scaleTicketsPageFour();

});  //.tag('@ScaleTicket GW Only Logs');//.retry(1);



Feature('Scale Tickets - Logger');
Scenario('GW Logger Add Cost and Flate Rate', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    gwLoggerFrAddCost.scaleTicketsGatewood();
    gwLoggerFrAddCost.scaleTicketsPageTwo();
    gwLoggerFrAddCost.scaleTicketsPageThree();
    gwLoggerFrAddCost.scaleTicketsPageFour();

});//.tag('@LoggerAddCostFlateRate');//.retry(1);

Scenario('GW Logger Deduct Cost and Flate Rate', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    gwLoggerFrDeductCost.scaleTicketsGatewood();
    gwLoggerFrDeductCost.scaleTicketsPageTwo();
    gwLoggerFrDeductCost.scaleTicketsPageThree();
    gwLoggerFrDeductCost.scaleTicketsPageFour();

});//.tag('@LoggerDeductCostFlatRate');

Scenario('GW Logger Add Cost and Gross Volume', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    gwLoggerGvAddCost.scaleTicketsGatewood();
    gwLoggerGvAddCost.scaleTicketsPageTwo();
    gwLoggerGvAddCost.scaleTicketsPageThree();
    gwLoggerGvAddCost.scaleTicketsPageFour();

});//.tag('@LoggerAddCostGrossVolume');

Scenario('GW Logger Deduct Cost and Gross Volume', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    gwLoggerGvDeductCost.scaleTicketsGatewood();
    gwLoggerGvDeductCost.scaleTicketsPageTwo();
    gwLoggerGvDeductCost.scaleTicketsPageThree();
    gwLoggerGvDeductCost.scaleTicketsPageFour();

});//.tag('@LoggerDeductCostGrossVolume');

Scenario('GW Logger Add Cost and Net Volume', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    gwLoggerNvAddCost.scaleTicketsGatewood();
    gwLoggerNvAddCost.scaleTicketsPageTwo();
    gwLoggerNvAddCost.scaleTicketsPageThree();
    gwLoggerNvAddCost.scaleTicketsPageFour();

});//.tag('@LoggerAddCostNetVolume');

Scenario('GW Logger Deduct Cost and Net Volume', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    gwLoggerNvDeductCost.scaleTicketsGatewood();
    gwLoggerNvDeductCost.scaleTicketsPageTwo();
    gwLoggerNvDeductCost.scaleTicketsPageThree();
    gwLoggerNvDeductCost.scaleTicketsPageFour();

});//.tag('@LoggerDeductCostNetVolume');

Feature('Scale Tickets - Trucker');
Scenario('GW Trucker Add Cost and Flate Rate', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    gwTruckerFrAddCost.scaleTicketsGatewood();
    gwTruckerFrAddCost.scaleTicketsPageTwo();
    gwTruckerFrAddCost.scaleTicketsPageThree();
    gwTruckerFrAddCost.scaleTicketsPageFour();

});//.tag('@TruckerAddCostFlateRate');

Scenario('GW Trucker Deduct Cost and Flate Rate', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    gwTruckerFrDeductCost.scaleTicketsGatewood();
    gwTruckerFrDeductCost.scaleTicketsPageTwo();
    gwTruckerFrDeductCost.scaleTicketsPageThree();
    gwTruckerFrDeductCost.scaleTicketsPageFour();

});//.tag('@TruckerDeductCostFlateRate');

Scenario('GW Trucker Add Cost and Gross Volume', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    gwTruckerGvAddCost.scaleTicketsGatewood();
    gwTruckerGvAddCost.scaleTicketsPageTwo();
    gwTruckerGvAddCost.scaleTicketsPageThree();
    gwTruckerGvAddCost.scaleTicketsPageFour();

});//.tag('@TruckerAddCostGrossVolume');

Scenario('GW Trucker Deduct Cost and Gross Volume', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    gwTruckerGvDeductCost.scaleTicketsGatewood();
    gwTruckerGvDeductCost.scaleTicketsPageTwo();
    gwTruckerGvDeductCost.scaleTicketsPageThree();
    gwTruckerGvDeductCost.scaleTicketsPageFour();

});//.tag('@TruckerDeductCostGrossVolume');

Scenario('GW Trucker Add Cost and Net Volume', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    gwTruckerNvAddCost.scaleTicketsGatewood();
    gwTruckerNvAddCost.scaleTicketsPageTwo();
    gwTruckerNvAddCost.scaleTicketsPageThree();
    gwTruckerNvAddCost.scaleTicketsPageFour();

});//.tag('@TruckerAddCostNetVolume');

Scenario('GW Trucker Deduct Cost and Net Volume', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    gwTruckerNvDeductCost.scaleTicketsGatewood();
    gwTruckerNvDeductCost.scaleTicketsPageTwo();
    gwTruckerNvDeductCost.scaleTicketsPageThree();
    gwTruckerNvDeductCost.scaleTicketsPageFour();

});//.tag('@TruckerDeductCostNetVolume');


Feature('Scale Tickets - Out of Range');
Scenario('GW Keep Min Max Len Dia OutOfRange ', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    gwMinMaxLenDiaY.scaleTicketsGatewood();
    gwMinMaxLenDiaY.scaleTicketsPageThree();
    gwMinMaxLenDiaY.scaleTicketsPageFour();

});//.tag('@KeepWithOutOfRange');

Scenario('GW Cancel Min Max Len Dia OutOfRange ', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    gwMinMaxLenDiaN.scaleTicketsGatewood();
    gwMinMaxLenDiaN.scaleTicketsPageThree();
    gwMinMaxLenDiaN.scaleTicketsPageFour();
});

//.tag('@CancelOutOfRange');


Feature('Scale Tickets - Edit Log');

Scenario('GW Edit Log ', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    gwEditLog.scaleTicketsGatewood();
    gwEditLog.scaleTicketsPageThree();
    gwEditLog.scaleTicketsPageFour();
});


Feature('Scale Tickets - Renumber');

Scenario('GW Renumber ', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    gatewoodRenumber.scaleTicketsGatewood();
    gatewoodRenumber.scaleTicketsPageThree();
    gatewoodRenumber.scaleTicketsPageFour();
});


Feature('Scale Tickets - Update Full Load Price');

Scenario('GW Update Price ', () => {

    I.wait(5)
    loginPage.doLogin('rteodoro@lldevel', 'Teo@pittsburgh.01');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    gwUpdateFullLoadPrice.scaleTicketsGatewood();
    gwUpdateFullLoadPrice.scaleTicketsPageThree();
    gwUpdateFullLoadPrice.scaleTicketsPageFour();
});*/
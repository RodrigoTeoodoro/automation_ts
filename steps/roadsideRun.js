const casual = require("casual");
const { checkLogButton } = require("../pages/home/homePage.js");
const {random_log_values} = require("../utils/log.js");
const { I, loginPage, homePage, roadside} = inject();
const { gatewoodLogs, gwLoggerFrAddCost, gwLoggerFrDeductCost, gwLoggerGvAddCost, gwLoggerGvDeductCost, gwLoggerNvAddCost, gwLoggerNvDeductCost} = inject();
const { gwTruckerFrAddCost, gwTruckerFrDeductCost, gwTruckerGvAddCost, gwTruckerGvDeductCost, gwTruckerNvAddCost, gwTruckerNvDeductCost} = inject();
const { gwMinMaxLenDiaY, gwMinMaxLenDiaN } = inject();
const { gwEditLog } = inject();
/*

casual.define('log', random_log_values);
Scenario('Roadside', () => {

    //var randomtag = logs.log
    I.wait(5);
    loginPage.doLogin('devuser@lldevel', 'devuser');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    roadside.RoadsideStepOne();
    roadside.RoadsideStepTwo();
    roadside.RoadsideStepThree();
    roadside.RoadsideStepFour();
  //log_page.scaleTicketsPageThree();

}) //.tag('@ScaleTicket Roadside').retry(3);

*/
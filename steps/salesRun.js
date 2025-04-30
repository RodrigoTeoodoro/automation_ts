
const casual = require("casual");
const { checkLogButton } = require("../pages/home/homePage.js");
const {random_log_values} = require("../utils/log.js");
const { I, loginPage, homePage, sales} = inject();
const { gatewoodLogs, gwLoggerFrAddCost, gwLoggerFrDeductCost, gwLoggerGvAddCost, gwLoggerGvDeductCost, gwLoggerNvAddCost, gwLoggerNvDeductCost} = inject();
const { gwTruckerFrAddCost, gwTruckerFrDeductCost, gwTruckerGvAddCost, gwTruckerGvDeductCost, gwTruckerNvAddCost, gwTruckerNvDeductCost} = inject();
const { gwMinMaxLenDiaY, gwMinMaxLenDiaN } = inject();
const { gwEditLog } = inject();

casual.define('log', random_log_values);
/*
Scenario('Sales', () => {

    //var randomtag = logs.log
    I.wait(5);
    loginPage.doLogin('devuser@lldevel', 'devuser');
    homePage.checkLogButton();
    homePage.logManagementOptions();
    sales.SalesStepOne();
    sales.SalesStepTwo();
    sales.SalesStepThree();
    sales.SalesStepFour();
    
}).tag('@ScaleTicket Sales');
*/
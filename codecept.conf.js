const server = require('./server/server')

const { setHeadlessWhen } = require('@codeceptjs/configure');

// Permite rodar no modo headless quando a variável de ambiente for definida
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  output: './output',
  helpers: {
    Appium: {
      protocol: "https",
      host: "hub-cloud.browserstack.com",
      port: 443,
      path: "/wd/hub",
      app: "bs://634e9a0f1f200e3e11b353d79f6f920a7b1ef121",
      user: "rodrigoteodoro_xnwLHj",
      key: "2FxFdYUt3KCRQGsevj3R",
      platform: "Android",
      desiredCapabilities: {
        platformName: "android",
        "appium:deviceName": "Google Pixel 5",
        "appium:platformVersion": "12.0",
        "appium:automationName": "UiAutomator2",
       // "appium:app": "bs://634e9a0f1f200e3e11b353d79f6f920a7b1ef121",
        "bstack:options": {
          deviceName: "Google Pixel 5",
          osVersion: "12.0",
          projectName: "DMSi Log App",
          buildName: "Log App flow",
          sessionName: "Log App Test",
          realMobile: true,
          appiumVersion: "2.0.0"
        }
      }
    },
  
  
    /*
    Appium: {
      app: "bs://5ebba947b9fdedb8aada9369c0226585fa2d1005",
      host: "hub-cloud.browserstack.com",
      port: 4444,
      platform: "android",
      user: "rodrigoteodoro_xnwLHj",
      key: "2FxFdYUt3KCRQGsevj3R",
      device: "Google Pixel 5",
      // device: "Samsung Galaxy S21",
      platformVersion: "12",
      project: 'DMSi Log App',
      name: 'Log App flow',
      unicodeKeyboard: true,
      resetKeyboard: true,
      hideKeyboard: true,
      os_version: '11.0',

      // Melhorias sugeridas
      noReset: false, // Garante um reset antes de cada execução

      // disableIdLocatorAutocompletion: true, // Evita mudanças nos localizadores

    },
    //Phisical device (Honeywell)
    /* Appium: {
         platform: 'Android',
         desiredCapabilities: {
           app: 'c:/Users/RodrigoTeodoro/Documents/apk/build/application-630b5e61-8049-4fcf-9480-02d1413fac48.apk',
           appPackage: 'com.dmsi.elimbs',
           appActivity: 'MainActivity',
           deviceName: 'android',
           platformVersion: '10'
         }
       }*/
    //Emulador
    /*
    Appium: {
      app: 'C:/Users/RodrigoTeodoro/Documents/apk/build/ac:\Users\RodrigoTeodoro\Documents\apk\build\application-fb2e61f4-2e43-46b8-a9c5-95a7b41b303a.apk',
      platform: 'Android',
      desiredCapabilities: {
        appPackage: 'com.dmsi.elimbs',
        appActivity: 'MainActivity',
        //deviceName: 'Honeywell CK65',
        deviceName: 'Nexus_4',
        platformVersion: '11',
        noReset: false,
        //fullReset: true,
        restart: true,
       

      }
    }*/
  },

  include: {
    I: './steps_file.js',
    loginPage: './pages/login/loginPage.js',
    homePage: './pages/home/homePage.js',
    gatewoodLogs: './pages/gatewood/gatewoodLogs.js',
    gwLoggerFrAddCost: './pages/gatewood/gwLoggerFrAddCost.js',
    gwLoggerFrDeductCost: './pages/gatewood/gwLoggerFrDeductCost.js',
    gwLoggerGvAddCost: './pages/gatewood/gwLoggerGvAddCost.js',
    gwLoggerGvDeductCost: './pages/gatewood/gwLoggerGvDeductCost.js',
    gwLoggerNvAddCost: './pages/gatewood/gwLoggerNvAddCost.js',
    gwLoggerNvDeductCost: './pages/gatewood/gwLoggerNvDeductCost.js',
    gwTruckerFrAddCost: './pages/gatewood/gwTruckerFrAddCost.js',
    gwTruckerFrDeductCost: './pages/gatewood/gwTruckerFrDeductCost.js',
    gwTruckerGvAddCost: './pages/gatewood/gwTruckerGvAddCost.js',
    gwTruckerGvDeductCost: './pages/gatewood/gwTruckerGvDeductCost.js',
    gwTruckerNvAddCost: './pages/gatewood/gwTruckerNvAddCost.js',
    gwTruckerNvDeductCost: './pages/gatewood/gwTruckerNvDeductCost.js',
    gwMinMaxLenDiaY: './pages/gatewood/gwMinMaxLenDiaY.js',
    gwMinMaxLenDiaN: './pages/gatewood/gwMinMaxLenDiaN.js',
    gwEditLog: './pages/gatewood/gwEditLog.js',
    gatewoodRenumber: './pages/gatewood/gatewoodRenumber.js',
    gwUpdateFullLoadPrice: './pages/gatewood/gwUpdateFullLoadPrice.js',
    roadside: './pages/roadside/roadside.js',
    sales: './pages/sales/sales.js',
    receivingLogs: './pages/receiving/receivingLogs.js',
    transferLogs: './pages/transfer/transferLogs.js',
    consumptionLogs: './pages/consumption/consumptionLogs.js',
    consumptionLogsConsum: './pages/consumption/consumptionLogsConsum.js',
    consumptionLogDeck: './pages/consumption/consumptionLogDeck.js',
    utils: './utils/log',
  },
  mocha: {},
  bootstrap: async () => {
    await server.start();
  },
  timeout: 600,
  teardown: async () => {
    await server.stop();
  },
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']

  },
  plugins: {
      screenshotOnFail: { enabled: true },
      retryFailedStep: { enabled: true, retries: 5 },
      tryTo: { enabled: false },
      retryTo: { enabled: false },
      eachElement: { enabled: true },
      pauseOnFail: {},
    
        
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
    pattern: 'wait.*',
    timeout: 0
  },
  {
    pattern: 'amOnPage',
    timeout: 0
  }
  ],

  rerun: {
    // how many times all tests should pass
    minSuccess: 4,

    // how many times to try to rerun all tests
    maxReruns: 5,
  },

  name: 'Automation',
  tests: './steps/**/*.js',//'./steps/**/*.js', // ./steps/**/*.js for general folders or ./steps/*_test.js' for specific
  //bootstrapAll: '../bootstrap/prepareDataResources.js',
  multiple: {
    parallel: {
      chunks: 20
    }
  }
}
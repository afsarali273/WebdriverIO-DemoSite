
import allureReporter from '@wdio/allure-reporter'
import cucumberJson from 'wdio-cucumberjs-json-reporter';


let allure_config = {
  outputDir: 'allure-results',
  disableWebdriverStepsReporting: true,
  disableWebdriverScreenshotsReporting: true
};
exports.config = {
  //
  // ====================
  // Runner Configuration
  // ====================


  specs: ["./features/**/*.feature"],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],

  maxInstances: 10,

  capabilities: [
    {
      maxInstances: 5,
      //
      browserName: "chrome",
      acceptInsecureCerts: true,
    },
  ],
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "trace",
  //
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  //     webdriver: 'info',
  //     '@wdio/appium-service': 'info'
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  // baseUrl: "http://localhost",
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 100000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  //services: ["chromedriver", [TimelineService]],
  services: ["chromedriver"],
  // host: "localhost",
  // port: 4444,
  // path: "/wd/hub",

  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [
          "--headless",
          "--no-sandbox",
          "--disable-gpu",
          "--disable-dev-shm-usage",
          "--window-size=1920,1080",
        ],
      },
    },
  ],

  framework: "cucumber",

  reporters: [
    "spec", ['cucumberjs-json', {
      jsonFolder: 'reporter/json/',
      language: 'en',
    },
    ],
    ["allure", allure_config]
  ],

  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: ["./features/step-definitions/**/*.step.js"],
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: [],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    format: ["pretty"],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: "",
    // <number> timeout for step definitions
    timeout: 60000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false,
  },

  //
  // =====
  // Hooks

  // onPrepare: function (config, capabilities) {
  // },

  // onWorkerStart: function (cid, caps, specs, args, execArgv) {
  // },

  //   beforeSession: function (config, capabilities, specs) {
  //   },

  before: function (capabilities, specs) {
    require("expect-webdriverio");
    require("chai");
    global.wdioExpect = global.expect;
    global.expect = chai.expect;
  },

  // beforeCommand: function (commandName, args) {
  // },

  beforeFeature: function (uri, feature) {
    browser.maximizeWindow();
    allureReporter.addFeature(feature.name)
  },


  beforeScenario: function (world) {
    allureReporter.addStory(world.name);
  },

  // beforeStep: function (step, scenario) {
  // },

  afterStep: async function (step, scenario, result) {
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
  },

  // afterScenario: function (world, result) {
  // },

  // afterFeature: function (uri, feature) {
  // },

  // afterCommand: function (commandName, args, result, error) {
  // },

  // after: function (result, capabilities, specs) {
  // },

  // afterSession: function (config, capabilities, specs) {
  // },

  // onComplete: function(exitCode, config, capabilities, results) {
  // },

  //onReload: function(oldSessionId, newSessionId) {
  //}
};

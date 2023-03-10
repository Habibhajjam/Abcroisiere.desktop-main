/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
 const cucumber = require('cypress-cucumber-preprocessor').default

/**
 * @type {Cypress.PluginConfig}
 */
 module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'chromium') {
      launchOptions.args.push('--disable-dev-shm-usage');
    }

    return launchOptions;
  });
  // `config` is the resolved Cypress config
  const configFile = config.env.configName || 'pr';

  config = require(`../config/${configFile}.json`)

  //return getConfigurationByFile(file)
  on('file:preprocessor', cucumber());
  return config;
}



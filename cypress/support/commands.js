// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })



Cypress.Commands.add(
  "isElementExists",
  (elem) =>
    new Promise((resolve, failure) => {
      /// here if  ele exists or not
      cy.get("body", {
        timeout: 1000,
      })
        .then(($body) => {
          // synchronously query from body
          // to find which element was created
          if (
            $body.find(elem).length
          ) {
            // input was found, do something else here
            return resolve(true);
          }
    
          // else assume it was textarea
          return resolve(false);
        })
    })
)



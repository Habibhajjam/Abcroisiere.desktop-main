import {
    Given,
    When,
    Then,
    And,
    Before,
} from "cypress-cucumber-preprocessor/steps";

Before(() => {


    cy.clearCookies();

    cy.window().then((w) => (w.beforeReload = true));

    cy.window().should("have.prop", "beforeReload", true);

    cy.get("body", {

        timeout: 1000,

    })

        .then(($body) => {

            if (

                $body.find(".didomi-exterior-border .didomi-popup__exterior-border")

                    .length

            ) {

                return true;

            }

            return false;

        })

        .then((foundIt) => {

            if (foundIt) {

                cy.get("#didomi-notice-agree-button").click({

                    force: true,

                });

            }

        });

});

// Background
Given("I open abcroisiere website", () => {
    cy.visit(Cypress.env('AB_URL'),
        {
            onBeforeLoad: (win) => {
                win.ontouchstart = true
            }
        })
});
When('check the bloc Footer', () => {
    cy.get('#bloc-footer').scrollIntoView().should('be.visible')
});
Then('check the links of bloc footer', () => {
  
    cy.get('#faq_linkholder > a > u').scrollIntoView().click().wait(2000)
    //cy.url().should('contains', 'questions-frequentes').window.close()
    
   cy.get('#nous_contacter_linkholder > a > u').scrollIntoView().click()
    //cy.url({ decode: true }).should('contain', 'informations')
    
    

    
    });
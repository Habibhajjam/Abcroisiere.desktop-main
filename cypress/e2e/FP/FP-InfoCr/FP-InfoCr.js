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




When('I click on a cartridge', () => {
    cy.get('[href="/croisiere-italie-ibiza-espagne-1820742.html"] > .croisiere').click()
});
Then('I Check all the info bloc', () => {
    cy.wait(1000)
    cy.get('h1').scrollIntoView().should('be.visible')
    cy.get('.ship').scrollIntoView().should('be.visible')
    cy.get('.duration').scrollIntoView().should('be.visible')
    cy.get('.departure-city').scrollIntoView().should('be.visible')
    cy.get('.avantages').scrollIntoView().should('be.visible')
});

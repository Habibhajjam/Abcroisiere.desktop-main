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
When('check the bloc TCC', () => {
    cy.get('#bloc-push-armateur').scrollIntoView().should('be.visible')
    });
    Then('check the title', () => {
        cy.get('#bloc-push-armateur > h2').scrollIntoView().should('be.visible')
        });
        And('check the colone Costa', () => {
            cy.get('.list-push-armateur > :nth-child(1) > .offres').should('be.visible')
            cy.get('.list-push-armateur > :nth-child(1) > .btn').should('be.visible').click()
            cy.url({ decode: true }).should('contain', 'croisiere-costa-croisieres')
            cy.go('back')
        });
        And('check the colone MSC', () => {
            cy.get('.list-push-armateur > :nth-child(2) > .offres').should('be.visible')
            cy.get('.list-push-armateur > :nth-child(2) > .btn').should('be.visible').click()
            cy.url({ decode: true }).should('contain', 'https://msc.abcroisiere.com/')
            cy.go('back')
        });
        And('check the colone Croisieurope', () => {
            cy.get('.list-push-armateur > :nth-child(3) > .offres').should('be.visible')
            cy.get('.list-push-armateur > :nth-child(3) > .btn').should('be.visible').click()
            cy.url({ decode: true }).should('contain', 'croisiere-croisieurope')
            cy.go('back')
        });
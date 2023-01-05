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
When('check the bloc CAT', () => {
    cy.get('#bloc-thematiques').scrollIntoView().should('be.visible')
    });
    Then('check the title', () => {
        cy.get('#bloc-thematiques > h2').scrollIntoView().should('be.visible')
        });
        And('check the icon famille', () => {
            cy.get('.row > :nth-child(1) > a > .titre').should('be.visible').click()
            cy.url({ decode: true }).should('contain', 'croisiere-famille-enfant-gratuit')
            cy.go('back')
        });
        And('check the icon bien etre', () => {
            cy.get(':nth-child(2) > a > .titre').should('be.visible').click()
            cy.url({ decode: true }).should('contain', 'croisiere-bien-etre')
            cy.go('back')
        });
        And('check the icon mini croisiere', () => {
            cy.get(':nth-child(3) > a > .titre').should('be.visible').click()
            cy.url({ decode: true }).should('contain', 'mini-croisiere')
            cy.go('back')
        });
        And('check the icon tout inclus', () => {
            cy.get(':nth-child(4) > a > .titre').should('be.visible').click()
            cy.url({ decode: true }).should('contain', 'croisiere-all-inclusive')
            cy.go('back')
        });
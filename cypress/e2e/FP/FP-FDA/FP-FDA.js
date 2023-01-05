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


//  Scenario: HP_AC01: FP-Fil-Ariane

When('I click on a cartridge', () => {
    cy.get('[href="/croisiere-italie-ibiza-espagne-1820742.html"] > .croisiere').click()
});
Then('I Check that the fil Ariane is present', () => {
    cy.wait(1000)
    cy.get('.fp > :nth-child(2)').should('be.visible')
});

And('Check that the first level of the Fil Ariane is clickable and return to the HP', () => {
    cy.get('#fil-ariane > :nth-child(1) > a').should('be.visible')
    cy.get('#fil-ariane > :nth-child(1) > a').click({ force: true })
});
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
Then('I Check the box prix is present', () => {
    cy.wait(1000)
    cy.get('.currency').should('be.visible')
});
And('I Check the detail de box', () => {
    cy.get('.currency > .price__info').should('be.visible')
    cy.get('.btn-price').should('be.visible').click()
    cy.wait(2000)
    cy.get('.calendar__container').should('be.visible')
});

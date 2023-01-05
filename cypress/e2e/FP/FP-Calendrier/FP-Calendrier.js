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
Then('I Check the presence of bloc calendrier', () => {
    cy.wait(1000)
    cy.get('.calendar__container').scrollIntoView().should('be.visible')
});
And('I Check all the bloc calendrier', () => {
    cy.get('.calendar__selection-title > h2').should('be.visible')
    cy.get('.calendar__tax-label').should('be.visible')
    cy.get('#calendar-date-input').should('be.visible')
    cy.get('#calendar-date-input').should('be.visible')
    cy.get('#typesCabines > :nth-child(1)').should('be.visible')
    cy.get('#typesCabines > .fin').should('be.visible')
  //  cy.get('#\31 1 > .imgCabineThumb').should('be.visible')
    //cy.get('#\31 1 > .cabin-label').should('be.visible')
});
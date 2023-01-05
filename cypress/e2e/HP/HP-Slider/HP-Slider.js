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
When('check the bloc slider', () => {
    cy.xpath('/html/body/div[6]/div[2]/div[2]').should('be.visible')
});
Then('check the pictos', () => {
    cy.xpath('/html/body/div[6]/div[2]/div[2]/div/div[2]/button[1]').should('be.visible')
    cy.xpath('/html/body/div[6]/div[2]/div[2]/div/div[2]/button[2]').should('be.visible')

});

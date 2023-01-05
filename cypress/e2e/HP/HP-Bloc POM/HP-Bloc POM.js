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
Then('check the h2',() => {
    cy.get('#bloc-bons-plans > h2').should('be.visible')
});
Then('check the bloc POM',() => {
    cy.get('#bloc-bons-plans').should('be.visible')
});
And('check the visibility of offers',() => {
    cy.get(':nth-child(1) > div.img-top > .obflink > .img-top').should('be.visible')
    cy.get(':nth-child(2) > div.img-top > .obflink > .img-top').should('be.visible')
    cy.get(':nth-child(3) > div.img-top > .obflink > .img-top').should('be.visible')
});

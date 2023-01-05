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
When('check the bloc SEO', () => {
    cy.get('.bloc-1').scrollIntoView().should('be.visible')
    cy.get('.bloc-2').should('be.visible')
    cy.get('.right > .bloc').should('be.visible')
    });
    Then('check the links of bloc SEO', () => {
        cy.get('[href="/fr/croisieres/croisiere-depart-nice/ville,FR,NCE/"]').scrollIntoView().click()
        cy.url({ decode: true }).should('contain', 'croisiere-depart-nice')
        cy.go("back")
        cy.get('[href="/fr/croisieres/croisiere-iles-baleares/destination,53,637/"]').click()
        cy.url({ decode: true }).should('contain', 'croisiere-iles-baleares')
        cy.go("back")
        });

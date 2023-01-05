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
When('check the bloc top Comp', () => {
    cy.get('#bloc-top-compagnies').should('be.visible')
    });
    Then('check the title', () => {
        cy.get('.row > h3').should('be.visible')
        });
        And('check tho logos of Comp', () => {
            cy.get('.armateurImage7').should('be.visible')
            cy.get('.armateurImage13').should('be.visible')
            cy.get('.armateurImage34').should('be.visible')
            cy.get('.armateurImage11').should('be.visible')
            cy.get('.armateurImage30').should('be.visible')
            cy.get('.armateurImage72').should('be.visible')
            cy.get('.armateurImage29').should('be.visible')
            cy.get('.armateurImage28').should('be.visible')
        });
        And('check Costa', () => {
            cy.get('.armateurImage7').click()
            cy.url({ decode: true }).should('contain', 'croisiere-costa-croisieres')
            cy.go('back')
        });
        And('check MSC', () => {
            cy.get('.armateurImage13').click()
            cy.url({ decode: true }).should('contain', 'msc.abcroisiere')
            cy.go('back')
        });
        And('check NCL', () => {
            cy.get('.armateurImage34').click()
            cy.url({ decode: true }).should('contain', 'croisiere-norwegian-cruise-line')
            cy.go('back')
        });
        And('check RC', () => {
            cy.get('.armateurImage11').click()
            cy.url({ decode: true }).should('contain', 'croisiere-royal-caribbean')
            cy.go('back')
        });
        And('check CE', () => {
            cy.get('.armateurImage30').click()
            cy.url({ decode: true }).should('contain', 'croisiere-croisieurope')
            cy.go('back')
        });
        And('check CC', () => {
            cy.get('.armateurImage72').click()
            cy.url({ decode: true }).should('contain', 'croisiere-celestyal-cruises')
            cy.go('back')
        });
        And('check PC', () => {
            cy.get('.armateurImage29').click()
            cy.url({ decode: true }).should('contain', 'croisiere-princess-cruises')
            cy.go('back')
        });
        And('check CXC', () => {
            cy.get('.armateurImage28').click()
            cy.url({ decode: true }).should('contain', 'croisiere-celebrity-cruises')
            cy.go('back')
        });

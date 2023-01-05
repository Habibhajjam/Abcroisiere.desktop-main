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


//  Scenario: HP_AC01: FP-Bloc-Images

When('I click on a cartridge', () => {
    cy.get('[href="/croisiere-italie-ibiza-espagne-1820742.html"] > .croisiere').click({ force: true })
});

Then('Check that the image block is present on the FP', () => {
    cy.get('.multimedia__img-container').should('be.visible')
});

And('Check the slider', () => {

    cy.get('.carousel > .owl-carousel > .owl-nav > .owl-next > .chevron__box').should('be.visible')
    cy.get('.carousel > .owl-carousel > .owl-nav > .owl-prev > .chevron__box').should('be.visible')
    cy.get('.carousel__overlay-btn > .btn').should('be.visible').should('be.visible').click()
});

And('Check the diaporama', () => {
    cy.wait(2000)
    cy.get('.nav-multimedia-menu').should('be.visible')
    cy.get('.active > :nth-child(1) > .img-nav').should('be.visible')
    cy.get('.media-thumbs').should('be.visible')
    cy.get('.multimedia-content > .owl-carousel > .owl-nav > .owl-prev > .chevron__box').should('be.visible')
    cy.get('.multimedia-content > .owl-carousel > .owl-nav > .owl-next > .chevron__box').should('be.visible')
    cy.get('.diaporama__btn-close > .diaporama__svg').click({ force: true })
})
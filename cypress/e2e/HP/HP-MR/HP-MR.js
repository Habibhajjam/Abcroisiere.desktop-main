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
    cy.visit(Cypress.env('AB_URL'))
       
        
});
When('check the bloc MR', () => {
    cy.get('.mr__form').should('be.visible')
    });
   Then('check the popup destinations', () => {
    cy.wait(2000)
     cy.get('.mr__form-homepage .mr__form-where').click({force:true}).wait(200)
     cy.get('#top-destination-53').click()
   });
     And('check the popup date', () => {
        cy.get('#mr-field-date').click()
        //cy.get('.radiobtn').check()
    });
    And('check the popup VDD', () => {
        cy.wait(2000)
        cy.get('#mr-field-port').click({force:true}).wait(200)
        cy.get('[portid="88"]').click()
        cy.get('.btn-value').click()
    });
    And('check the popup companies', () => {
        cy.wait(2000)
        cy.get('#mr-field-compagnie').click({force:true}).wait(200)
       // cy.get('.element-popup-selected > .overlay').click()
        cy.get('.mr__popup-compagnies-footer > .btn-validate-container > .btn-validate > .btn-value').click()
    });
    And('check the button rechercher', () => {
        cy.wait(2000)
        cy.get('.mr__form-search').click({force:true}).wait(200)
       });

    
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
When('check the Menu',() => {
    cy.get('.bg-color-transparent').should('be.visible') 
    cy.get('.nav > :nth-child(3) > a').should('be.visible')
    cy.get(':nth-child(4) > [href="https://msc.abcroisiere.com/"]').should('be.visible')  
    cy.get('.nav > :nth-child(7) > a').should('be.visible')
    cy.get('[href="https://croisiere-fluviale.abcroisiere.com/"]').should('be.visible')
    cy.get('.nav > :nth-child(9) > a').should('be.visible')
    cy.get('h1').should('be.visible')
});
Then('check destinations',() => { 
    cy.xpath('/html/body/div[5]/div[2]/nav/ul/li[1]/a').click()
    cy.url({ decode: true }).should('contain', 'https://www.abcroisiere.com/fr/croisieres/croisiere-maritime/')
    cy.go('back')
});
And('check promotion',() => { 
    cy.xpath('/html/body/div[5]/div[2]/nav/ul/li[2]/a').click()
    cy.url({ decode: true }).should('contain', 'https://www.abcroisiere.com/fr/croisieres/croisiere/destination,0,0/')
    cy.go('back')
});
And('check DM',() => { 
    cy.get('.nav > :nth-child(3) > a').click()
    cy.url({ decode: true }).should('contain', 'https://www.abcroisiere.com/fr/croisieres/croisiere-derniere-minute/')
    cy.go('back')
});
And('check MSC',() => { 
    cy.get(':nth-child(4) > [href="https://msc.abcroisiere.com/"]').click()
    cy.url({ decode: true }).should('contain', 'https://msc.abcroisiere.com/')
    cy.go('back')
});
And('check Costa',() => { 
    cy.xpath('/html/body/div[5]/div[2]/nav/ul/li[5]/a').click()
    cy.url({ decode: true }).should('contain', 'https://www.abcroisiere.com/fr/croisieres/croisiere-costa-croisieres/')
    cy.go('back')
});
And('check Comp',() => { 
    cy.xpath('/html/body/div[5]/div[2]/nav/ul/li[6]/a').click()
    cy.url({ decode: true }).should('contain', 'https://www.abcroisiere.com/fr/guide-compagnie-maritime/')
    cy.go('back')
});
And('check V&C',() => { 
    cy.get('.nav > :nth-child(7) > a').click()
    cy.url({ decode: true }).should('contain', 'https://www.abcroisiere.com/idees-croisieres/operation-speciale/')
    cy.go('back')
});
And('check fluviales',() => { 
    cy.get('[href="https://croisiere-fluviale.abcroisiere.com/"]').click()
    cy.url({ decode: true }).should('contain', 'https://croisiere-fluviale.abcroisiere.com/')
    cy.go('back')
});
And('check luxe',() => { 
    cy.get('.nav > :nth-child(9) > a').click()
    cy.url({ decode: true }).should('contain', 'https://www.abcroisiere.com/fr/croisieres/croisiere-luxe/')
    cy.go('back')
});
And('check the h1',() => { 
    cy.get('h1').should('be.visible')
});

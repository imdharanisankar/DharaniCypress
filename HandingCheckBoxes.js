/// <reference types = "Cypress"/>

describe("Handing different cases", function(){

    it("handing Check boxes", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //To check if checkbox is checked or Not
        // to check if the first option is selected.
        cy.get(':nth-child(4)>fieldset>:nth-child(2)>input').check().should('be.checked').and('have.value','option1')
        // To uncheck
        cy.get(':nth-child(4)>fieldset>:nth-child(2)>input').uncheck().should('not.be.checked')
        //To check all the checkboxes available in the page.
        cy.get('input[type="checkbox"]').check()
        cy.get('input[type="checkbox"]').uncheck()
        //TO check only one checkbox, check function will take value as an argument
        cy.get('input[type="checkbox"]').check(['option2'])
        cy.get('input[type="checkbox"]').uncheck()
        //TO check one or two checkbox, check function will take value as an argument
        cy.get('input[type="checkbox"]').check(['option2', 'option1'])
        cy.get('input[type="checkbox"]').uncheck()
    })
})
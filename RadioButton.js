/// <reference types = "Cypress"/>

describe("Handing different cases", function(){

    it("handing Static dropdowns", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //To select radio button
    cy.get(':nth-child(3)>:nth-child(1)>fieldset>label>input')
        .check(['radio2'])
        .should('be.checked')
        .and('have.value', 'radio2')

       
    })
})
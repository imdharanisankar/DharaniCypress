/// <reference types = "Cypress"/>

describe("Handing childtabs cases", function(){

    it("hAlertHanding", function(){

        //removeAttr is a function to remove attribute from DOM
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        // to go back to previous page and to grab the URL
        cy.url().should('include', 'rahulshettyacademy')
        cy.go('back')
        //to go foward
        cy.go('forward')

    })
})
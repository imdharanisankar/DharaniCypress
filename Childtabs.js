/// <reference types = "Cypress"/>

describe("Handing childtabs cases", function(){

    it("hAlertHanding", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').invoke('removeAttr', 'target').click()

    })
})
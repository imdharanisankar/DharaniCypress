/// <reference types = "Cypress"/>



describe("Handing childtabs cases", function(){

    it("Webtable", function(){

        //Web Tables
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')
        // to click on invisible element (without click on the mouse hover)
        cy.contains('Top').click({force:true})
        

    })
})
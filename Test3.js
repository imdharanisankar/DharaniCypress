/// <reference types="Cypress"/>


describe('MyFirsttestsuite', function(){
    it("my First test case", function(){
        //To open a web page
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        // to find text box and type something on it
        cy.get('.search-keyword').type('ca')
    })
})
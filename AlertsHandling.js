/// <reference types = "Cypress"/>

describe("Handing different cases", function(){

    it("hAlertHanding", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //cypress will handle alerts automatically
    cy.get(':nth-child(3)>fieldset>#alertbtn')
        .click()

    cy.get(':nth-child(3)>fieldset>#confirmbtn').click()

    //Windows:alert

    cy.on('window:alert',(str)=>{
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    //windows:confirm
    cy.on('window:confirm',(str)=>{
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })

       
    })
})
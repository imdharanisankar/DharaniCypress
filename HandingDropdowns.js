/// <reference types = "Cypress"/>

describe("Handing different cases", function(){

    it("handing Static dropdowns", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //To select the value from dropdown
        // to check if the second option is selected.
        cy.get(':nth-child(3)>fieldset>select').select('option2').should('have.value', 'option2')
       
    })
    it("handing dynamic dropdowns", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //To select the value from dropdown
        // to check if the second option is selected.
        cy.get(':nth-child(3)>:nth-child(2)>fieldset>input').type('ind')
        cy.get('.ui-menu-item>div').each(($el, index, list) =>{
            if($el.text() === "India"){
                cy.wrap($el).click()
            }
        }
        )
        // to check if India is selected
        cy.get(':nth-child(3)>:nth-child(2)>fieldset>input').should('have.value', 'India')
    })
})
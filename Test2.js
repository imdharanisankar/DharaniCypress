/// <reference types="Cypress"/>


describe('MyFirsttestsuite', function(){
    it("my First test case", function(){
        //To open a web page
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        // to find text box and type something on it
        cy.get('.search-keyword').type('ca')

        cy.get('.product').should('have.length', 5)
        //to wait
        cy.wait(2000)
        // to check if 4 products are being displayed as a result and also to consider only the visible items
        cy.get('.product:visible').should('have.length', 4)

        //Parent Child joining
        cy.get('.products').find('.product').should('have.length', 4)

        //Click on Add to card button of 2nd product

        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

        //Looping

        cy.get('.products').find('.product').each(($el, index, $list) => {
            const text1 = $el.find('h4.product-name').text()

            if(text1.includes('Cashews')){
                cy.wrap($el).find('[type = "Button"]').click()
            }
        }

        

        )
        cy.get('.brand.greenLogo').then(function(logoelement){
            cy.log(logoelement.text())
        })
    })

})
/// <reference types = "Cypress"/>



describe("Handing childtabs cases", function(){

    it("Webtable", function(){

        //Web Tables
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('tr>td>:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()

            if(text.includes("Master Selenium Automation in simple Python Language")){
                cy.get('tr>td>:nth-child(2)').eq(index).next().then(function(price){
                   const pricetag = price.text()
                expect(pricetag).to.equal('25')

                })
            }
        })
        

    })
})
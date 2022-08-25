/// <reference types="Cypress"/>


describe('StarStationSuite', function(){
    it("StarStationLogin", function(){
        cy.visit("https://new-qa.estarstation.com/sslogin/#/login")
        cy.get('tbody>:nth-child(2)>td>input').type('EPSGROUP')
        cy.get('tbody>:nth-child(4)>td>#username').type('IDHARANI')
        cy.get('#contBtnId').click()
        cy.get('tbody>:nth-child(6)>td>#password').type('Welcome@2023')
        cy.get('#loginBtnId').click()
        cy.wait(2000)
    })

    it('selectingTR', function(){
        cy.wait(20000)
        cy.get('.appMIcon').click()
        cy.get('.ng-binding').contains('Transaction Research').click()
    })
    it('providingFFdetails', function(){
        cy.wait(4000)
        cy.get('#trSearchCardNumber').type('4138880000007255')
        cy.get(':nth-child(1) > .manualTrigger').click()
        
        //Find element for search button
       cy.get('.SearchPaneFooter >:nth-child(1)').click()
    })
    it('ProvidingFFDetails-Part2', function(){

        cy.get('.HeaderIcon.free-formIcon').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').select('PUR - Purchase')
        cy.get('#FFTransactionAmount').type('10.50')
        cy.get('#FFAccountType').select('object:2508')
        cy.get('#FFTerminalSequenceId').type('123456')
        cy.get('#FFSwitchTerminalID').type('IND252')
        cy.get('#FFLocalTerminalID').type('local')
        cy.get('.DetailPaneFooter>:nth-child(2)>:nth-child(1)').click()
        cy.wait(12000)
    })

})
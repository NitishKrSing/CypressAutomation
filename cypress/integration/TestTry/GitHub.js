/// <reference types="cypress" />

describe('Automate the Register Module', function() {

    beforeEach('Lunch the browser and navigate to url', function() {
              

    })
    it('Verify Register Page', function() {
        cy.visit(Cypress.env('Github'))
       cy.get('ul>li').each(function ($lis){
             cy.log('Li Element test is'+$lis.text() )

       }).then(function($lis){
           expect($lis)
           cy.wait(30000)

       })

    })
})
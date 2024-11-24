describe('CT08 - Login com senha inválido', () => {
    it('error', () => {
        cy.visit(Cypress.env("url_site") + "/login")
        cy.get('input[id=Matricula]').type(Cypress.env('matricula'))
        cy.get('input[id=Password]').type(`123{enter}`, { log: false })
        cy.get('div.alert.alert-danger.alert-dismissable').should('contain.text', 'A senha não confere');
    })
})

describe('CT08 - Login com matrícula inválido', () => {
    it('error', () => {
        cy.visit(Cypress.env("url_site") + "/login")
        cy.get('input[id=Matricula]').type('matricula')
        cy.get('input[id=Password]').type(`${Cypress.env('senha')}{enter}`, { log: false })
        cy.get('div.alert.alert-danger.alert-dismissable').should('contain.text', 'Usuario invalido.');
    })
})

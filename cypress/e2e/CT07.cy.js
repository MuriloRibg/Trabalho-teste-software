describe('CT07- Login com sucesso ', () => {
  it('passes', () => {
    cy.visit(Cypress.env("url_site") + "/login")
    cy.get('input[id=Matricula]').type(Cypress.env('matricula'))
    cy.get('input[id=Password]').type(`${Cypress.env('senha')}{enter}`, { log: false })
    cy.url().should('include', '/Aluno/MinhasTurmas')
    cy.get('p[class=perfil-aluno-matricula]').should('contain', Cypress.env('matricula'))
    cy.getCookie('ai_session').should('exist')
  })
})

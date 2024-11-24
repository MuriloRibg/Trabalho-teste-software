// -- This is a parent command --
/* 
    Exemplo de como usar o método abaixo:
    - cy.login(Cypress.env('matricula'), Cypress.env('senha'))
*/
Cypress.Commands.add('login', (matricula, senha) => {
    cy.visit("https://aluno.uvv.br/login")
    cy.get('input[id=Matricula]').type(matricula)
    cy.get('input[id=Password]').type(`${senha}{enter}`, { log: false })
    cy.url().should('include', '/Aluno/MinhasTurmas')
    cy.get('p[class=perfil-aluno-matricula]').should('contain', matricula)
    cy.getCookie('ai_session').should('exist')
}
)

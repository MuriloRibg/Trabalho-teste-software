describe('CT15 - Mandatory fields not filled in the address update', () => {
    it('should display an error when mandatory fields are not filled', () => {
        cy.visit(Cypress.env("url_site") + "/login");
        cy.get('input[id=Matricula]').type(Cypress.env('matricula'));
        cy.get('input[id=Password]').type(`${Cypress.env('senha')}{enter}`, { log: false });

        cy.get('a[href="/Aluno/InformacoesPessoais/"]').click();
        cy.url().should('include', '/Aluno/InformacoesPessoais/');

        cy.contains('Alterar').click();

        cy.get('input[id=Cep]').clear(); 
        cy.get('input[id=Endereco]').clear(); 
        cy.get('input[id=Numero]').clear(); 
        cy.get('input[id=Apartamento]').clear({ force: true });
        cy.get('input[id=Complemento]').clear(); 
        cy.get('input[id=Bairro]').clear(); 
        cy.get('select[id=Estado]').select('Espírito Santo');
        cy.get('select[id=Cidade]').select('Selecione...');
        cy.get('input[id=Telefone1]').clear(); 
        cy.get('input[id=Telefone2]').clear(); 
        cy.get('input[id=Telefone3]').clear(); 
        cy.get('input[id=Celular]').clear(); 
        cy.get('input[id=Email]').clear(); 

        cy.contains('Salvar').click();

        cy.get('.alert.alert-danger.alert-dismissable').should('be.visible');

    });
});

describe("testar site tech4me", () => {

    it("acessar a pagina", () => {

        cy.visit("http://google.com.br");
    });

    it('Digitar Pesquisa no Google', () => {
        cy.get('input[name="q"]').type("Teste de Velocidade {enter}");
    });

    it('Realizar o teste', () => {
        cy.contains('EXECUTAR TESTE DE VELOCIDADE').click();
    });



});
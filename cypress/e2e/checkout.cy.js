describe("Landing Page Banda Feitosa Jr - Testes de Interface", () => {
  beforeEach(() => {
    // Visita a página inicial na raiz do projeto
    cy.visit("./frontend/index.html");
  });

  it("Deve exibir a Hero Section com o nome da banda", () => {
    cy.get("#hero").should("be.visible");
    cy.get("h1").contains("Feitosa Jr", { matchCase: false });
  });

  it("Deve validar a presença das seções obrigatórias", () => {
    cy.get("#agenda").should("exist");
    cy.get("#loja").should("exist");
    cy.get("#contato").should("exist");
  });

  it("Deve preencher o formulário de contato corretamente", () => {
    cy.get("#name").type("Fã Teste");
    cy.get("#email").type("fa@teste.com");
    cy.get("#message").type("Gostaríamos de um show na nossa cidade!");
    cy.get("#btn-enviar").should("be.visible");
  });

  it("Deve validar a existência do seletor de idiomas", () => {
    cy.get(".lang-selector").should("exist");
  });
});

describe("Fluxo de Checkout", () => {
  beforeEach(() => {
    // Carrega o arquivo localmente antes de cada teste
    cy.visit("./index.html");
  });

  it("Deve carregar a página inicial", () => {
    cy.get("h1").should("be.visible"); // Validação simples de carregamento
  });

  it("Deve aplicar desconto de 10% com o cupom PROMO10", () => {
    cy.get("#cep").type("01001000");
    cy.get("#cupom").type("PROMO10");
    cy.get("button").contains("Calcular").click(); // Melhor usar 'contains' se houver mais de um botão

    cy.get("#resultado")
      .should("be.visible")
      .and("contain", "Desconto Aplicado: 10%");
  });

  it("Deve exibir erro para CEP inválido (menos de 8 caracteres)", () => {
    cy.get("#cep").type("123");
    cy.get("button").contains("Calcular").click();

    cy.get("#resultado").should("be.visible").and("contain", "CEP Inválido");
  });

  it("Deve lidar com caracteres especiais no campo de cupom", () => {
    cy.get("#cep").type("01001000");
    cy.get("#cupom").type('<script>alert("hack")</script>');
    cy.get("button").contains("Calcular").click();

    cy.get("#resultado").should("be.visible").and("not.contain", "<script>");
  });
});

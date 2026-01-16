describe("Módulo de Checkout - SmartWatch v3", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("Deve aplicar desconto de 10% com o cupom PROMO10", () => {
    cy.get("#cep").type("01001000");
    cy.get("#cupom").type("PROMO10");
    cy.get("button").click();

    cy.get("#resultado")
      .should("be.visible")
      .and("contain", "Desconto Aplicado: 10%");
  });

  it("Deve exibir erro para CEP inválido (menos de 8 caracteres)", () => {
    cy.get("#cep").type("123");
    cy.get("button").click();

    cy.get("#resultado")
      .should("be.visible")
      .and("contain", "CEP Inválido")
      .and("have.class", "text-red-500");
  });

  // Simulação de IA: Testando comportamento inesperado (Input Malicioso)
  it("Deve lidar com caracteres especiais no campo de cupom", () => {
    cy.get("#cep").type("01001000");
    cy.get("#cupom").type('<script>alert("hack")</script>');
    cy.get("button").click();

    cy.get("#resultado").should("be.visible").and("not.contain", "<script>"); // Garante que não houve execução de script
  });
});

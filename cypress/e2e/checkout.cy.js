describe('Teste de Checkout da Banda Feitosa Jr', () => {
  beforeEach(() => {
    // Visita a página antes de cada teste
    cy.visit('./frontend/index.html')
  })

  it('Deve calcular o frete e aplicar o cupom FEITOSA10', () => {
    // Preenche o CEP
    cy.get('#cep').type('01001-000')
    // Preenche o Cupom
    cy.get('#cupom').type('FEITOSA10')
    // Clica no botão
    cy.get('button').contains('Calcular Total').click()
    // Verifica se o resultado apareceu com o desconto de 10%
    cy.get('#resultado').should('be.visible').and('contain', '10%')
  })

  it('Deve mostrar erro para CEP curto demais', () => {
    cy.get('#cep').type('123')
    cy.get('button').contains('Calcular Total').click()
    cy.get('#resultado').should('contain', 'CEP Inválido')
  })
})
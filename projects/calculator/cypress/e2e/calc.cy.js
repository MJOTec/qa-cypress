describe('Prueba de funcionalidad calculadora', () => {
  it('prueba de sumas', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.get('.component-display').first().should('have.text', '0')
    cy.contains('2').click()
    cy.get('.component-display').first().should('have.text', '2')
    cy.get(':nth-child(4) > .orange > button').click()
    cy.get('.component-display').first().should('have.text', '2')
    cy.contains('6').click()
    cy.get('.component-display').first().should('have.text', '6')
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '8')
  })
  it('prueba de multiplicacion', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.get('.component-display').first().should('have.text', '0')
    cy.contains('2').click()
    cy.get('.component-display').first().should('have.text', '2')
    cy.get(':nth-child(2) > .orange > button').click()
    cy.get('.component-display').first().should('have.text', '2')
    cy.contains('6').click()
    cy.get('.component-display').first().should('have.text', '6')
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '12')
  })
  it('prueba de division', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.get('.component-display').first().should('have.text', '0')
    cy.contains('6').click()
    cy.get('.component-display').first().should('have.text', '6')
    cy.get(':nth-child(1) > .orange > button').click()
    cy.get('.component-display').first().should('have.text', '6')
    cy.contains('2').click()
    cy.get('.component-display').first().should('have.text', '2')
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '3')
  })
})
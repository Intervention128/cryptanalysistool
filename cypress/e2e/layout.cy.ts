const baseUrl = 'http://localhost:5173/'

describe('cryptanalysistool', () => {
  it('should display the navbar', () => {
    cy.visit(baseUrl)
    cy.get('[data-testid="navbar"]').contains('CRYPTANALYSIS')
    cy.get('[data-testid="navbar"]').children('button').eq(1).should('have.attr', 'aria-label', 'help')
    cy.get('[data-testid="navbar"]').children('a').should('have.attr', 'aria-label', 'contribute')
  })

  it('should display the ciphertext input field', () => {
    cy.visit(baseUrl)
    cy.get('[data-testid="cipherinput"]').contains('Ciphertext input')
    cy.get('textarea').not('[aria-hidden="true"]').eq(0).should('have.attr', 'placeholder', 'Paste ciphertext here...')
  })

  it('should display the ciphertext output field', () => {
    cy.visit(baseUrl)
    cy.get('[data-testid="cipheroutput"]').contains('Result')
    cy.get('textarea').not('[aria-hidden="true"]').eq(1).should('have.attr', 'placeholder', 'Result will appear here')
  })

  it('should display the information field', () => {
    cy.visit(baseUrl)
    cy.get('[data-testid="information"').contains('Information')
    cy.get('[data-testid="information"]').children('button').should('have.attr', 'aria-label', 'add')
  })

  it('should display the graph field', () => {
    cy.visit(baseUrl)
    cy.get('[data-testid="graph"]').contains('Graph')
  })

  it ('should display the Fab for adding processors', () => {
    cy.visit(baseUrl)
    cy.get('[data-testid="noprocessors"]').contains('no processors installed')
    cy.get('[data-testid="addprocessor"]').should('exist')
  })
})

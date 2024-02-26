const baseUrl = 'http://localhost:5173/'

describe('cryptanalysistool', () => {
  it('should display the navbar', () => {
    cy.visit(baseUrl)
    cy.dataCy('navbar').contains('CRYPTANALYSIS')
    cy.dataCy('navbar').children('button').should('have.attr', 'aria-label', 'help')
    cy.dataCy('navbar').children('a').should('have.attr', 'aria-label', 'contribute')
  })

  it('should display the ciphertext input field', () => {
    cy.visit(baseUrl)
    cy.dataCy('cipherinput').contains('Ciphertext input')
    cy.dataCy('paste-ciphertext').should('contain', 'Paste')
    cy.dataCy('upload-ciphertext').should('contain', 'Upload')
    cy.dataCy('clear-ciphertext').should('contain', 'Clear')
  })

  it('should display the ciphertext output field', () => {
    cy.visit(baseUrl)
    cy.dataCy('cipheroutput').contains('Result')
    cy.dataCy('copy-ciphertext').should('contain', 'Copy')
    cy.dataCy('download-ciphertext').should('contain', 'Download')
  })

  it('should display the information field', () => {
    cy.visit(baseUrl)
    cy.dataCy('information').contains('Information')
    cy.dataCy('information').children('button').should('have.attr', 'aria-label', 'add')
  })

  it('should display the graph field', () => {
    cy.visit(baseUrl)
    cy.dataCy('graph').contains('Graph')
  })

  it ('should display the Fab for adding processors', () => {
    cy.visit(baseUrl)
    cy.dataCy('noprocessors').contains('no processors installed')
    cy.dataCy('addprocessor').should('exist')
  })
})

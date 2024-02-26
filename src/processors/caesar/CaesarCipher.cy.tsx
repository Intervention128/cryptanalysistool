import CipherTestFrame from '@cypress/component/CipherTestFrame'
import CaesarCipher from './CaesarCipher'

describe('CaesarCipher', () => {
  it('correctly decodes a message', () => {
    cy.mount(<CipherTestFrame Cipher={CaesarCipher} />)
    cy.dataCy('run').click()
    cy.dataCy('result').should('have.text', 'Mjqqt%\\twqi&')
    cy.dataCy('input-shift-value').clear().type('1')
    cy.dataCy('run').click()
    cy.dataCy('result').should('have.text', 'Ifmmp!Xpsme"')
  })
})

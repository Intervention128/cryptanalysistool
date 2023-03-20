import React from 'react'
import ProcessorFrame from '../../src/containers/processors/ProcessorFrame'

describe('ProcessorFrame', () => {
  it('renders its processor', () => {
    cy.mount(
      <ProcessorFrame
        name="test"
        processorId="CaesarCipher"
        mountedId="test"
      />,
    )
    cy.get('span').contains('test')
  })
})

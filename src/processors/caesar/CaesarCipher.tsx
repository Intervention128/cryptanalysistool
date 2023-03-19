import {forwardRef, useImperativeHandle} from 'react'
import type {ProcessHandle} from '../../types/ProcessHandle'

const CaesarCipher = forwardRef<ProcessHandle, object>((_, ref) => {
  CaesarCipher.displayName = 'CaesarCipher'

  useImperativeHandle(ref, () => ({
    run: (input: string) => {
      return input
    },
  }))

  return (
    <div>
      <h1>Caesar Cipher</h1>
    </div>
  )
})

export default CaesarCipher

import {forwardRef, useImperativeHandle} from 'react'
import type {ProcessHandle} from '../../types/ProcessHandle'

const CaesarCipher = forwardRef<ProcessHandle, never>((ref) => {
  CaesarCipher.displayName = 'CaesarCipher'

  useImperativeHandle(ref, () => ({
    process: (input: string) => {
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

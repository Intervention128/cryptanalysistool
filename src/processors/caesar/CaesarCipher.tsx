import {forwardRef, useImperativeHandle, useState} from 'react'
import type {ProcessHandle} from '../../types/ProcessHandle'

const CaesarCipher = forwardRef<ProcessHandle, object>((_, ref) => {
  CaesarCipher.displayName = 'CaesarCipher'
  const [shiftValue, setShiftValue] = useState(5)

  useImperativeHandle(ref, () => ({
    run: (input: string) => {
      return input.split('').map(char => String.fromCharCode(char.charCodeAt(0) + shiftValue)).join('')
    },
  }))

  return (
    <div>
      <h1>Caesar Cipher</h1>
      <input
        type="number"
        value={shiftValue}
        onChange={({target: {value}}) => setShiftValue(+value)}
      />
    </div>
  )
})

export default CaesarCipher

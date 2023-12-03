import {forwardRef, useImperativeHandle, useState} from 'react'
import {TextField} from '@mui/material'
import type {ProcessHandle} from '../../types/ProcessHandle'

const CaesarCipher = forwardRef<ProcessHandle>((_, ref) => {
  CaesarCipher.displayName = 'CaesarCipher'
  const [shiftValue, setShiftValue] = useState(5)

  useImperativeHandle(ref, () => ({
    run: async (input: string) => {
      return input.split('').map(char => String.fromCharCode(char.charCodeAt(0) + shiftValue)).join('')
    },
  }))

  return (
    <div>
      <TextField
        label="Shift Value"
        value={shiftValue}
        type="number"
        onChange={({target: {value}}) => setShiftValue(parseInt(value, 10))}
        data-cy="input-shift-value"
      />
    </div>
  )
})

export default CaesarCipher

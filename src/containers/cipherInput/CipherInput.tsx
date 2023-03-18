import {Card, CardContent, CardHeader, TextareaAutosize} from '@mui/material'
import type {FC} from 'react'

const CipherInput: FC = () => {
  return (
    <Card sx={{height: '30vh'}}>
      <CardHeader title="Ciphertext input" />
      <CardContent>
        <TextareaAutosize />
      </CardContent>
    </Card>
  )
}

export default CipherInput

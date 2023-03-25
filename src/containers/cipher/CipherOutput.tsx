import {Card, CardContent, CardHeader, TextareaAutosize} from '@mui/material'
import type {FC} from 'react'
import {useResult} from '../../redux/slices/cipherTextSlice'

const CipherOutput: FC = () => {
  const ciphertext = useResult()

  return (
    <Card>
      <CardHeader title="Result" />
      <CardContent>
        <TextareaAutosize
          placeholder="Result will appear here"
          minRows={12}
          maxRows={12}
          style={{width: '100%'}}
          value={ciphertext}
        />
      </CardContent>
    </Card>
  )
}

export default CipherOutput

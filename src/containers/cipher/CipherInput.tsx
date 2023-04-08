import {Card, CardContent, CardHeader, TextareaAutosize} from '@mui/material'
import type {ChangeEvent, FC} from 'react'
import {useState} from 'react'

const CipherInput: FC = () => {
  const [ciphertext, setCiphertext] = useState<string>('')

  return (
    <Card data-testid="cipherinput">
      <CardHeader title="Ciphertext input" />
      <CardContent>
        <TextareaAutosize
          placeholder="Paste ciphertext here..."
          minRows={12}
          maxRows={12}
          style={{width: '100%'}}
          value={ciphertext}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setCiphertext(event.target.value)}
        />
      </CardContent>
    </Card>
  )
}

export default CipherInput

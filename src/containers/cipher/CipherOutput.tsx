import {Card, CardContent, CardHeader, TextareaAutosize} from '@mui/material'
import type {ChangeEvent, FC} from 'react'
import {useState} from 'react'

const CipherOutput: FC = () => {
  const [ciphertext, setCiphertext] = useState<string>('')

  return (
    <Card data-testid="cipheroutput">
      <CardHeader title="Result" />
      <CardContent>
        <TextareaAutosize
          placeholder="Result will appear here"
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

export default CipherOutput

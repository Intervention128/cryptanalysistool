import {PlayArrow} from '@mui/icons-material'
import {Card, CardContent, CardHeader, IconButton, TextareaAutosize} from '@mui/material'
import type {ChangeEvent, FC} from 'react'
import {useAppDispatch} from '../../redux/hooks'
import {updateCipherText, useCipherText} from '../../redux/slices/cipherTextSlice'
import {runQueue} from '../../redux/slices/queueSlice'

const CipherInput: FC = () => {
  const ciphertext = useCipherText()
  const dispatch = useAppDispatch()
  const setCiphertext = ({target: {value}}: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateCipherText(value))
  }

  return (
    <Card data-cy="cipherinput">
      <CardHeader
        title="Ciphertext input"
        action={(
          <IconButton
            size="large"
            aria-label="run analysis"
            sx={{color: 'primary.main'}}
            onClick={() => dispatch(runQueue())}
          >
            <PlayArrow />
          </IconButton>
        )}
      />
      <CardContent>
        <TextareaAutosize
          placeholder="Paste ciphertext here..."
          minRows={12}
          maxRows={12}
          style={{width: '100%'}}
          value={ciphertext}
          onChange={setCiphertext}
        />
      </CardContent>
    </Card>
  )
}

export default CipherInput

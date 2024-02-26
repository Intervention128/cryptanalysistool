import {Clear, ContentPaste, PlayArrow, Upload} from '@mui/icons-material'
import {Box, Button, Card, CardContent, CardHeader, IconButton, TextField} from '@mui/material'
import {type ChangeEvent, type FC, useEffect, useRef, useState} from 'react'
import {useAppDispatch} from '../../redux/hooks'
import {updateCipherText, useCipherText} from '../../redux/slices/cipherTextSlice'
import {runQueue} from '../../redux/slices/queueSlice'

const CipherInput: FC = () => {
  const ciphertext = useCipherText()
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputFiles, setInputFiles] = useState<FileList | null>()
  const setCiphertext = ({target: {value}}: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateCipherText(value))
  }

  useEffect(() => {
    if (!inputFiles || inputFiles.length === 0) return
    const reader = new FileReader()
    reader.onload = () => dispatch(updateCipherText(reader.result))
    reader.readAsText(inputFiles[0])
  }, [inputFiles])

  return (
    <Card data-cy="cipherinput">
      <CardHeader
        title="Ciphertext input"
        action={(
          <IconButton
            size="large"
            sx={{color: 'primary.main'}}
            onClick={() => dispatch(runQueue())}
          >
            <PlayArrow />
          </IconButton>
        )}
      />
      <CardContent>
        <TextField
          id="cipher-input" label="Cipher Input" variant="filled"
          value={ciphertext} onChange={setCiphertext} fullWidth
          onKeyDown={({key}) => key === 'Enter' && dispatch(runQueue())}
        />
        <Box sx={{display: 'flex', width: '100%', gap: 2, mt: 2}}>
          <Button
            variant="contained" startIcon={<ContentPaste />}
            onClick={() => navigator.clipboard.readText().then(text => dispatch(updateCipherText(text)))}
          >
            Paste
          </Button>
          <Button
            variant="contained" startIcon={<Upload />}
            onClick={() => inputRef.current?.click()}
          >
            <input
              ref={inputRef} type="file" accept=".txt"
              style={{display: 'none'}}
              onChange={({target: {files}}) => setInputFiles(files)}
            />
            Upload
          </Button>
          <Button
            variant="contained" startIcon={<Clear />}
            onClick={() => dispatch(updateCipherText(''))}
          >
            Clear
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CipherInput

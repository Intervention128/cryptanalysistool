import {Box, Button, Card, CardContent, CardHeader, TextField} from '@mui/material'
import type {FC} from 'react'
import {ContentCopy, Download} from '@mui/icons-material'
import {useResult} from '@redux/slices/cipherTextSlice'

const CipherOutput: FC = () => {
  const ciphertext = useResult()
  const downloadAsTxt = () => {
    const blob = new Blob([ciphertext], {type: 'text/plain'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'ciphertext.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <Card data-cy="cipheroutput">
      <CardHeader title="Result" />
      <CardContent>
        <TextField
          id="cipher-output" label={ciphertext === '' && 'Cipher Output'} variant="outlined"
          value={ciphertext} fullWidth disabled
          multiline minRows={4}
        />
        <Box sx={{display: 'flex', width: '100%', gap: 2, mt: 2}}>
          <Button
            variant="contained" startIcon={<ContentCopy />} data-cy="copy-ciphertext"
            onClick={() => navigator.clipboard.writeText(ciphertext)}
          >
            Copy
          </Button>
          <Button
            variant="contained" startIcon={<Download />} data-cy="download-ciphertext"
            onClick={downloadAsTxt}
          >
            Download
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CipherOutput

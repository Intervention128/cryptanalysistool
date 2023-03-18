import {Grid} from '@mui/material'
import type {FC} from 'react'
import CipherInput from './CipherInput'
import CipherOutput from './CipherOutput'

const Cipher: FC = () => {
  return (
    <Grid item xs={4}>
      <Grid container spacing={1} direction="row">
        <Grid item xs={12}>
          <CipherInput />
        </Grid>
        <Grid item xs={12}>
          <CipherOutput />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Cipher

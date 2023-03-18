import {Card, CardHeader, Fab, Grid} from '@mui/material'
import type {FC} from 'react'

const Information: FC = () => {
  return (
    <Grid item xs={2}>
      <Card sx={{height: '100%', position: 'relative'}}>
        <CardHeader title="Information" />
        <Fab
          variant="extended" color="primary" aria-label="add"
          sx={{position: 'absolute', bottom: 15, right: 15}}
        />
      </Card>
    </Grid>
  )
}

export default Information

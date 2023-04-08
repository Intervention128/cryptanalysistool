import {Add} from '@mui/icons-material'
import {Card, CardHeader, Fab, Grid} from '@mui/material'
import type {FC} from 'react'

const Information: FC = () => {
  return (
    <Grid item xs={4}>
      <Card sx={{height: '100%', position: 'relative'}} data-testid="information">
        <CardHeader title="Information" />
        <Fab
          variant="extended"
          color="primary"
          aria-label="add"
          sx={{position: 'absolute', bottom: 15, right: 15, p: 0}}
        >
          <Add />
        </Fab>
      </Card>
    </Grid>
  )
}

export default Information

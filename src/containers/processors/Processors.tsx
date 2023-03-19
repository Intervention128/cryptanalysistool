import {Add} from '@mui/icons-material'
import {Card, CardActionArea, CardHeader, Fab, Grid} from '@mui/material'
import type {FC} from 'react'
import ProcessorFrame from './ProcessorFrame'

const Processors: FC = () => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        spacing={1}
        sx={{height: 'var(--height-content)', overflowY: 'auto', pb: 1}}
      >
        <Grid item xs={12}>
          <Card sx={{width: '100%'}}>
            <CardActionArea>
              <CardHeader title="There are no processors installed." subheader="Click this card or use the plus-button to add processors" />
            </CardActionArea>
          </Card>
        </Grid>
        <Fab sx={{position: 'absolute', bottom: 15, right: 15, p: 0}}>
          <Add />
        </Fab>
      </Grid>
    </Grid>
  )
}

export default Processors

import {Add} from '@mui/icons-material'
import {Card, CardActionArea, CardHeader, Fab, Grid} from '@mui/material'
import type {FC} from 'react'
import {useProcessors} from '../../redux/slices/processorsSlice'
import ProcessorFrame from './ProcessorFrame'

const Processors: FC = () => {
  const processors = useProcessors()

  return (
    <Grid item xs={12}>
      <Grid
        container
        spacing={1}
        sx={{height: 'var(--height-content)', overflowY: 'auto', pb: 1}}
      >
        <Grid item xs={12}>
          {processors.length === 0
            ? (
              <Card sx={{width: '100%'}} data-testid="noprocessors">
                <CardActionArea>
                  <CardHeader title="There are no processors installed." subheader="Click this card or use the plus-button to add processors" />
                </CardActionArea>
              </Card>
              )
            : processors.map(processor => <ProcessorFrame key={processor.mountedId} {...processor} />)}
        </Grid>
        <Fab sx={{position: 'absolute', bottom: 15, right: 15, p: 0}} data-testid="addprocessor">
          <Add />
        </Fab>
      </Grid>
    </Grid>
  )
}

export default Processors

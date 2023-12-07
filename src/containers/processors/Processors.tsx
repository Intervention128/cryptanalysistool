import {Add} from '@mui/icons-material'
import {Card, CardActionArea, CardHeader, Fab, Grid} from '@mui/material'
import type {FC} from 'react'
import {useState} from 'react'
import {useQueue} from '../../redux/slices/queueSlice'
import AddProcessor from './AddProcessor'
import ProcessorFrame from './ProcessorFrame'

const Processors: FC = () => {
  const processors = useQueue()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Grid item xs={12}>
        <Grid
          container
          spacing={1}
          sx={{
            height: 'var(--height-content)',
            overflowY: 'auto',
            pb: 1,
            alignContent: 'flex-start',
          }}
        >
          {processors.length === 0
            ? (
              <Grid item xs={12}>
                <Card data-testid="noprocessors">
                  <CardActionArea onClick={() => setModalOpen(true)}>
                    <CardHeader
                      title="There are no processors installed."
                      subheader="Click this card or use the plus-button to add processors"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              )
            : processors.map(processor => <ProcessorFrame key={processor.mountedId} {...processor} />)}
          <Fab
            sx={{position: 'absolute', bottom: 15, right: 15, p: 0}}
            onClick={() => setModalOpen(true)}
            data-testid="addprocessor"
          >
            <Add />
          </Fab>
        </Grid>
      </Grid>
      <AddProcessor open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

export default Processors

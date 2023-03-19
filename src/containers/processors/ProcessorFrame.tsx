import {Delete, Info} from '@mui/icons-material'
import {Card, CardContent, CardHeader, Grid, IconButton, Switch} from '@mui/material'
import type {FC} from 'react'
import {useRef} from 'react'
import type {Processors} from '../../processors/processors'
import processors from '../../processors/processors'
import type {ProcessHandle} from '../../types/ProcessHandle'

interface ProcessorFrameProps {
  name: string
  processorId: keyof Processors
}

const ProcessorFrame: FC<ProcessorFrameProps> = ({name, processorId}) => {
  const Processor = processors[processorId] // might need a copy here
  const processorRef = useRef<ProcessHandle>(null)

  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader
          title={name}
          action={(
            <>
              <IconButton aria-label="delete">
                <Delete />
              </IconButton>
              <Switch aria-label="active" />
              <IconButton aria-label="info">
                <Info />
              </IconButton>
            </>
        )}
        />
        <CardContent>{<Processor ref={processorRef} />}</CardContent>
      </Card>
    </Grid>
  )
}

export default ProcessorFrame

import {Delete, Info} from '@mui/icons-material'
import {Card, CardContent, CardHeader, Grid, IconButton, Switch} from '@mui/material'
import type {FC} from 'react'
import {useRef, useState} from 'react'

import type {AvailableProcessors} from '../../processors/processors'
import processors from '../../processors/processors'
import {useAppDispatch} from '../../redux/hooks'
import {deleteProcessor} from '../../redux/slices/queueSlice'
import type {ProcessHandle} from '../../types/ProcessHandle'

interface ProcessorFrameProps {
  processorId: keyof AvailableProcessors
  mountedId: string
}

const ProcessorFrame: FC<ProcessorFrameProps> = ({processorId, mountedId}) => {
  const Processor = processors[processorId] // might need a copy here
  const processorRef = useRef<ProcessHandle>(null)
  const [active, setActive] = useState(true)
  const dispatch = useAppDispatch()

  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader
          title={processorId}
          action={(
            <>
              <IconButton aria-label="delete" onClick={() => dispatch(deleteProcessor(mountedId))}>
                <Delete />
              </IconButton>
              <Switch
                aria-label="active"
                checked={active}
                onChange={() => setActive(active => !active)}
              />
              <IconButton aria-label="info">
                <Info />
              </IconButton>
            </>
        )}
        />
        <CardContent>
          <Processor ref={processorRef} />
        </CardContent>
      </Card>
    </Grid>
  )
}

export default ProcessorFrame

import {Delete, Info} from '@mui/icons-material'
import {Card, CardContent, CardHeader, Grid, IconButton, Switch} from '@mui/material'
import type {FC} from 'react'
import {useEffect, useRef} from 'react'
import type {Processors} from '../../processors/processors'
import processors from '../../processors/processors'
import {useAppDispatch} from '../../redux/hooks'
import {mountRunner} from '../../redux/slices/processorsSlice'
import type {ProcessHandle} from '../../types/ProcessHandle'

interface ProcessorFrameProps {
  name: string
  processorId: keyof Processors
  mountedId: string
}

const ProcessorFrame: FC<ProcessorFrameProps> = ({name, processorId, mountedId}) => {
  const Processor = processors[processorId] // might need a copy here
  const dispatch = useAppDispatch()
  const processorRef = useRef<ProcessHandle>(null)

  useEffect(() => {
    if (processorRef.current)
      dispatch(mountRunner({mountedId, runner: processorRef.current.run}))
  }, [processorRef, dispatch, mountedId])

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

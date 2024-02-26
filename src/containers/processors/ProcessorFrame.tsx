import {Delete, Info} from '@mui/icons-material'
import {Card, CardContent, CardHeader, CircularProgress, Grid, IconButton, Switch} from '@mui/material'
import type {FC} from 'react'
import {useEffect, useRef, useState} from 'react'
import {useAppDispatch} from '@redux/hooks'
import {updateResultAndContinue, useResult} from '@redux/slices/cipherTextSlice'
import {deleteProcessor, useCurrentRunner} from '@redux/slices/queueSlice'
import processors from '@processors/processors'
import type {AvailableProcessors} from '@processors/processors'
import type {ProcessHandle} from '@projecttypes/ProcessHandle'

interface ProcessorFrameProps {
  processorId: keyof AvailableProcessors
  mountedId: `${keyof AvailableProcessors}-${number}`
}

const ProcessorFrame: FC<ProcessorFrameProps> = ({processorId, mountedId}) => {
  const Processor = processors[processorId] // might need a copy here
  const processorRef = useRef<ProcessHandle>(null)
  const [active, setActive] = useState(true)
  const dispatch = useAppDispatch()
  const currentRunner = useCurrentRunner()
  const currentResult = useResult()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (currentRunner !== mountedId) return
    setLoading(true)
    if (active) {
      processorRef.current?.run(currentResult).then((result) => {
        dispatch(updateResultAndContinue(result))
        setLoading(false)
      })
    }
    else {
      dispatch(updateResultAndContinue(currentResult))
      setLoading(false)
    }
  }, [currentRunner, currentResult, active])

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
          {loading ? <CircularProgress color="inherit" /> : <Processor ref={processorRef} />}
        </CardContent>
      </Card>
    </Grid>
  )
}

export default ProcessorFrame

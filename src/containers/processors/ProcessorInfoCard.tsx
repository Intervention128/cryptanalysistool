import {Info} from '@mui/icons-material'
import {Card, CardActionArea, CardContent, CardHeader, IconButton} from '@mui/material'
import type {FC} from 'react'
import type {ProcessorInfo} from '../../processors/processors'
import {useAppDispatch} from '../../redux/hooks'
import {mountProcessor} from '../../redux/slices/queueSlice'

const ProcessorInfoCard: FC<ProcessorInfo> = ({name, processorId, description, madeBy}) => {
  const dispatch = useAppDispatch()

  return (
    <Card sx={{marginBottom: 1}}>
      <CardActionArea onClick={() => dispatch(mountProcessor(processorId))}>
        <CardHeader
          title={name}
          subheader={`By ${madeBy}`}
          action={(
            <IconButton aria-label="info">
              <Info />
            </IconButton>
        )}
        />
        <CardContent>{description}</CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProcessorInfoCard

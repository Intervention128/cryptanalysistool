import {Card, CardHeader, Grid} from '@mui/material'
import type {FC} from 'react'

const Graph: FC = () => {
  return (
    <Grid item xs={6}>
      <Card sx={{height: '100%'}}>
        <CardHeader title="Graph" />
      </Card>
    </Grid>
  )
}

export default Graph

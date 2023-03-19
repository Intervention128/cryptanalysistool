import {Card, CardHeader, Grid} from '@mui/material'
import type {FC} from 'react'

const Graph: FC = () => {
  return (
    <Grid item xs={12}>
      <Card sx={{height: '100%'}}>
        <CardHeader title="Graph" />
      </Card>
    </Grid>
  )
}

export default Graph

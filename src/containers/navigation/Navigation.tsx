import {AppBar, Typography} from '@mui/material'
import {Container} from '@mui/system'
import type {FC} from 'react'

const Navigation: FC = () => {
  return (
    <AppBar position="static">
      <Container>
        <Typography variant="h4" noWrap>
          Cryptanalysis tool
        </Typography>
      </Container>
    </AppBar>
  )
}

export default Navigation

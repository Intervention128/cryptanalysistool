import {GitHub, Help, PlayArrow} from '@mui/icons-material'
import {AppBar, Box, IconButton, Toolbar, Typography} from '@mui/material'
import {Container} from '@mui/system'
import type {FC} from 'react'

const Navigation: FC = () => {
  return (
    <AppBar position="static" sx={{height: 'var(--height-header)'}}>
      <Container>
        <Toolbar data-testid="navbar">
          <Typography variant="h5" noWrap>
            CRYPTANALYSIS
          </Typography>
          <Box sx={{flexGrow: 1}} />
          <IconButton
            size="large"
            aria-label="run analysis"
            sx={{color: 'primary.main'}}
          >
            <PlayArrow />
          </IconButton>
          <IconButton
            size="large"
            aria-label="help"
          >
            <Help />
          </IconButton>
          <IconButton
            href="https://github.com/Intervention128/cryptanalysistool"
            aria-label="contribute"
          >
            <GitHub />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navigation

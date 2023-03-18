import {ThemeProvider} from '@emotion/react'
import type {ThemeOptions} from '@mui/material'
import {CssBaseline, Grid, createTheme} from '@mui/material'
import type {FC} from 'react'
import Cipher from './containers/cipher/Cipher'
import Graph from './containers/graph/Graph'
import Information from './containers/information/Information'
import Navigation from './containers/navigation/Navigation'
import Processors from './containers/processors/Processors'

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#b71c1c',
      light: '#f44336',
      dark: '#d50000',
    },
    secondary: {
      main: '#fb8c00',
      light: '#ff9800',
      dark: '#e64a19',
    },
    background: {
      default: '#424242',
      paper: '#212121',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      secondary: 'rgba(255,255,255,0.6)',
      disabled: 'rgba(255,255,255,0.38)',
    },
  },
}

const theme = createTheme(themeOptions)

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline key="baseline" />
      <Navigation key="navbar" />
      <Grid
        key="app" container spacing={1}
        sx={{p: 1}}
      >
        <Cipher />
        <Information />
        <Processors />
        <Graph />
      </Grid>
    </ThemeProvider>
  )
}

export default App

import {ThemeProvider} from '@emotion/react'
import type {ThemeOptions} from '@mui/material'
import {CssBaseline, Grid, createTheme} from '@mui/material'
import type {FC} from 'react'
import CipherInput from './containers/cipherInput/CipherInput'
import Navigation from './containers/navigation/Navigation'

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#b71c1c',
    },
    secondary: {
      main: '#fb8c00',
    },
  },
  spacing: 5,
}

const theme = createTheme(themeOptions)

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline key="baseline" />
      <Navigation key="navbar" />
      <Grid key="app" container spacing={2}>
        <Grid item xs={4}>
          <CipherInput />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App

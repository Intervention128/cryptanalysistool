import {ThemeProvider} from '@emotion/react'
import {CssBaseline, Grid, createTheme} from '@mui/material'
import type {FC} from 'react'
import Cipher from './containers/cipher/Cipher'
import Graph from './containers/graph/Graph'
import Information from './containers/information/Information'
import Navigation from './containers/navigation/Navigation'
import Processors from './containers/processors/Processors'
import themeOptions from './Theme'

const theme = createTheme(themeOptions)

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navigation />
        <Grid
          container
          spacing={1}
          sx={{p: 1}}
        >
          <Grid item xs={6}>
            <Grid container spacing={1}>
              <Cipher />
              <Information />
              <Graph />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={1}>
              <Processors />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  )
}

export default App

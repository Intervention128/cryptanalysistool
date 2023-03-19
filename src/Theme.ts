import type {ThemeOptions} from '@mui/material'

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

export default themeOptions

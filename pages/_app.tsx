import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'

import {primaryColor,secondaryColor} from '@shared/data'

import {AnimatePresence} from 'framer-motion'

let theme = createTheme({
  palette:{
    primary:{
      main:primaryColor
    },
    secondary:{
      main:secondaryColor
    }
  }
})

function MyApp({ Component, pageProps }) {
  return <>
  <CssBaseline/>
  <ThemeProvider theme={theme}>
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  </ThemeProvider>
  </>
}

export default MyApp
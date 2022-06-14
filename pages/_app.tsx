import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'

import {primaryColor,secondaryColor} from '@shared/data'

import {AnimatePresence} from 'framer-motion'

import '@shared/all.css'

let theme = createTheme({
  palette:{
    primary:{
      main:primaryColor,
      contrastText:'#fff'
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
    {/* <AnimatePresence exitBeforeEnter> */}
      <Component {...pageProps} />
    {/* </AnimatePresence> */}
  </ThemeProvider>
  </>
}

export default MyApp

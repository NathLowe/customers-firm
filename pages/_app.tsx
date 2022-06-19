import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'

import {primaryColor,secondaryColor} from '@shared/data'

import {AnimatePresence} from 'framer-motion'

import store from '@shared/redux/store'
import {Provider} from 'react-redux'

import '@shared/all.css'
import Header from '@layouts/Header'
import Footer from '@layouts/Footer'

let theme = createTheme({
  palette:{
    primary:{
      main:primaryColor,
      contrastText:'#fff'
    },
    secondary:{
      main:secondaryColor,
      contrastText:'#fff'
    }
  }
})

function MyApp({ Component, pageProps }) {
  return <>
  <CssBaseline/>
  <ThemeProvider theme={theme}>
    <Provider store={store} >
    <div style={{display:'flex',flexDirection:'column',minHeight:'100vh'}}>
      <Header/>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer/>
    </div>
    </Provider>
  </ThemeProvider>
  </>
}

export default MyApp

import React from 'react'

import Head from 'next/head'

import Header from '@layouts/Header'

import {Container} from "@mui/material"
import Footer from './Footer'

const Layout = ({title,description,children,...other}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>

        <div style={{display:'flex',flexDirection:'column',minHeight:'100vh'}}>
          <Header/>
          <main style={{flex:1}}>
            <h1 style={{display:'none'}} >{title}</h1>
            {children}
          </main>
          <Footer/>
        </div>
    </>
  )
}

export default Layout
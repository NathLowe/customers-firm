import React from 'react'

import Head from 'next/head'

import Header from '@layouts/Header'

import {Container} from "@mui/material"

const Layout = ({title,description,children,...other}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>

        <Header/>
        <main>
          <h1 style={{display:'none'}} >{title}</h1>
          {children}
        </main>
    </>
  )
}

export default Layout
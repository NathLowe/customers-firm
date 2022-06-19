import React from 'react'

import Head from 'next/head'

import { motion } from 'framer-motion';

const Layout = ({title,description,children,...other}) => {

  let variants = {
    animate:{
      opacity:1,
      transition:{
        duration:1
      }
    },
    exit:{
      opacity:0,
      transition:{
        duration:1
      }
    },
    initial:{
      opacity:0,
    }
  }

  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>

        
        <motion.main
          variants={variants}
          exit="exit"
          initial="initial"
          animate="animate"
          style={{flex:1}}
        >
          <h1 style={{display:'none'}} >{title}</h1>
          {children}
        </motion.main>
    </>
  )
}

export default Layout
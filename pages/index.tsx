import Head from 'next/head'
import {GlobalStyles} from "@shared/globals"

import { Global } from '@emotion/react'

import Layout from '@layouts/Layout'

import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box } from '@mui/system'


let MyCarousel = ()=>{

  return <>
  <Box sx={{
    mx:2,
    '& .carousel .thumb':{
      width:'5%',height:'50px',cursor:'pointer'
    },
    '& .carousel':{
      textAlign:'center'
    },
    '& .carousel .slider-wrapper':{
      boxShadow:'0.5px 0.5px 40px yellow'
    }
  }} >
    <Carousel>
      <div style={{height:'550px',display:'flex',alignItems:'center'}}>
        <img src="/images/1.jpg" />
      </div>
      <div style={{height:'550px',display:'flex',alignItems:'center'}}>
        <img src="/images/2.jpg" />
      </div>
    </Carousel>
  </Box>
    
  </>
}

export default function Home() {
  return (
    <>
      <Global styles={GlobalStyles} />
      
      <Layout
        title={"Customer's Firm"}
        description={"CUSTOMER’S FIRM est entreprise camerounaise spécialisée dans la fabrication des produits de beauté."}
      >
        <MyCarousel/>
      </Layout>
    </>
  )
}


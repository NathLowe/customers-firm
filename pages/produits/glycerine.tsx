import React from 'react'

import Layout from '@layouts/Layout'

import { Container, Grid, Typography, Box } from "@mui/material"


let VariantHeader = ({variant,...other})=>{

  let {selection} = other

  return <>
    <Box sx={{display:'flex',alignItems:'center'}}>
      <Typography sx={{fontSize:'h4.fontSize', fontFamily:'frassel', width:'fit-content',mr:1,color:'primary.light'}}>
        {variant}
        </Typography>
      {selection && 
        <>
          <Typography sx={{ml:1,fontSize:'h6.fontSize'}} noWrap variant="body1">{selection}</Typography>
        </> 
      }
    </Box>
  </>
}

const glycerine = () => {
  return (
    <Layout
      title="Glycérine"
      description="La glycérine est le principale produit commercialisé par la société Customer's Firm."
    >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}  lg={5}>
              <img src="/images/1.jpg" alt="Glycérine" width="100%" height="auto" />
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
              <Typography sx={{py:1}} variant="h2" color="primary.main">Glycérine</Typography>
              <Typography sx={{mb:3}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ab, laudantium incidunt illum, magnam suscipit harum quidem porro possimus, ea ducimus nulla placeat esse perferendis. Praesentium eum voluptates distinctio quas.
              </Typography>

              <Box>
                <VariantHeader variant="Parfum" selection="Carotte" />
              </Box>
            </Grid>
          </Grid>
        </Container>
    </Layout>
  )
}

export default glycerine
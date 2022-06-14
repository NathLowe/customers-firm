import React from 'react'

import Layout from '@layouts/Layout'

import { Container, Grid, Typography } from "@mui/material"

import VariantBlock from '@components/VariantBlock'

const alcool = () => {

  let [productImage,setProductImage] = React.useState('/images/3.jpg')
  let [actualContenant,setActualContenant] = React.useState(0)


  let datasContenant = [
    {image:'/images/bouteille-plastique.jpg',name:'bouteille plastique'},
    {image:'/images/bouteille-verre.jpg',name:'bouteille verre'},
  ]

  let datasContenance = [
    {name:'30ml',text:'30ml',contenant:[0,1]},
    {name:'60ml',text:'60ml',contenant:[0,1]},
    {name:'125ml',text:'125ml',contenant:[0]},
    {name:'250ml',text:'250ml',contenant:[0]},
    {name:'500ml',text:'500ml',contenant:[0]},
    {name:'1000ml',text:'1000ml',contenant:[0]},
  ]

  return (
    <Layout
      title="Alcool Ethylique"
      description="L'Alcool est le principale produit commercialisé par la société Customer's Firm."
    >
        <Container maxWidth="xl">
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} md={6}  lg={5}>
              <img src={productImage} alt="Alcool" width="100%" height="auto" />
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
              <Typography sx={{py:1}} variant="h2" color="primary.main">Alcool</Typography>
              <Typography sx={{mb:3}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ab, laudantium incidunt illum, magnam suscipit harum quidem porro possimus, ea ducimus nulla placeat esse perferendis. Praesentium eum voluptates distinctio quas.
              </Typography>
              
              <VariantBlock title="contenant" datas={datasContenant} changeContenant={setActualContenant} />

              <VariantBlock title="contenance" datas={datasContenance} actualContenant={actualContenant} />
            </Grid>
          </Grid>
        </Container>
    </Layout>
  )
}

export default alcool
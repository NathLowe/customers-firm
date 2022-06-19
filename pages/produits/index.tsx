import React from 'react'

import Layout from '@layouts/Layout'

import {Container, Grid, Typography} from '@mui/material'
import { Box } from '@mui/system'
import { motion } from 'framer-motion'
import Link from 'next/link'


let ProductCard = ({name,link,image})=>{

  return <Grid item xs={12} sm={6} lg={4}>
    <Link href={link}>
      <Box sx={{
        borderRadius:4,position:'relative',boxShadow:6,cursor:'pointer',
        height:150,transition:'0.3s',
        '&:hover':{
          boxShadow:15,
          '& .product-name':{
            color:'primary.light'
          }
        }
      }}>
        <Box sx={{
          position:'absolute',top:0,left:0,
          width:1,height:1,zIndex:5,backgroundColor:'black',
          opacity:0.1,transition:'0.3s',borderRadius:4,
          '&:hover':{
            opacity:0.3
          }
        }} />
        <Box sx={{
          position:'absolute',top:'50%',left:0,
          width:1,zIndex:10,transform:"translateY(-50%)",
          display:'flex',alignItems:'center'
        }}>
          <motion.div
            style={{width:'100%'}}
            initial={{scale:0}}
            animate={{scale:1}}
            transition={{duration:0.4,delay:0.1}}
          >
            <Typography className={"product-name"} textAlign="center" noWrap variant="h4" color="white" sx={{textTransform:'capitalize',px:2,transition:'0.5s'}}>
              {name}
            </Typography>
          </motion.div>
        </Box>
        <Box sx={{
          position:'absolute',top:0,left:0,
          width:1,height:1,borderRadius:4,
          backgroundRepeat:'no-repeat',backgroundSize:'cover',
          backgroundPosition:'center',backgroundImage:`url(${image})`
        }}/>
      </Box>
    </Link>
  </Grid>
}

const Products = () => {

  let allProductsDatas = [
    {name:'Glycérine',link:'/produits/glycerine',image:'/images/4.jpg'},
    {name:'Alcool',link:'/produits/alcool',image:'/images/3.jpg'},
    {name:'Gel Hydroalcoolique',link:'/produits/gel-hydroalcoolique',image:'/images/2.jpg'},
    {name:'Lotion',link:'/produits/lotion',image:'/images/1.jpg'},
    {name:'Huile Eclaircissante',link:'/produits/huile-eclaircissante',image:'/images/huile-eclaircissante.jpg'}
  ]

  return (
    <Layout
        title="Nos Produits"
        description={"Les diffirents produits commercialisés par Customer's Firm."}
    >
        <Container>
          <Typography variant="h1" color="primary.dark" textAlign="center">Nos Produits</Typography>
          <Typography variant="body1" sx={{mt:2, fontSize:'h6.fontSize',fontStyle:'italic'}}>
            Les produits de l'entreprise <Typography component="span" sx={{fontFamily:'frassel',fontStyle:'normal'}} color="primary.light">CUSTOMERS'S FIRM</Typography> sont de plusieurs types. Principalement, il s'agit de produits de beauté, d'hygiène corporelle et générale. Ils permettent de consolider la vision de l'entreprise qui oeuvre pour la promotion de la beauté africaine à travers le monde. Ainsi, ces divers produits sont connus à l'échelle locale, nationale et continentale sous le nom de marque <Typography component="span" sx={{fontFamily:'frassel',fontStyle:'normal'}} color="primary.light">ARMELLE COSMETIQUES</Typography>.
          </Typography>

          <Grid container spacing={5} alignItems="center" sx={{my:4}}>
            {allProductsDatas.map((data,index)=>{
              let {name,link,image} = data
              return <ProductCard key={index} name={name} link={link} image={image}/>
            })}
          </Grid>
        </Container>
    </Layout>
  )
}

export default Products
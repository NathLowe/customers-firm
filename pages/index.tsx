import Head from 'next/head'
import {GlobalStyles} from "@shared/globals"

import { Global } from '@emotion/react'

import Layout from '@layouts/Layout'

import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Box, Typography, Container, Grid, TextField } from '@mui/material'

import Button from '@components/MyButton'
import Image from '@components/MyImage'
import { motion, useCycle } from 'framer-motion'
import { 
  BsArrowRight as ArrowIcon
} from 'react-icons/bs'
import Link from 'next/link'

import Slider from '@components/MySlider'

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
      <div style={{maxHeight:'550px'}}>
        <img src="/images/banner.jpg"/>
      </div>
      <div style={{maxHeight:'550px',display:'flex',alignItems:'center'}}>
        <img src="/images/banner2.jpg"/>
      </div>
    </Carousel>
  </Box>
    
  </>
}

let Entreprise = ()=>{

  return <Box sx={{pt:3,pb:10}}>
    <Container maxWidth="xl">
      <Grid container spacing={2} alignItems='center'>
        <Grid item xs={12} md={5}>
          <Image src="/images/2.jpg"/>
        </Grid>
        
        <Grid item xs>
          <Typography variant="h2" color="primary.dark">Une Entreprise au service de ses clients</Typography>
          <Typography variant="body1" sx={{my:2}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugiat sunt iusto quae nisi vero ea. Quas libero nemo possimus culpa porro, ipsa corporis, in, consequuntur quaerat facilis dicta quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime in esse distinctio dolor consequuntur accusamus, non eaque, accusantium blanditiis earum quam velit id saepe expedita error excepturi obcaecati voluptates.
          </Typography>
          <Typography variant="body1" sx={{my:2}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugiat sunt iusto quae nisi vero ea. Quas libero nemo possimus culpa porro, ipsa corporis, in, consequuntur quaerat facilis dicta quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime in esse distinctio dolor consequuntur accusamus.
          </Typography>
          
          <Button sx={{mt:2}} link="/a-propos">
            En Savoir plus...
          </Button>
        </Grid>
      </Grid>
    </Container>
    
  </Box>
}

let Products = ()=>{

  let datasProducts = [
    {image:"/images/1.jpg",name:'Glycérine',link:'/products/glycerine'},
    {image:"/images/2.jpg",name:'Alcool',link:'/products/alcool'},
    {image:"/images/3.jpg",name:'Gel Hydroalcoolique',link:'/products/gel-hudroalcoolique'},
    {image:"/images/1.jpg",name:'Lotion',link:'/products/lotion'},
    {image:"/images/2.jpg",name:'Huile Éclaircissante',link:'/products/huile-eclaircissante'},
  ]

  let Product = ({image,name,link})=>{

    let variants = {
      initial:{
        opacity:1,x:0
      },
      hover:{
        opacity:[1,0,0,1],x:[0,25,-25,0]
      }
    }

    let [hover,changeHover] = useCycle('initial','hover')

    return <Grid item xs={12} sm={6} md={4} lg={3}>
      <Image src={image}/>
      <Box sx={{px:2,py:1}}>
        <Typography sx={{fontSize:'h4.fontSize',textTransform:'capitalize',textAlign:'center'}} noWrap>{name}</Typography>
        <Link href={link}>
          <Box sx={{fontStyle:'italic',border:'1px solid',borderColor:'primary.dark',borderRadius:2,color:'primary.dark',width:'fit-content',px:2,transition:'background-color 0.2s, color 0.5s',cursor:'pointer',mx:'auto',
          '&:hover':{
              color:'white',backgroundColor:'primary.dark'
            }
          }}
          >
            <motion.div
              style={{display:'flex',alignItems:'center'}}
              onHoverStart={()=>changeHover()}
              onHoverEnd={()=>changeHover()}
            >
              Découvrir 
              <motion.span
                style={{display:'flex',marginLeft:'8px'}}
                animate={variants[hover]}
              >
                <ArrowIcon fontSize="20px" />
              </motion.span>
            </motion.div>
          </Box>
        </Link>
      </Box>
    </Grid>
  }

  return <Box sx={{py:10, backgroundColor:'secondary.light'}}>
    <Container maxWidth="xl">
      <Typography textAlign="center" variant="h2" color="primary.dark">Nos Produits</Typography>
      <Typography textAlign="center" variant="body1" sx={{color:"text.disabled"}}>
        Découvrez les produits de la gamme <Typography component="span" color="primary.dark" sx={{fontFamily:'frassel'}}>ARMELLE COSMETIQUES</Typography>
      </Typography>
      <Grid container spacing={3} sx={{mt:1}}>
        {datasProducts.map((data,index)=>{
          let {image,name,link} = data
          return <Product key={index} image={image} name={name} link={link} />
        })}
      </Grid>
        
    </Container>
  </Box>
}

let Reseaux = ()=>{

  let publicationsImage = [
    <Image key={1} src="/images/1.jpg"/>,
    <Image key={2} src="/images/1.jpg"/>,
    <Image key={3} src="/images/1.jpg"/>,
    <Image key={4} src="/images/1.jpg"/>,
    <Image key={5} src="/images/1.jpg"/>,
    <Image key={6} src="/images/1.jpg"/>,
    <Image key={7} src="/images/1.jpg"/>,
  ]

  return <Box sx={{py:10}}>
    <Container maxWidth="xl">
      <Typography variant="h2" textAlign="center" color="primary.dark">Restez connectés</Typography>
      <Typography sx={{color:'text.disabled',textAlign:'center'}}>
        Suivez nos différentes pages sur les réseaux sociaux afin de rester à jour nos différents évènements et produits.
      </Typography>
      
      <Slider datas={publicationsImage} />
    </Container>
  </Box>
}

let Newsletter = ()=>{

  return <Box sx={{py:10,backgroundColor:'secondary.light'}}>
    <Container maxWidth="lg">
      <Typography variant="h2" color="primary.dark" textAlign="center">
        Tenez vous informez !
      </Typography>
      <Typography textAlign="center" sx={{color:'text.disabled',textAlign:'center'}}>
        Entrez votre adresse mail pour recevoir les nouveautés concernant 
        <Typography component="span" sx={{fontFamily:'frassel'}} color="primary.dark"> CUSTOMER'S FIRM</Typography>. Le meilleur reste à venir !
      </Typography>
      <Grid container alignItems='center' spacing={2} sx={{mt:2}}>
        <Grid item xs={12} sm={8} sx={{display:'flex',justifyContent:'center'}}>
          <TextField variant="filled" sx={{width:'100%'}} color="primary" label="Adresse Mail" name="email" />
        </Grid>
        <Grid item xs={12} sm={4} sx={{textAlign:'center'}}>
          <Button size="large">Confirmer</Button>
        </Grid>
      </Grid>
    </Container>
  </Box>
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
        <Entreprise/>
        <Products/>
        <Reseaux/>
        <Newsletter/>
      </Layout>
    </>
  )
}


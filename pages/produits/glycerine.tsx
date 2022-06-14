import React from 'react'

import Layout from '@layouts/Layout'

import { Box, Container, Grid, Typography, useTheme } from "@mui/material"

import VariantBlock from '@components/VariantBlock'
import { motion, useCycle } from 'framer-motion'

import {
  BsArrowUp as ArrowUpIcon,
  BsArrowDown as ArrowDownIcon,
} from 'react-icons/bs'


let AllVariants = ()=>{

  let [actualContenant,setActualContenant] = React.useState(0)

  let datasParfum = [
    {image:'/images/carotte.jpg',name:'carotte'},
    {image:'/images/citron.jpg',name:'citron'},
    {image:'/images/aloe-vera.jpg',name:'aloe vera'},
    {image:'/images/pure.jpg',name:'pure'},
  ]

  let datasContenant = [
    {image:'/images/bouteille-plastique.jpg',name:'bouteille plastique'},
    {image:'/images/bouteille-verre.jpg',name:'bouteille verre'},
    {image:'/images/tube-plastique.jpg',name:'tube plastique'},
  ]

  let datasContenance = [
    {name:'30ml',text:'30ml',contenant:[0,1,2]},
    {name:'60ml',text:'60ml',contenant:[0,1,2]},
    {name:'125ml',text:'125ml',contenant:[0,2]},
    {name:'250ml',text:'250ml',contenant:[0]},
    {name:'500ml',text:'500ml',contenant:[0]},
    {name:'1000ml',text:'1000ml',contenant:[0]},
  ]

  return <>
    <VariantBlock title="parfum" datas={datasParfum} />
              
    <VariantBlock title="contenant" datas={datasContenant} changeContenant={setActualContenant} />

    <VariantBlock title="contenance" datas={datasContenance} actualContenant={actualContenant} />
  </>
}

let DesktopVariants = ()=>{
  return <Box sx={{display:{xs:'none',md:'initial'}}}>
    <AllVariants/>
  </Box>
}

let PhoneVariants = ({imageVisible})=>{

  let [hide,setHide] = React.useState(!imageVisible)

  React.useEffect(()=>{
    setHide(!imageVisible)
  },[imageVisible])

  let variants = {
    initial:{
      height:0,
      transition:{
        duration:0.8,
        ease:'easeInOut'
      }
    },
    active:{
      height:'initial',
      transition:{
        duration:0.8,
        ease:'easeOut'
      }
    }
  }

  let [show,changeShow] = useCycle('initial','active')

  return <>
    {
      !hide &&
      <Box 
        sx={{display:{md:'none'},position:'fixed',width:'100vw',
          bottom:0,left:0,backgroundColor:'secondary.light',px:3,pt:3,zIndex:10
        }}>
        <Box sx={{position:'relative'}} onClick={()=>changeShow()} >
          <Typography variant="h3" color="primary.main" textAlign="center">Caractéristiques</Typography>
          <Box sx={{position:'absolute',top:'0%',left:'-20px',transition:'0.3s',color:'secondary.dark',
            transform:` rotate(${show == 'active' ? '180deg' : '0deg'})`}}>
            <ArrowUpIcon fontSize="45px" fontWeight="600" />
          </Box>
          <Box sx={{position:'absolute',top:'0%',right:'-20px',transition:'0.3s',color:'secondary.dark',
            transform:` rotate(${show == 'active' ? '180deg' : '0deg'})`}}>
            <ArrowUpIcon fontSize="45px" fontWeight="600" />
          </Box>
        </Box>
        <motion.div
          initial={{height:0}} animate={variants[show]} >
          <AllVariants/>
        </motion.div>
      </Box>
    }
  </>
  
}

const glycerine = () => {

  let [productImage,setProductImage] = React.useState('/images/1.jpg')
  let [visible,setVisible] = React.useState(true)

  let theme = useTheme()

  let changeVisibility = React.useCallback((bool)=>()=>{
    if(window.innerWidth < theme.breakpoints.values.md){
      setVisible(bool)
    }
  },[setVisible])

  return (
    <Layout
      title="Glycérine"
      description="La glycérine est le principale produit commercialisé par la société Customer's Firm."
    >
      <Container maxWidth="xl">
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={12} md={6}  lg={5}>
            <motion.img
            onViewportLeave={changeVisibility(false)} 
            onViewportEnter={changeVisibility(true)}
            src={productImage} alt="Glycérine" width="100%" height="auto" />
          </Grid>
          <Grid item xs={12} md={6} lg={7}>
            <Typography sx={{py:1}} variant="h2" color="primary.main">Glycérine</Typography>
            <Typography sx={{mb:3}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ab, laudantium incidunt illum, magnam suscipit harum quidem porro possimus, ea ducimus nulla placeat esse perferendis. Praesentium eum voluptates distinctio quas.
            </Typography>

            <DesktopVariants/>
            <PhoneVariants imageVisible={visible} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default glycerine
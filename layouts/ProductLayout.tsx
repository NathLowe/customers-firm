import React from 'react'

import { Box, Container, Grid, Typography, useTheme } from "@mui/material"

import VariantBlock from '@components/VariantBlock'
import Image from '@components/MyImage'
import { motion, useCycle } from 'framer-motion'

import {
  BsArrowUp as ArrowUpIcon,
} from 'react-icons/bs'



const ProductLayout = ({title,description,image,parfum,contenantDatas,contenanceDatas}) => {
    
    let AllVariants = ({parfum,contenant,contenance})=>{

        /**
         * @actualContenant est index +1 du contenant actuel dans le tableau des contenants
         */
        let [actualContenant,setActualContenant] = React.useState(1)

        let datasParfum = [
            {image:'/images/carotte.jpg',name:'carotte'},
            {image:'/images/citron.jpg',name:'citron'},
            {image:'/images/aloe-vera.jpg',name:'aloe vera'},
            {image:'/images/pure.jpg',name:'pure'},
        ]

        let datasContenant = contenant

        let datasContenance = contenance

        return <>
        {
            parfum && <VariantBlock title="parfum" datas={datasParfum} />
        }
        
        {/* <VariantBlock title="contenant" datas={datasContenant} changeContenant={setActualContenant} />

        <VariantBlock title="contenance" datas={datasContenance} actualContenant={actualContenant} /> */}
        </>
    }
  
    let DesktopVariants = ({...other})=>{

        let {parfum,contenant,contenance} = other

        return <Box sx={{display:{xs:'none',md:'initial'}}}>
        <AllVariants parfum={parfum} contenant={contenant} contenance={contenance} />
        </Box>
    }
  
  let PhoneVariants = ({imageVisible,...other})=>{
  
    let {parfum,contenant,contenance} = other

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
            <AllVariants parfum={parfum} contenant={contenant} contenance={contenance} />
          </motion.div>
        </Box>
      }
    </>
    
  }
    
  let [productImage,setProductImage] = React.useState(image)
  let [visible,setVisible] = React.useState(true)

  let theme = useTheme()

  let changeVisibility = React.useCallback((bool)=>()=>{
    if(window.innerWidth < theme.breakpoints.values.md){
      setVisible(bool)
    }
  },[setVisible])

  return (
    <Container maxWidth="xl" sx={{mb:2}}>
        <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} md={6}  lg={5}>
            <motion.div
                onViewportLeave={changeVisibility(false)} 
                onViewportEnter={changeVisibility(true)}
            >
                <Image src={productImage} />
            </motion.div>
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
            <Typography sx={{py:1}} variant="h2" color="primary.main">{title}</Typography>
            <Typography sx={{mb:3}}>
                {description}
            </Typography>

            <DesktopVariants parfum={parfum} contenant={contenantDatas} contenance={contenanceDatas} />
            <PhoneVariants imageVisible={visible} parfum={parfum} contenant={contenantDatas} contenance={contenanceDatas} />
            </Grid>
        </Grid>
    </Container>
  )
}

export default ProductLayout
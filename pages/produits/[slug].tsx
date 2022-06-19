// Imports
import React from 'react'
import {allProductsDatas,allProductsImages,datasParfum} from '@shared/data'
import {
    Container, Grid, Typography, useTheme, Box
} from '@mui/material'
import { motion,useCycle } from 'framer-motion'
import Image from '@components/MyImage'
import VariantBlock from '@components/VariantBlock'
import {
    BsArrowUp as ArrowUpIcon,
} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { setContenant, setContenance, setContenantIndex, setParfum, VariantState } from '@shared/redux/reducers/variant'
import { useRouter } from 'next/router'
import Layout from '@layouts/Layout'

// Type
type ContenantType = {
    image:string,
    name:string
}

type ContenanceType = {
    contenant:number[],
    text:string,
    name:string
}

interface ProductPropsType {
    slug:'alcool'|'glycerine'|'hydroalcoolique'|'huile-eclaircissante'|'lotion',
    parfum:boolean,
    dataContenant:ContenantType[],
    dataContenance:ContenanceType[],
    title:string,
    description:string
}


// Components
const Product = ({slug,parfum,dataContenant,dataContenance,title,description}:ProductPropsType) => {

    let AllVariants = ()=>{

        return <>
            {
                parfum && <VariantBlock title="parfum" datas={datasParfum} />
            }
            
            <VariantBlock title="contenant" datas={dataContenant} />

            <VariantBlock title="contenance" datas={dataContenance} />
        </>
    }

    let DesktopVariants = ()=>{

        return <Box sx={{display:{xs:'none',md:'initial'}}}>
            <AllVariants />
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
                <AllVariants />
            </motion.div>
            </Box>
        }
        </>
    }

    
    let dispatcher = useDispatch()
    let variants = useSelector<{variant:VariantState},VariantState>((state)=>state.variant)

    let [visible,setVisible] = React.useState(true)

    let theme = useTheme()

    let router = useRouter()

    React.useEffect(()=>{
        dispatcher(setParfum(parfum ? datasParfum[0].name : null))
        dispatcher(setContenant(dataContenant[0].name))
        dispatcher(setContenantIndex(0))
        dispatcher(setContenance(dataContenance[0].name))
    },[router])

    let getImageSrc = React.useCallback(():string=>{
        let image = null
        for (let index = 0; index < allProductsImages[slug].length; index++) {
            let data = allProductsImages[slug][index];
            if(data.parfum){
                if(data.parfum == variants.parfum){
                    if(data.contenant == variants.contenant && data.contenance == variants.contenance){
                        image = data.image
                    }
                }
            }else{
                if(data.contenant == variants.contenant && data.contenance == variants.contenance){
                    image = data.image
                }
            }
        }
        return image ? image : allProductsImages[slug][0].image
    },[variants])

    let [productImage,setProductImage] = React.useState(getImageSrc())

    React.useEffect(()=>{
        setProductImage(getImageSrc())
    },[variants])


    let changeVisibility = React.useCallback((bool)=>()=>{
        if(window.innerWidth < theme.breakpoints.values.md){
        setVisible(bool)
        }
    },[setVisible])

    return (
        <Layout
            title={title}
            description={description}
        >
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

                    <DesktopVariants />
                    <PhoneVariants imageVisible={visible} />
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

// Exports

export const getStaticPaths = ()=>{

    let paths = allProductsDatas.map(({params},index)=>{
        return {
            params:{
                slug: params.slug
            }
        }
    })

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = ({params})=>{
    let props
    for (let index = 0; index < allProductsDatas.length; index++) {
        let data = allProductsDatas[index];
        if(data.params.slug == params.slug){
            props = {...data.params}
        }
    }

    return {
        props
    }
}


export default Product
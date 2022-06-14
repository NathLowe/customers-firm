
import React, {useEffect} from 'react'

import { Box, Typography, Grid, Tooltip } from '@mui/material'

import { AnimatePresence, motion } from 'framer-motion';

/**
 * Pour l'entête du block de la variante du produit
 * @variant C'est le titre de la variante en question 
 * @other Ce sont les autres variables de la variante 
 * @returns JSX Component
 */
let VariantHeader = ({variant,...other})=>{

let {selection} = other

return <>
    <Box sx={{display:{xs:'initial',sm:'flex'},alignItems:'center',mb:{xs:2,sm:1}}}>
        <Typography sx={{fontSize:'h4.fontSize', fontFamily:'frassel', width:'fit-content',mr:1,color:'primary.light',textTransform:'capitalize'}}>
            {variant}
        </Typography>
        <AnimatePresence exitBeforeEnter>
            {selection && 
            <motion.div key={selection} animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:0.2}} >
                <Typography sx={{
                    ml:1,fontSize:'h6.fontSize',textTransform:'capitalize',
                    mt:{xs:'-15px',sm:0}
                }} noWrap variant="body1">{selection}</Typography>
            </motion.div> 
            }
        </AnimatePresence>
    </Box>
</>
}

/**
 * Il s'agit du block de variante du produit en question. Ex: Parfum, Contenance
 * @title C'est le titre de la variante Ex: Parfum 
 * @datas C'est un tableau contenant les données de chaque variante
 * @returns JSX Component
 */
let VariantBlock = ({title,datas,...other})=>{

/**
 * @changeContenant fonction permettant de changer l'index global du contenant choisi, utilisé uniquement dans le block Contenant
 * @actualContenant variable représentant l'index global du contenant choisi, uniquement utilisé dans le Block Contenance
 */
let {changeContenant, actualContenant} = other

let blockDatas = React.useMemo(()=>
    datas
,[datas])

/**
 * @change Hook state utilisé pour modifié la variante lors de chaque sélection, elle sert juste a actualisé le component
 * @selected Hook ref utilisé pour contenir l'index de la variante sélectionnée
 * NB: L'index est stocké dans le hook ref car lors de la modification du contenant global, il y a modification des blocks
 * Je devrais plutot utiliser un hook context
 */
let [change,setChange] = React.useState(0)
let selected = React.useRef(0)

/**
 * Permet de modifier la contenance lorsqu'on modifie le contenant et le nouveau contenant ne possède pas la précédente contenance
 */
useEffect(()=>{
    if(actualContenant){
    if(blockDatas[selected.current].contenant.indexOf(actualContenant) == -1){
        selected.current = 0
        setChange(0)
    }
    }
},[actualContenant])

/**
 * Permet de modifier la variante
 */
let changeSelected = React.useCallback((index)=>()=>{
    selected.current = index
    setChange(index)
    if(changeContenant){
    changeContenant(index)
    }
},[datas])

/**
 * 
 * @data Objet contenant les données de la variante
 * @funcClick Fonction permettant de modifier la variante choisie
 * @returns JSX Component
 */
let VariantCard = ({data,index,funcClick})=>{

    let {image,name,text} = data

    return <Grid item xs={3} md={2} lg={ text ? 2 : 1}>
    <Tooltip title={name}>
        <Box sx={{
        boxShadow:2,backgroundImage:`url(${image})`,height:'100%',width:'100%',backgroundSize:'cover',backgroundPosition:'center',p:1, borderRadius:2, cursor:'pointer',transition:'1s',border:'3px solid',borderColor:'transparent',
        ...(selected.current == index && {
            borderColor:'primary.dark'
        })
        }} onClick={funcClick(index)} >
        {/* Pour les variantes Parfum et Contenant */}
        {image && 
            <img alt={name} src={image} width="100%" height="auto" style={{opacity:0}} />
        }
        {/* Pour la variante Contenance */}
        {text &&
            <Typography variant="h6" noWrap textAlign="center">{text}</Typography>
        }
        </Box>
    </Tooltip>
    </Grid>
}

return <Box sx={{mb:3}}>
    <VariantHeader variant={title} selection={blockDatas[selected.current].name} />
    <Grid container spacing={4}>
    {datas.map((data,index)=>{
        let {contenant} = data
        if(contenant && actualContenant && contenant.indexOf(actualContenant) == -1){
        return
        }
        return <VariantCard key={index} index={index} data={data} funcClick={changeSelected} />
    })}
    </Grid>
</Box>
}

export default VariantBlock
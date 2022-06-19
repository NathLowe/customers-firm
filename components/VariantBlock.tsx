// Imports
import React, {useEffect} from 'react'

import { Box, Typography, Grid, Tooltip } from '@mui/material'

import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setContenance, setContenant, setContenantIndex, setParfum, VariantState } from '@shared/redux/reducers/variant';


// Types
export interface VariantBlockDataType {
    name:string,
    contenant?:number[],
    image?:string,
    text?:string
}

interface VariantBlockType {
    title:'parfum'|'contenance'|'contenant',
    datas:VariantBlockDataType[]
}


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
            {selection && 
            <div key={selection} >
                <Typography sx={{
                    ml:1,fontSize:'h6.fontSize',textTransform:'capitalize',
                    mt:{xs:'-15px',sm:0}
                }} noWrap variant="body1">{selection}</Typography>
            </div> 
            }
    </Box>
</>
}

/**
 * Il s'agit du block de variante du produit en question. Ex: Parfum, Contenance
 * @title C'est le titre de la variante Ex: Parfum 
 * @datas C'est un tableau contenant les données de chaque variante
 * @returns JSX Component
 */
let VariantBlock = ({title,datas}:VariantBlockType)=>{

    let type = title
    let blockDatas = React.useMemo(()=>
        datas
    ,[datas])
    let variants = useSelector<{variant:VariantState},VariantState>( (state) => state.variant)
    let value = React.useMemo(()=>{
        return variants[type]
    },[variants[type]]) 
    let dispatcher = useDispatch()

    let getSelectedIndex = ():number=>{
        let index 
        for (let i = 0; i < blockDatas.length; i++) {
            let data = blockDatas[i];
            if(data.name == variants[type]){
                index = i
            }
        }
        return index
    }

    /**
     * Permet de modifier la variante
     */
    let changeSelected = React.useCallback((index:number)=>()=>{
        if(type === 'parfum'){
            dispatcher(setParfum(blockDatas[index].name))
        }else if(type === 'contenance'){
            dispatcher(setContenance(blockDatas[index].name))
        }else if(type === 'contenant'){
            dispatcher(setContenant(blockDatas[index].name))
            dispatcher(setContenantIndex(index))
        }
    },[datas])

    // React.useEffect(()=>{
    //     changeSelected(0)()
    // },[])

    /**
     * Permet de modifier la contenance lorsqu'on modifie le contenant et le nouveau contenant ne possède pas la précédente contenance
     */
    useEffect(()=>{
        if(type === 'contenance'){
            let contenantIndex = variants.contenantIndex
            let actualIndex = getSelectedIndex()
            let datas = blockDatas[actualIndex] ? (blockDatas[actualIndex].contenant ? blockDatas[actualIndex].contenant : null) : null
            if(datas && datas.indexOf(contenantIndex) == -1){
                let continu = true
                for (let i = 0; i < blockDatas.length; i++) {
                    if(continu){
                        let data = blockDatas[i];
                        if(data.contenant && data.contenant.indexOf(contenantIndex) != -1){
                            continu = false
                            dispatcher(setContenance(blockDatas[i].name))
                        }
                    }
                }
            }
        }
    },[variants.contenant,blockDatas])
    

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
                ...(variants[type] === blockDatas[index].name && {
                    borderColor:'primary.dark'
                })
            }} onClick={funcClick} >
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
        <VariantHeader variant={title} selection={value} />
        <Grid container spacing={4}>
        {blockDatas && blockDatas.map((data,index)=>{
            let contenant = data.contenant
            if(contenant && contenant.indexOf(variants.contenantIndex) == -1){
                return
            }
            return <VariantCard key={index} index={index} data={data} funcClick={changeSelected(index)} />
        })}
        </Grid>
    </Box>
}

export default VariantBlock
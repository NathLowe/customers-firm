import { Box, Breadcrumbs, Typography } from '@mui/material'
import React from 'react'

import NavLink from '@components/NavLink'

import { slugUrls } from '@shared/data'

import Link from 'next/link'
import { useRouter } from 'next/router';

let Logo = ()=>{

    return <Box sx={{
        width:{
            xs:"100%",
            md:"30%"
        },
        display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'
    }}>
        <Link href="/">
            <img src="/images/logo.png" width="100%" height='auto' />
        </Link>
    </Box>
}

let Links = ()=>{

    return <>
        <Box sx={{
            display:'flex',justifyContent:'right',
            alignItems:'center',flex:1, pr:3
        }}>
            <NavLink href="/produits/glycerine">Glycérine</NavLink>
            <NavLink href="/produits/alcool">Alcool</NavLink>
            <NavLink href="/produits/gel-hydroalcoolique">Gels Hydroalcooliques</NavLink>
            <NavLink href="/contact">Contact</NavLink>
        </Box>
    </>
}

let MyBreadcrumb = ()=>{

    let {route} = useRouter()
    let [bread,setBread] = React.useState(new Array())
    let breadcrumb = new Array()

    React.useLayoutEffect(()=>{
        setBread(createLinks())
    },[])

    let BreadcrumbLink = ({href,name})=>{

        return <Link href={href} >
            <Typography color="inherit" sx={{
                cursor:'pointer',transition:'0.5s',
                '&:hover':{
                    color:'primary.main',opacity:0.3
                }
            }} >{name}</Typography>
        </Link>
    }

    let createLinks = React.useCallback(()=>{
        let elements = route.split('/')
        let response = new Array()

        response.push(
            <BreadcrumbLink key={0} href="/" name="Accueil" />
        )
        for (let index = 1; index < elements.length; index++) {
            let element = elements[index];
            if(element !== ""){
                for (let i = 0; i < slugUrls.length; i++) {
                    let {slug,href,name} = slugUrls[i];
                    if(element == slug){
                        if(index === elements.length - 1){
                            response.push(
                                <Typography key={index} color="primary.light" >{name}</Typography>
                            )
                        }else{
                            response.push(
                                <BreadcrumbLink key={index} href={href} name={name} />
                            )
                        }
                    }
                }
            }
        }
        return response
    },[route,setBread])

    return <>
        {
            bread.length > 1 ?
            <Breadcrumbs separator=">" sx={{mx:3, my:1, px:2, py:1}}>
                {bread}
            </Breadcrumbs>
            :
            <div/>
        }
        
    </>
}

const Header = () => {
  return (
      <>
        <Box sx={{
            display:'flex',height:150,
            backgroundColor:'primary.main',color:'white'
        }}>
            <Logo/>
            <Links/>
        </Box>
        <MyBreadcrumb/>
    </>
  )
}

export default Header
import { Box, Breadcrumbs, Drawer, IconButton, Typography } from '@mui/material'
import React from 'react'

import NavLink from '@components/NavLink'

import { slugUrls } from '@shared/data'

import Link from 'next/link'
import { useRouter } from 'next/router';

import {
    BiMenu as MenuIcon,
    BiCaretLeft as LeftIcon
} from 'react-icons/bi'

let Logo = ()=>{

    return <Box sx={{
        width:{
            xs:"60%",
            md:"30%"
        },
        display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'
    }}>
        <Link href="/">
            <img src="/images/logo.png" width="100%" height='auto' />
        </Link>
    </Box>
}

let MyMenu = ()=>{

    let CloseMenu = ()=>{

        return <Box sx={{
            position:'absolute',bottom:'15px',left:0,width:1,
            display:'flex',alignItems:'center',cursor:'pointer',
            color:'primary.dark',transition:'0.2s',
            '&:hover':{
                color:'primary.main'
            }
        }} onClick={()=>setOpenMenu(false)} >
            <Box sx={{mr:2,display:'flex'}}>
                <LeftIcon color="inherit" fontSize="35px" />
            </Box>
            <Box>
                <Typography component="span" sx={{color:'inherit',fontSize:'h6.fontSize'}} >Close Menu</Typography>
            </Box>
        </Box>
    }

    let [openMenu,setOpenMenu] = React.useState(false)

    return <Box  sx={{
        display:'flex',justifyContent:'right',
        alignItems:'center',flex:1, pr:3
    }}>
        <Box sx={{display:{xs:'none',md:'block'}}}>
            <Links/>
        </Box>
        <Box sx={{display:{xs:'block',md:'none'}}}>
            <IconButton onClick={()=>setOpenMenu(!openMenu)} >
                <MenuIcon fontSize="40px" color="white" />
            </IconButton>

            <Drawer onClose={()=>setOpenMenu(false)} open={openMenu} anchor="right" PaperProps={{sx:{backgroundColor:'secondary.light'}}} >
                <div onClick={()=>setOpenMenu(false)}>
                    <PhoneLinks/>
                </div>
                <CloseMenu/>
            </Drawer>
        </Box>
    </Box>
}

let Links = ()=>{

    return <>
        <Box sx={{
            display:{xs:'none',md:'flex'},justifyContent:'right',
            alignItems:'center',width:1,
        }}>
            <NavLink href="/produits/glycerine">Glycérine</NavLink>
            <NavLink href="/produits/alcool">Alcool</NavLink>
            <NavLink href="/produits/gel-hydroalcoolique">Gels Hydroalcooliques</NavLink>
            <NavLink href="/contact">Contact</NavLink>
        </Box>
    </>
}

let PhoneLinks = ()=>{

    return <>
        <Box sx={{
            display:{xs:'flex',md:'none'},
            alignItems:'center',width:1,flexDirection:'column'
        }}>
            <Typography variant="h5" color="primary.dark" textAlign="center" sx={{mt:3,mb:1}} > Nos Produits </Typography>
            <NavLink href="/produits/glycerine">Glycérine</NavLink>
            <NavLink href="/produits/alcool">Alcool</NavLink>
            <NavLink href="/produits/gel-hydroalcoolique">Gels Hydroalcooliques</NavLink>
            <NavLink href="/produits/lotion">Lotion</NavLink>
            <NavLink href="/produits/huile-eclaircissante">Huile Eclaircissante</NavLink>

            <Typography variant="h5" color="primary.dark" textAlign="center" sx={{mt:3,mb:1}} > Notre Entreprise </Typography>
            <NavLink href="/a-propos">A Propos</NavLink>
            <NavLink href="/contact">Contactez Nous</NavLink>
        </Box>
    </>
}

let MyBreadcrumb = ()=>{

    let router = useRouter()
    let [bread,setBread] = React.useState(new Array())

    React.useEffect(()=>{
        setBread(createLinks())
    },[setBread,router])

    let BreadcrumbLink = ({href,name})=>{

        return <Link href={href} >
            <Typography sx={{
                cursor:'pointer',transition:'0.5s',color:"inherit",
                '&:hover':{
                    color:'primary.main',opacity:0.3
                }
            }} >{name}</Typography>
        </Link>
    }

    let createLinks = React.useCallback(()=>{
        let route = router.asPath
        console.log(route)
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
    },[router])

    return <>
        {
            bread.length > 1 ?
            <Breadcrumbs separator=">" sx={{mx:3, my:1, px:2, py:1,zIndex:100}}>
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
            display:'flex',height:{xs:80,sm:150},
            backgroundColor:'secondary.dark',color:'white'
        }}>
            <Logo/>
            <MyMenu/>
        </Box>
        <MyBreadcrumb/>
    </>
  )
}

export default Header
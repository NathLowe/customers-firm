import React from 'react'

import { Grid, IconButton, Stack, Typography, Box } from '@mui/material';
import { 
    IoLogoFacebook as FacebookIcon,
    IoLogoInstagram as InstagramIcon, 
    IoLogoLinkedin as LinkedinIcon, 
    IoLogoTwitter as TwitterIcon 
} from 'react-icons/io';

import Link from '@components/NavLink';


const Footer = () => {
    let linkSpacing = 2
    let linkSx = {
        fontWeight:'300',
        letterSpacing:1,
        textAlign:'center',
        cursor:'pointer',
        fontSize:'1.2rem',
        display:'block'
    }

    return (
        <Box sx={{backgroundColor:'secondary.dark',p:4,color:'grey.300'}}>
            <Grid container sx={{justifyContent:{xs:'center',sm:'space-evenly'},px:2}} spacing={3}>
                <Grid item xs={10} md={3}>
                    <Box sx={{display:'flex',justifyContent:'center'}}>
                        <img src="/images/logo.png" alt="Logo" width="90%" />
                    </Box>
                    <Typography textAlign="center" variant="body2" sx={{my:1,fontSize:'1.4rem'}}>Cameroun, Douala Logpom, BP 6560</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Stack spacing={linkSpacing}>
                        <Typography variant="h5" textAlign="center" color="primary.light" >Nos Produits</Typography>
                        <Link href="/produits/glycerine"><Typography component="span" sx={linkSx} >Glycérine</Typography></Link>
                        <Link href="/produits/alcool"><Typography component="span" sx={linkSx} >Alcool</Typography></Link>
                        <Link href="/produits/gel-hydroalcoolique"><Typography component="span" sx={linkSx} >Gel Hydroalcoolique</Typography></Link>
                        <Link href="/produits/lotion"><Typography component="span" sx={linkSx} >Lotion</Typography></Link>
                        <Link href="/produits/huile-eclaircissante"><Typography component="span" sx={linkSx} >Huile Éclaircissante</Typography></Link>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Stack spacing={linkSpacing}>
                        <Typography variant="h5" textAlign="center" color="primary.light" >Notre Entreprise</Typography>
                        <Link href="/a-propos"><Typography component="span" sx={linkSx} >A Propos</Typography></Link>
                        <Link href="/contact"><Typography component="span" sx={linkSx} >Contactez Nous</Typography></Link>
                    </Stack>
                </Grid>
                <Grid item xs={10} md={3}>
                    <Typography textAlign="center" variant="body2" sx={{fontSize:'h6.fontSize'}} >Connect With Us</Typography>
                    <Grid justifyContent="center" sx={{mt:'1px'}} container spacing={3}>
                        <Grid item xs={3} md={2} >
                            <IconButton sx={{color:'white'}}>
                                <TwitterIcon fontSize="30px" />
                            </IconButton>
                        </Grid>
                        <Grid item xs={3} md={2} >
                            <IconButton sx={{color:'white'}}>
                                <InstagramIcon fontSize="30px" />
                            </IconButton>
                        </Grid>
                        <Grid item xs={3} md={2} >
                            <IconButton sx={{color:'white'}}>
                                <FacebookIcon fontSize="30px" />
                            </IconButton>
                        </Grid>
                        <Grid item xs={3} md={2} >
                            <IconButton sx={{color:'white'}}>
                                <LinkedinIcon fontSize="30px" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Typography textAlign="center" variant="body2" sx={{color:'white',mt:5,opacity:0.7}}>Copyrights 
            <Typography component="span" color="primary.main" sx={{fontFamily:'frassel'}}> CUSTOMER'S FIRM</Typography> {new Date().getFullYear()}. 
            All Rights reserved. Coded by Nathan K. Lowe.</Typography>
        </Box>
    )
}

export default Footer

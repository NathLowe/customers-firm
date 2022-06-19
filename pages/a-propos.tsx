import React from 'react'

import Layout from '@layouts/Layout'
import { Box, Container, Grid, Typography } from '@mui/material'

import {
    FaQuoteLeft as QuoteLeftIcon,
    FaQuoteRight as QuoteRightIcon,
} from 'react-icons/fa'

let Directeur = ()=>{

    return <Box sx={{py:4}}>
        <Container maxWidth="lg">
            <Box sx={{p:4,backgroundColor:'secondary.light',fontStyle:"italic",boxShadow:5,borderRadius:5}}>
                <Box sx={{position:'relative'}}>
                    <Typography component="div" color="white" textAlign="center" sx={{fontSize:'h6.fontSize'}}>
                    Nous existons aujourd'hui pour embellir le peuple africain. Leur montrer l'entendu et le potentiel de ce qu'ils ont de plus précieux en eux et autour d'eux... Chaque être humain est beau à sa manière, et c'est cette particulier, ce mystère que nous cherchons à élucider qui motive chaque jour à nous améliorer et à faire évoluer notre travail. Nous oeuvrons avec passion pour distribuer le bien-être et redonner confiance. Nous sommes des passionnées de l'espèce humaine, des chercheurs de pépites d'or. Nous sommes courageux, nous n'abondonnons jamais et nous sommes toujours 2 pas de vous
                    </Typography>
                    <Box sx={{position:'absolute',top:'-5px',left:'-25px',color:'primary.main'}}>
                        <QuoteLeftIcon fontSize="30px" />
                    </Box>
                    <Box sx={{position:'absolute',bottom:'-5px',right:'-25px',color:'primary.main'}}>
                        <QuoteRightIcon fontSize="30px" />
                    </Box>
                </Box>
                <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'},justifyContent:'center',alignItems:'center',mt:2}}>
                    <Typography component="span" color="primary.main" sx={{fontFamily:'frassel',fontSize:'h4.fontSize',fontStyle:'normal'}}>
                        Gabriel Lowe
                    </Typography> 
                    <Typography component="span" color="text.disabled" sx={{fontSize:'h6.fontSize',display:'inline-block',ml:1}}>
                        - Directeur Général
                    </Typography>
                </Box>
            </Box>
        </Container>
    </Box>
}

let VisionMission = ()=>{

    let Vision = ()=>{

        return <Grid item xs={12} md={6}>
            <Typography variant="h3" textAlign="center" color="primary.dark">Notre Vision</Typography>
            <Typography component="div" sx={{my:2,textIndent:'2rem',textAlign:'justify'}}>
                <p>
                    Chez CUSTOMER'S FIRM, nous pensons que la beauté est un droit qui appartient à tout être humain. Notre devoir est de le révéler à tout un chacun. Qu'elle soit interne ou externe, chacun possède une beauté particulière qu'il faut mettre en avant. Le tout est d'y croire et de le voir.
                </p>
            </Typography>
            <Box sx={{display:'block',width:'90%',mx:'auto',my:1,height:'3px',backgroundColor:'primary.dark',borderRadius:2}} />
            <Typography component="div" textAlign="center" fontWeight="600" sx={{fontStyle:'italic'}}>
                « All about improving people's lives » 
            </Typography>
        </Grid>
    }

    let Mission = ()=>{

        return <Grid item xs={12} md={6}>
            <Typography variant="h3" textAlign="center" color="primary.dark">Notre Mission</Typography>
            <Typography component="div" sx={{my:2,textIndent:'2rem',textAlign:'justify'}}>
                <p>
                    Les Laboratoires CUSTOMER'S FIRM se sont assignés pour mission d'améliorer et d'enrichir le capital beauté des femmes noires et métissées. D'avancer en mettant la ressource humaine et le management de qualité au coeur du métier afin d'offrir les produits de qualité au meilleur prix. L'objectif essentiel étant ainsi d'offrir des produits de meilleures qualités aux africains grâce à la mise sur pied d'une politique d'innovation permanente.
                </p>
            </Typography>
            <Box sx={{display:'block',width:'90%',mx:'auto',my:1,height:'3px',backgroundColor:'primary.dark',borderRadius:2}} />
            <Typography component="div" textAlign="center" fontWeight="600" sx={{fontStyle:'italic'}}>
                « Rendre la beauté accessible à tous les africains » 
            </Typography>
        </Grid>
    }

    return <Box sx={{py:{xs:3,sm:5,md:7}}}>
        <Container>
            <Grid container spacing={6}>
                <Vision/>
                <Mission/>
            </Grid>
        </Container>
    </Box>
}

const aPropos = () => {
  return (
    <Layout
        title="A Propos"
        description="L'essentiel à savoir concernant la société CUSTOMER'S FIRM"
    >
        <Directeur/>
        <VisionMission/>
    </Layout>
  )
}

export default aPropos

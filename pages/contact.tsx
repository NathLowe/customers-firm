import Layout from '@layouts/Layout'
import { 
  Typography,Box, Container, Grid, List, ListItem, 
  ListItemIcon, ListItemText, Stack, TextField, Skeleton
} from '@mui/material'
import React from 'react'

import {
  GoLocation as LocationIcon,
  GoClock as ClockIcon
} from 'react-icons/go'
import Button from '@components/MyButton'

let Localisation = ()=>{

  let Place = ()=>{
    return <ListItem>
      <ListItemIcon sx={{color:'primary.main'}}>
        <LocationIcon fontSize={"35px"}/>
      </ListItemIcon>
      <ListItemText
        primary={<Typography fontWeight="600" variant="h6" >CUSTOMER'S FIRM</Typography> }
        secondary={
          <>
            <Typography component="span" sx={{display:'block'}} variant="caption">SGBC Terminus Saint-Micher</Typography>
            <Typography component="span" sx={{display:'block'}} variant="caption">BP 6560 Douala</Typography>
          </>
        }
      />
    </ListItem>
  }

  let Horaire = ()=>{
    return <ListItem>
      <ListItemIcon sx={{color:'primary.main'}}>
        <ClockIcon fontSize={"35px"}/>
      </ListItemIcon>
      <ListItemText
        primary={
          <>
            <Box component='div'>
              <Typography component="span" fontWeight="600">Lundi - Vendredi :</Typography>
              <Typography component="span"> 08h00 - 18h00</Typography>
            </Box>
            <Box component='div'>
              <Typography component="span" fontWeight="600">Samedi :</Typography>
              <Typography component="span"> 08h00 - 14h00</Typography>
            </Box>
          </>
        }
      />
    </ListItem>
  }

  return <Box sx={{py:{xs:3,sm:5,md:7}}}>
    <Container>
      <Typography variant="h4" color="primary.dark">Où nous trouver ?</Typography>
      <Grid container spacing={2} sx={{mt:3}}>
        <Grid item xs={12} md={8}>
          <Box sx={{
            width:'100%',height:200
          }}>
            <Skeleton height="100%" variant="rectangular" animation="pulse" />
          </Box>
        </Grid>
        <Grid item xs>
          <List>
            <Place/>
            <Horaire/>
          </List>
        </Grid>
      </Grid>
    </Container>
  </Box>
}

let Message = ()=>{

  return <Box sx={{py:7,backgroundColor:'secondary.light'}}>
    <Container maxWidth="md">
      <Typography variant="h4" color="primary.dark">Participer à notre évolution ? Laissez nous un avis!</Typography>
      <Stack spacing={3} sx={{mt:3}}>
        <TextField variant="outlined" color="primary" name="nom" label="Nom" required />
        <TextField variant="outlined" color="primary" name="email" label="Adresse Mail" required />
        <TextField variant="outlined" color="primary" name="sujet" label="Sujet" />
        <TextField variant="outlined" color="primary" name="message" label="Votre avis" required rows={10} multiline />
        <Button >
          Envoyer
        </Button>
      </Stack>
    </Container>
  </Box>
}

const contact = () => {
  return (
    <Layout
      title={"Contactez Nous"}
      description={"Contactez-nous pour plus d'informations. Le meilleur reste à venir!"}
    >
      <Typography variant="h2" color="primary.dark" textAlign="center">Contactez Nous</Typography>

      <Localisation/>
      <Message/>

    </Layout>
  )
}

export default contact
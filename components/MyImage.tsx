import { Box } from '@mui/material'
import React from 'react'

const MyImage = ({src,...other}) => {
  return (
    <Box sx={{width:'100%', height:"fit-content",backgroundPosition:'center',backgroundSize:'cover',
    backgroundImage:`url(${src})`}}>
        <img style={{opacity:0}} src="/images/carre.jpg" width="100%" height="auto" />
    </Box>
  )
}

export default MyImage
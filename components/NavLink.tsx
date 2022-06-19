import { Typography } from '@mui/material'
import Link from 'next/link'
import React, { useEffect } from 'react'

import {useRouter} from 'next/router'



const NavLink = ({href,children}) => {

  let router = useRouter()
  let route = router.asPath
  let active = route === href

  return (
    <Link href={href}>
        <Typography sx={{
          m:'5px 10px',fontFamily:'basic',fontWeight:'bold',cursor:'pointer',
          fontSize:'27px', transition:'0.3s',
          '&:hover':{
            color:'primary.light'
          },
          ...( active && {fontFamily:'frassel',color:'primary.light'})
        }}>
            {children}
        </Typography>
    </Link>
  )
}

export default NavLink
import { Button } from '@mui/material'

import React from 'react'

import Link from 'next/link'

let ButtonComponent = ({children,sx,size})=>{

    return<Button size={size} variant="contained" color="primary" sx={{borderRadius:4,textTransform:'none',px:3,py:1,...sx}}>
        {children}
    </Button>
}

const MyButton = ({children,...other}) => {
    let {link,sx,size} = other

    return <>
        {link ?
            <ButtonComponent sx={sx} size={size}>
                <Link href={link}>
                    {children}
                </Link>
            </ButtonComponent>
            :
            <ButtonComponent sx={sx} size={size}>
                {children}
            </ButtonComponent>
        }
    </>
}

export default MyButton
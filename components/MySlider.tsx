import React from 'react'

import {
    BsFillArrowLeftCircleFill as ArrowLeftIcon,
    BsFillArrowRightCircleFill as ArrowRightIcon,
} from 'react-icons/bs'

import { Box } from '@mui/material'

import Image from '@components/MyImage'

const MySlider = ({datas}) => {

    let parentRef = React.useRef<HTMLDivElement>(null)
    let sliderRef = React.useRef<HTMLDivElement>(null)

    let [parentWidth,setParentWidth] = React.useState(0)
    let [slideState,setSlideState] = React.useState(0)

    let margin = 15 //in px

    React.useEffect(()=>{
        changeCardWidth()
        window.addEventListener('resize',changeCardWidth)
    },[setParentWidth])

    let changeCardWidth = React.useCallback(()=>{
        let newWidth = parentRef.current ? parentRef.current.offsetWidth : window.innerWidth
        if(parentWidth != newWidth){
            setParentWidth(newWidth)
        }
    },[setParentWidth])

    let setSlide = React.useCallback((position)=>{
        if(sliderRef.current){
            sliderRef.current.style.transform = `translateX(${position}px)`
        }
    },[sliderRef])

    let slideRight = React.useCallback(()=>{
        let sliderWidth = sliderRef.current ? sliderRef.current.offsetWidth : parentWidth
        let childNumber = sliderRef.current ? sliderRef.current.childElementCount : 4
        let childWidth = sliderWidth / childNumber
        let difference = sliderWidth > parentWidth ? sliderWidth - parentWidth : 0
        if(slideState < difference){
            if((slideState - childWidth) * -1 < difference){
                setSlide(slideState - childWidth)
                setSlideState(slideState - childWidth)
            }else{
                setSlide(-difference)
                setSlideState(-difference)
            }
        }
    },[sliderRef,parentWidth,slideState,setSlide])

    let slideLeft = React.useCallback(()=>{
        let sliderWidth = sliderRef.current ? sliderRef.current.offsetWidth : parentWidth
        let childNumber = sliderRef.current ? sliderRef.current.childElementCount : 4
        let childWidth = sliderWidth / childNumber
        let difference = sliderWidth > parentWidth ? sliderWidth - parentWidth : 0
        if(-slideState > 0){
            if((slideState + childWidth) * -1 > 0){
                setSlide(slideState + childWidth)
                setSlideState(slideState + childWidth)
            }else{
                setSlide(0)
                setSlideState(0)
            }
        }
    },[sliderRef,parentWidth,slideState,setSlide])

    return (
        <>
            <div style={{
                width:'100%',overflow:'hidden',position:'relative',marginTop:'1rem'
            }} ref={parentRef}>
                <div ref={sliderRef} style={{display:'flex',width:'max-content',transition:'0.5s'}}>
                {
                    datas.map((data,index)=>{
                        return <Box sx={{
                            width:{
                                xs:parentWidth/3 - margin,
                                md:parentWidth/4 - margin,
                                xl:parentWidth/5 - margin
                            },mr:`${margin}px`,transition:'0.3s'
                        }} key={index}>
                            {data}
                        </Box>
                    })
                }
                </div>
                <Box sx={{
                    position:'absolute',top:'50%',left:'10px',transform:'translateY(-50%)',color:'primary.light',zIndex:'2',opacity:'0.5',transition:'0.3s',cursor:'pointer',
                    '&:hover':{
                        opacity:0.9
                    }
                }} onClick={slideLeft} >
                    <ArrowLeftIcon fontSize="40px" />
                </Box>
                <Box sx={{
                    position:'absolute',top:'50%',right:'10px',transform:'translateY(-50%)',color:'primary.light',zIndex:'2',opacity:'0.5',transition:'0.3s',cursor:'pointer',
                    '&:hover':{
                        opacity:0.9
                    }
                }} onClick={slideRight} >
                    <ArrowRightIcon fontSize="40px" />
                </Box>
            </div>
        </>
    )
}

export default MySlider
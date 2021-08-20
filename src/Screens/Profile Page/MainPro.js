import React, { useEffect } from 'react'
import HeroFade from './HeroFade'
import Profile from './Profile'

export default function MainPro({width}) {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
   
    return (
        <>  
            <HeroFade />
            <Profile width={width} />    
        </>
    )
}

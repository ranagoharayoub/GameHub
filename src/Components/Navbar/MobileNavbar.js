import { Close, Menu } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import MobileMenu from './MobileMenu'
import './MobileNavbar.css'

function MobileNavbar() {
    const [menuOn, setmenuOn] = useState(false)
    return (
        <div className='mob-navbar'>
            <MobileMenu menuOn={menuOn}></MobileMenu>
            <div  className='menu'>
                {
                    menuOn?
                    <Close onClick={()=>setmenuOn(!menuOn)}></Close>
                    :
                    <Menu onClick={()=>setmenuOn(!menuOn)}></Menu>
                } 
            </div>
            <div className='logo'>
                <img src='/icons/gamehub.png' height='25px' alt='logo'></img>
            </div>
            <div className='login'>
                <button className='login-btn'>Login</button>
            </div>
        </div>
    )
}

export default MobileNavbar

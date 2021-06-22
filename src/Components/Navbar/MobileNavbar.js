import { Close, Menu } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import './MobileNavbar.css'

function MobileNavbar() {
    const [menuOn, setmenuOn] = useState(false)
    return (
        <div className='mob-navbar'>
            <MobileMenu menuOn={menuOn} off={()=>setmenuOn(false)}></MobileMenu>
            <div  className='menu'>
                {
                    menuOn?
                    <Close onClick={()=>setmenuOn(!menuOn)}></Close>
                    :
                    <Menu onClick={()=>setmenuOn(!menuOn)}></Menu>
                } 
            </div>
            <div className='logo'>
               <Link to='/'><img src='/icons/gamehub.png' height='25px' alt='logo'></img></Link> 
            </div>
            <div className='login'>
                <Link to='/login' className='login-btn'>Login</Link>
            </div>
        </div>
    )
}

export default MobileNavbar

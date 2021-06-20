import { Menu } from '@material-ui/icons'
import React from 'react'
import './MobileNavbar.css'

function MobileNavbar() {
    return (
        <div className='mob-navbar'>
            <div className='menu'>
                <Menu></Menu>
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

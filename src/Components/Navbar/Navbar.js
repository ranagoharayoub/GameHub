import React, { useState } from 'react'
import './Navbar.css'
import Sidebar from './SideBar'
import {Avatar} from '@material-ui/core'
import { Link } from 'react-router-dom'
function Navbar() {
    const [display, setdisplay] = useState(false)
    return (
        <div className='navbar'>
            <div className='Links'>
                <div>HOMES</div>
                <div>GAMES</div>
                <div>TOURNAMENT</div>
            </div>
            <div className='title'>
            <Link><img src='/icons/gamehub.png' height='30px' alt='search'></img></Link> 
            </div>
            <div className='icons-div'>
                <div className='icons'>
                    <img src='/icons/search.png' height='15px'  alt='search'></img>
                    <img src='/icons/alert.png' height='15px' alt='search'></img>
                    <Avatar alt="UserName" src="/" />
                    <div style={{fontSize:'small', opacity: '0.7'}} >Name</div>
                    <img onClick={()=> setdisplay(true)} src='/icons/dropdown.png' height='6.1px' alt='search'></img>
                </div>
            </div>
            <Sidebar toggle={display} off={()=> setdisplay(false)}></Sidebar>
        </div>
    )
}

export default Navbar

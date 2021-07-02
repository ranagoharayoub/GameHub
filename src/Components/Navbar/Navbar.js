import React, { useState, useEffect } from 'react'
import './Navbar.css'
import Sidebar from './SideBar'
import {Avatar} from '@material-ui/core'
import { Link } from 'react-router-dom'
function Navbar() {
    const [display, setdisplay] = useState(false);
    const [LoggedIn, setLoggedIn] = useState(false);
    const [name, setname] = useState("");

    // useEffect(async () => {
    //     var tok = localStorage.getItem("token");
    //     console.log("token check in navbar",tok)
    //     if(tok){
    //         setLoggedIn(true)
    //     }
    //   }, []);
    useEffect(() => {
       const callAPI = async () => {
                var tok = localStorage.getItem("token");
                console.log("token check in navbar",tok)
                if(tok){
                    setLoggedIn(true)
                    var username = localStorage.getItem("name");
                    setname(username);
                }}
                callAPI()
    }, [])

    return (
        
        <div className='navbar'>

            <div className='Links'>
                <Link className='link-cont' style={{textDecoration:'none', color:'inherit'}} to='/'>HOME</Link>
                <Link className='link-cont' style={{textDecoration:'none', color:'inherit'}} to='/games'>GAMES</Link>
                <Link className='link-cont' style={{textDecoration:'none', color:'inherit'}} to='/tournament'>TOURNAMENT</Link>
            </div>
            <div className='title'>
            <Link to='/'><img src='/icons/gamehub.png' height='10px' alt='search'></img></Link> 
            </div>
            <div className='icons-div'>
                {
                    LoggedIn?
                    <div className='icons'>
                    <img src='/icons/search.png' height='15px'  alt='search'></img>
                    <img src='/icons/alert.png' height='15px' alt='search'></img>
                    <Avatar alt={name} src="/" />
                    <div onClick={()=> setdisplay(true)} style={{fontSize:'small', opacity: '0.7'}} >{name}</div>
                    <img  src='/icons/dropdown.png' height='6.1px' alt='search'></img>
                    </div>
                    :
                    <div className='btn-flex'>
                        {/* <Link onClick={()=> setLoggedIn(true)} to='/login' className='home-login-btn'>Login</Link>
                        <Link onClick={()=> setLoggedIn(true)} to='/signup' className='join-free-btn'>Join Free</Link> */}
                        <Link to='/login' className='home-login-btn'>Login</Link>
                        <Link to='/signup' className='join-free-btn'>Join Free</Link>
                    </div>

                }
                        <Sidebar toggle={display} off={()=> setdisplay(false)}></Sidebar>
            </div>

        </div>
    )
}

export default Navbar

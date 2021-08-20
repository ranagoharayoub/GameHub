import React, { useState, useEffect, useContext } from 'react'
import './Navbar.css'
import Sidebar from './SideBar'
import {Avatar} from '@material-ui/core'
import {ContextAPI} from '../../Context/Context'
import { Link } from 'react-router-dom'
function Navbar() {

    

    const [display, setdisplay] = useState(false);
    const [LoggedIn, setLoggedIn] = useState(false);
    const [id, setid] = useState("");

 

    const [profilepicture, username] = useContext(ContextAPI)
    useEffect(() => {
       
                var tok = localStorage.getItem("token");
                var id = localStorage.getItem("userdata")
                console.log("token check in navbar",tok)
                if(tok){
                    setLoggedIn(true)
                    setdisplay(true)
                    setid(id)
                    // var username = localStorage.getItem("name");
                    // setname(username);
                }
                
                  
    }, [])

    return (
        
        <div className='navbar'>

            <div className='Links'>
                <Link className='link-cont' style={{textDecoration:'none', color:'inherit'}} to='/'>HOME</Link>
                <Link className='link-cont' style={{textDecoration:'none', color:'inherit'}} to='/games'>GAMES</Link>
                <Link className='link-cont' style={{textDecoration:'none', color:'inherit'}} to='/alltournament'>TOURNAMENT</Link>
                <Link className='link-cont' style={{textDecoration:'none', color:'inherit', textTransform:'uppercase'}} to='/champs'>Champions</Link>
            </div>
            <div className='title'>
            <Link to='/'><img src='/icons/gamehub.png' height='10px' alt='search'></img></Link> 
            </div>
            <div className='icons-div'>
                {
                    LoggedIn?
                    <div className='icons-cont'>
                    {/* <img src='/icons/search.png' height='15px'  alt='search'></img>
                    <img src='/icons/alert.png' height='15px' alt='search'></img> */}
                    <Link to={`/profile/${id}`} >
                        <Avatar style={{height:'5.5vh', width:"5.5vh"}} alt={username} src={profilepicture} />
                    </Link>
                    <div onClick={()=> setdisplay(true)} style={{fontSize:'1vw', opacity: '0.7'}} >{username}</div>
                    <img  src='/icons/dropdown.png' style={{height:'20%'}} alt='search'></img>
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

import { Avatar } from '@material-ui/core'
import { Close, Menu } from '@material-ui/icons'
import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import {ContextAPI} from '../../Context/Context'
import MobileMenu from './MobileMenu'
import './MobileNavbar.css'

function MobileNavbar() {
    const [menuOn, setmenuOn] = useState(false)
    const [LoggedIn, setLoggedIn] = useState(false);
    // eslint-disable-next-line
    const [name, setname] = useState("");

    const [profilepicture, username] = useContext(ContextAPI)
    var userid = localStorage.getItem("userdata") 

    useEffect(() => {
       const callAPI = async () => {
                var tok = localStorage.getItem("token");
                //console.log("token check in navbar",tok)
                
                if(tok){
                    setLoggedIn(true)
                    var name = localStorage.getItem("name");
                    setname(name);
                }}
                callAPI()
    }, [])
    return (
        <div className='mob-navbar' >
            <MobileMenu menuOn={menuOn} off={()=>setmenuOn(false)}></MobileMenu>
            <div  className='menu'>
                {
                    menuOn?
                    <Close onClick={()=>setmenuOn(!menuOn)}></Close>
                    :
                    <Menu onClick={()=>setmenuOn(!menuOn)}></Menu>
                } 
            </div>
            <div className='logo'  >
               <Link to='/'><img src='/icons/gamehub.png' width='100px' alt='logo'></img></Link> 
            </div>
            {LoggedIn?
            <Link to={`/profile/${userid}`} className='after-login-icons'>
                <Avatar alt={username} src={profilepicture}></Avatar>
                {/* <div style={{marginLeft:'0px'}}>{name}</div> */}
            </Link>
            :     
            <div className='login' >
            <Link to='/login' className='login-btn'>Login</Link>
            </div>
            }
            {/* {LoggedIn === false && 
            <div className='login' >
            <Link to='/login' className='login-btn'>Login</Link>
            </div>
            } */}
            
        </div>
    )
}

export default MobileNavbar


// style={LoggedIn?{width:'80%', paddingRight:'20%'}: null}
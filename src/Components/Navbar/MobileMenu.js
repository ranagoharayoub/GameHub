import React, { useState, useEffect, useContext } from 'react'
import './MobileMenu.css'
// import { ArrowDropDown } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { ContextAPI } from '../../Context/Context';
import { AccountBox } from '@material-ui/icons';
function MobileMenu({menuOn, off}) {
    const [LoggedIn, setLoggedIn] = useState(false);
    // eslint-disable-next-line
    const [name, setname] = useState("");
    const [id, setid] = useState("");

    const [profilepicture, username, balance, credits] = useContext(ContextAPI)

    console.log(profilepicture, username)

    function signout() {
        localStorage.removeItem("token");
        localStorage.removeItem("userdata")
        localStorage.removeItem("name")
        window.location.href = "/";
      }

    useEffect(() => {
        const callAPI = async () => {
                 var tok = localStorage.getItem("token");
                 console.log("token check in navbar",tok)
                 if(tok){
                     setLoggedIn(true)
                     var name = localStorage.getItem("name");
                     setname(name);
                     var id = localStorage.getItem("userdata")
                    setid(id);
                 }}
                 callAPI()
     }, [])
    return (<>

        {
            LoggedIn?

        //     <div className='menu-cont' style={menuOn?{display:'flex'}:{display:'none'}}>
        //     <div className='ico-title'>
        //         <img src='/icons/search.png' height='20px' alt='icon'></img>
        //         <div className='title'>Find players/Teams</div>
        //     </div>
        //     <Link to='/' onClick={off} className='ico-title'>
        //         <img src='/icons/home.png' height='20px' alt='icon'></img>
        //         <div className='title'>Home</div>
        //     </Link>
        //     <Link onClick={off} className='ico-title' to='/alltournament'>
        //         <img src='/icons/trophy.png' height='20px' alt='icon'></img>
        //         <div className='title'>Tournaments</div>
        //     </Link>
        //     <Link onClick={off} className='ico-title' to='/games'>
        //         <img src='/icons/trophy.png' height='20px' alt='icon'></img>
        //         <div className='title'>Games</div>
        //     </Link>
        //     <div className='ico-title'>
        //         <img src='/icons/Calendar.png' height='20px' alt='icon'></img>
        //         <div className='title'>Timed Events</div>
        //     </div>
        //     <div className='ico-title'>
        //         <img  src='/icons/avatar.png' alt='avatar' height='20px'></img>
        //         <div>
        //         <div className='title'>
        //             <Link to={`/profile/${id}`}>   View Profile </Link> </div>
        //         </div>
        //     </div>
        //     <div className='ico-title'>
        //         <img src='/icons/dollar.png' height='20px' alt='icon'></img>
        //         <div className='title'>Cash Matches</div>
        //     </div>
        //     <div className='ico-title'>
        //         <img src='/icons/Chart.png' height='20px' alt='icon'></img>
        //         <div className='title'>Leaderboards</div>
        //     </div>
        //     <div className='ico-title'>
        //         <img src='/icons/news.png' height='20px' alt='icon'></img>
        //         <div className='title'>News</div>
        //     </div>
        //     <div className='ico-title'>
        //         <img src='/icons/profits.png' height='12px' alt='icon'></img>
        //         <div className='title'>Stats Tracker</div>
        //     </div>
        //     <Link to='/faq' onClick={off} className='ico-title'>
        //         <img src='/icons/Help.png' height='20px' alt='icon'></img>
        //         <div className='title'>FAQ</div>
        //     </Link>
        //     <div onClick={signout} className='ico-title'>
        //         <img src='/icons/Help.png' height='20px' alt='icon'></img>
        //         <div className='title' >Signout</div>
        //     </div>
        //     <div className='lang' style={{paddingLeft:'20px', marginTop:'15vh'}}>
        //         <button>
        //             <img src='/icons/flag.png' alt='flag'></img>
        //             <div>English</div>
        //             <ArrowDropDown></ArrowDropDown>
        //         </button>
        //     </div>
        // </div>
        <div
      className="menu-cont"
      style={menuOn?{display:'flex'}:{display:'none'}}
    >
      <div className="close">
        {/* <img
          onClick={off}
          src="/icons/close.png"
          height="11.56px"
          alt="cross"
          style={{ cursor: "pointer" }}
        ></img> */}
        <div style={{font: 'normal normal bold 5vw / 5vh Arial', paddingLeft:'10vw'}}>{name}</div>
      </div>
      {/* <div className="cash-cont">
      </div> */}
      <div className="boxes">
        <div className="left-box">
          <div style={{ font: "normal normal normal 15px/30px Bahnschrift" }}>
          ${parseFloat(balance).toFixed(2)}
          </div>
          <Link
            to='/depositfunds'
            onClick={off}
            style={{
              color: "#F69204",
              font: "normal normal normal 15px/15px Bahnschrift",
              textDecoration:'none'
            }}
          >
            +Add Cash
          </Link>
        </div>
        <div className="right-box">
          <div style={{ font: "normal normal normal 15px/15px Bahnschrift" }}>
            {credits? credits: 0}
          </div>
          <Link
            to="/buycredits"
            onClick={off}
            style={{
              color: "#F69204",
              font: "normal normal normal 15px/15px Bahnschrift",
              textDecoration:'none'
            }}
          >
            Buy Credit
          </Link>
        </div>
      </div>
      <div className="view-profile">
        <img
          
          src="/icons/avatar.png"
          alt="avatar"
          height="12px"
        ></img>
        <Link onClick={off} style={{textDecoration:'none', color:'white', paddingLeft:'5px'}} className='common' to={`/profile/${id}`}>View Profile </Link>
      </div>
      
      <Link to='/matches' onClick={off} className="common">My Matches</Link>
      {/* <div className="common">My Teams</div>
      <div className="common">Team Invites</div> */}
      <Link to='/ticket' onClick={off} className="common">My Tickets</Link>
      <div className="line"></div>
      <Link to="/mybank" className="common">My Bank</Link>
      {/* <div className="common">Purchased Items</div>
      <div className="common">Prize Claims</div> */}
      <div className="line"></div>
      <Link to={`/settings/${id}`} onClick={off} className="common">
        Account Settings
      </Link>
      <div className="common" onClick={() => signout()}>
        Sign out
      </div>
      <div className="lang">
        <div className='lang-btn'>
          <img src="/icons/flag.png" alt="flag"></img>
          <div>English</div>
          {/* <ArrowDropDown></ArrowDropDown> */}
        </div>
      </div>
    </div>
            :

          <div className='menu-cont' style={menuOn?{display:'flex'}:{display:'none'}} >
            <Link className='ico-title' to='/signup' onClick={off}>
              <AccountBox style={{ width: '17px'}} ></AccountBox>
                {/* <img src='/icons/search.png' height='20px' alt='icon'></img> */}
                <div className='title'>Sign up</div>
            </Link>
            <Link className='ico-title' onClick={off} to='/'>
                <img src='/icons/home.png' height='20px' alt='icon'></img>
                <div className='title'>Home</div>
            </Link>
            <Link onClick={off} className='ico-title' to='/alltournament'>
                <img src='/icons/trophy.png' height='20px' alt='icon'></img>
                <div className='title'>Tournaments</div>
            </Link>
            <Link onClick={off} className='ico-title' to='/games'>
                <img src='/icons/trophy.png' height='20px' alt='icon'></img>
                <div className='title'>Games</div>
            </Link>
            {/* <div className='ico-title'>
                <img src='/icons/Calendar.png' height='20px' alt='icon'></img>
                <div className='title'>Timed Events</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/dollar.png' height='20px' alt='icon'></img>
                <div className='title'>Cash Matches</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/Chart.png' height='20px' alt='icon'></img>
                <div className='title'>Leaderboards</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/news.png' height='20px' alt='icon'></img>
                <div className='title'>News</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/profits.png' height='12px' alt='icon'></img>
                <div className='title'>Stats Tracker</div>
            </div> */}
            <Link onClick={off} to='/faq' className='ico-title'>
                <img src='/icons/Help.png' height='20px' alt='icon'></img>
                <div className='title'>FAQ</div>
            </Link>
            {/* <div className='lang' style={{paddingLeft:'20px', marginTop:'15vh'}}>
                <button>
                    <img src='/icons/flag.png' alt='flag'></img>
                    <div>English</div>
                    
                </button>
            </div> */}
          </div>
        }

        </>
    )
}

export default MobileMenu

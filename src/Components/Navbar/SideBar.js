import React, { useState, useEffect, useContext } from "react";
import "./SideBar.css";
import {ContextAPI} from '../../Context/Context'
import { Close } from "@material-ui/icons";
import { Link } from "react-router-dom";

function SideBar({ toggle, off }) {
  /* eslint-disable */
  const [profilepicture, username, balance, credits] = useContext(ContextAPI)

  //console.log(profilepicture, username)

  const [name, setname] = useState("");
  const [id, setid] = useState("");
  function signout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userdata")
    localStorage.removeItem("name")
    window.location.href = "/";
  }

  useEffect(() => {
    var name = localStorage.getItem("name");
    setname(name);
    var id = localStorage.getItem("userdata")
    setid(id);
  }, []);

  return (
    <div
      className="side-bar-cont"
      style={toggle ? { display: "flex" } : { display: "none" }}
    >
      <div className="close">
        {/* <img
          onClick={off}
          src="/icons/close.png"
          
          alt="cross"
          style={{ cursor: "pointer", width:"1vw" }}
        ></img> */}
        <Close style={{ cursor: "pointer", width:"2vw" }} onClick={off} className='close-icon'></Close>
        <p style={{font: 'normal normal bold 1.2vw / 2.5vw Arial'}}>{name}</p>
      </div>
      {/* <div className="cash-cont">
      </div> */}
      <div className="boxes">
        <div className="left-box">
          <div style={{ font: "normal normal normal 1vw/1vw Bahnschrift" }}>
          ${parseFloat(balance).toFixed(2)}
          </div>
          <Link
            to='/depositfunds'
            onClick={off}
            style={{
              color: "#F69204",
              font: "normal normal normal 1vw/1vw Bahnschrift",
              textDecoration:'none'
            }}
          >
            +Add Cash
          </Link>
        </div>
        <div className="right-box">
          <div style={{ font: "normal normal normal 1vw/1vw Bahnschrift" }}>
            {credits? credits: 0}
          </div>
          <Link
            to="/buycredits"
            onClick={off}
            style={{
              color: "#F69204",
              font: "normal normal normal 1vw/1vw Bahnschrift",
              textDecoration:'none'
            }}
          >
            Buy Credits
          </Link>
        </div>
      </div>
      <div className="view-profile">
        <img
          style={{ marginLeft: "2vw" }}
          src="/icons/avatar.png"
          alt="avatar"
          height="12px"
        ></img>
        <Link onClick={off} 
        style={{textDecoration:'none', color:'white', paddingLeft:'5px', font: 'normal normal normal 1vw/2vw Calibri'}} 
        className='common' to={`/profile/${id}`}>View Profile </Link>
      </div>
      
      <Link to='/matches' onClick={off} className="common"
      style={{font: 'normal normal normal 1vw/2.5vw Calibri'}}
      >My Matches</Link>
      {/* <div className="common"
      style={{font: 'normal normal normal 1vw/2.5vw Calibri'}}
      >My Teams</div>
      <div className="common"
      style={{font: 'normal normal normal 1vw/2.5vw Calibri'}}
      >Team Invites</div> */}
      <Link to='/ticket' onClick={off} className="common"
      style={{font: 'normal normal normal 1vw/2.5vw Calibri'}}
      >My Tickets</Link>
      <div className="line"
      style={{font: 'normal normal normal 1vw/2.5vw Calibri'}}
      ></div>
      <Link to='/mybank' onClick={off} className="common"
      style={{font: 'normal normal normal 1vw/2.5vw Calibri'}}
      >My Bank</Link>
      {/* <div className="common"
      style={{font: 'normal normal normal 1vw/2.5vw Calibri'}}
      >Purchased Items</div>
      <div className="common"
      style={{font: 'normal normal normal 1vw/2.5vw Calibri'}}
      >Prize Claims</div> */}
      <div className="line"></div>
      <Link to={`/settings/${id}`} 
      style={{font: 'normal normal normal 1vw/2.5vw Calibri'}}
      onClick={off} className="common">
        Account Settings
      </Link>
      <div className="common" 
      style={{font: 'normal normal normal 1vw/2.5vw Calibri'}}
      onClick={() => signout()}>
        Sign out
      </div>
      <div className="lang" style={{height: '5vh'}}>
        <div className='lang-btn'
        style={{font: 'normal normal bold 1.3vw/1.3vw Calibri'}}
        >
          <img src="/icons/flag.png" alt="flag"
          style={{width:'2vw'}}
          ></img>
          <div>English</div>
          {/* <ArrowDropDown></ArrowDropDown> */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;

import React, { useState, useEffect, useContext } from "react";
import "./SideBar.css";
import {ContextAPI} from '../../Context/Context'
import { ArrowDropDown } from "@material-ui/icons";
import { Link } from "react-router-dom";

function SideBar({ toggle, off }) {
  
  const [profilepicture, username, balance, credits] = useContext(ContextAPI)

  console.log(profilepicture, username)

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
        <img
          onClick={off}
          src="/icons/close.png"
          height="11.56px"
          alt="cross"
          style={{ cursor: "pointer" }}
        ></img>
        <div>{name}</div>
      </div>
      <div className="cash-cont">
        {/* <img src="/icons/caution.png" height="16px" alt="alert"></img> */}
        {/* <div>Cash Matches</div> */}
        {/* <FormControlLabel
          style={{ marginLeft: "5px" }}
          control={
            <Switch
              size="small"
              checked={checked}
              onChange={() => setchecked(!checked)}
            />
          }
        /> */}
      </div>
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
              font: "normal normal normal 15px/10px Bahnschrift",
              textDecoration:'none'
            }}
          >
            +Add Cash
          </Link>
        </div>
        <div className="right-box">
          <div style={{ font: "normal normal normal 15px/30px Bahnschrift" }}>
            {credits? credits: 0}
          </div>
          <Link
            to="/buycredits"
            onClick={off}
            style={{
              color: "#F69204",
              font: "normal normal normal 15px/10px Bahnschrift",
              textDecoration:'none'
            }}
          >
            Buy Credit
          </Link>
        </div>
      </div>
      <div className="view-profile">
        <img
          style={{ marginLeft: "10px" }}
          src="/icons/avatar.png"
          alt="avatar"
          height="12px"
        ></img>
        <Link onClick={off} style={{textDecoration:'none', color:'white', paddingLeft:'5px'}} className='common' to={`/profile/${id}`}>View Profile </Link>
      </div>
      
      <Link to='/matches' onClick={off} className="common">My Matches</Link>
      <div className="common">My Teams</div>
      <div className="common">Team Invites</div>
      <Link to='/ticket' onClick={off} className="common">My Tickets</Link>
      <div className="line"></div>
      <div className="common">My Bank</div>
      <div className="common">Purchased Items</div>
      <div className="common">Prize Claims</div>
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
          <ArrowDropDown></ArrowDropDown>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

import React, { useEffect, useState } from "react";
import "./IndTour.css";
import img from "../bg/inc-tour-bg.jpg";
import callImg from "../bg/call-duty.png";
import tabIcon1 from "../bg-icons/prizes-icon.png";
import tabIcon2 from "../bg-icons/prizes-icon2.png";
import tabIcon3 from "../bg-icons/prizes-icon3.png";
import tabIcon4 from "../bg-icons/prizes-icon4.png";
import tabIcon5 from "../bg-icons/prizes-icon5.png";
import prizeIcon from "../bg-icons/prize-icon6.png";
import Rules from "../Components/Tounament/Rules";
import Bracket from "../Components/Tounament/Bracket";
import Teams from "../Components/Tounament/Teams";
import Admin from "../Components/Tounament/Admin";
import axios from "axios";
import Timer from "react-compound-timer";
import {useParams, useHistory} from "react-router-dom";
import '../mdl-tabs-links/material.teal-indigo.min.css'
/*eslint-disable*/
export default function IndTour({width}) {

const [data, setdata] = useState([])
const [loading, setloading] = useState(true)
const [state, setstate] = useState({
  firstprize:'',
  secondprize:'',
  thirdprize:'',
})
const {gameId} =useParams()
let history = useHistory()

var token = localStorage.getItem('token')

const number = (a) => {
    return a.replace(":", "");
  }


function getsec(a) {
    var myDate = new Date(a); // a is start_on
    var date = new Date(); // current date
    var dou2 = myDate.getTime() - date.getTime();
    return dou2;
  }
  useEffect(() => {
    // componentHandler.upgradeDom();

      const callApi = async() =>{
        await axios.get('https://gamehubx.com/api/v1/tournament/'+number(gameId)+'/').then((res)=> setdata(res.data)).catch((error)=> console.log(error))
        console.log(data)
        setloading(false)
        componentHandler.upgradeDom()
         
       }
       callApi()

      
  }, [gameId])


useEffect(() => {
  if (!loading) {
    try {
      setstate({
      firstprize: data.tournament_prizes[0].amount,
      secondprize: data.tournament_prizes[1].amount,
      thirdprize: data.tournament_prizes[2].amount,
    })
  } catch (error) {
    console.log(error)
  }
  }
}, [loading])

const enrollHandler = async() =>{
    if (token) {
     var userid = localStorage.getItem('userdata')
     console.log('sending request')
     const data = JSON.stringify({
       "user": userid,
       "tournament":number(gameId),
     })
     const headers = {
       "Authorization": "Token "+ token,
       "Content-Type": "application/json",
     }
     await axios.post('https://gamehubx.com/api/v1/tournament/'+number(gameId)+'/enroll/',data,{
       headers: headers,
     }).then(res => {console.log('enroll success',res); history.push("/matches")}).catch(error => console.log('enrol failure',error))

    } else {
      history.push("/login");
    }


}




console.log(state)
  return (
    // Inctour Main
    <div class="inctour-main">
      {/* Inctour First Section Start */}
      <div class="inctour-main-background">
        <img src={img} />
      </div>
      <div class="inctour-main-background mob">
        <img src={callImg} />
      </div>
      <div class="tournament-card">
        <div class="tournament-card-inner">
          <div class="tournament-card-img-box">
            <img src={ data.image } alt='game'/>
          </div>
          <div class="tournament-card-text-box">
            {/* <h2>2v2 Single Elimination Call of Duty Warzone TOURNAMENT</h2> */}
            <h2>{data.title}</h2>
            <div class="tour-lower-text">
              <p>
                <b>Platform:</b> {data.platform_detail}
              </p>
              <p>
                <b>Registration:</b> OPEN <span>
                Starts in{" "}
              {
                <Timer initialTime={getsec(data.start_on)} direction="backward">
                  <Timer.Hours /> hours <Timer.Minutes /> minutes
                </Timer>
              }
                  </span>
              </p>
              <div class="tour-small-main">
                <div class="tour-small-item">
                  <div class="tour-small-tax">
                    <p >ENTRY</p>
                    {/* <p>$50</p> */}
                    <p style={{display:'flex'}} >{data.entry_fee}<p style={{fontSize:'small',textTransform:'lowercase', marginLeft:'5px'}}>Credits</p></p>
                    
                  </div>
                </div>
                <div class="tour-small-item">
                  <div class="tour-small-tax">
                    {/* <p>ENTRY FEE</p>
                    <p>$50</p> */}
                    <p>TEAM SIZE</p>
                    <p>{data.team_size}</p>
                  </div>
                </div>
                <div class="tour-small-item">
                  <div class="tour-small-tax">
                    <p>MAX TEAM</p>
                    <p>{data.max_team}</p>
                  </div>
                </div>
                <div class="tour-small-item">
                  <div class="tour-small-tax">
                    <p>TOP PRIZE</p>
                    {/* <p>${ loading ? null :  data.tournament_prizes[0].amount}</p> */}
                    <p>${state.firstprize}</p>
                  </div>
                </div>
              </div>
            </div>
            <div onClick={enrollHandler} className='enroll-now'>Enroll Now</div>
            {/* <Link to={token?'/matches': '/login'} onClick={enrollHandler} className='enroll-now'>Enroll Now</Link> */}
          </div>
        </div>
      </div>
      {/* Inctour First Section End */}

      {/* Inctour Tabs Section Start */}
      <section class="inctour-tabs-section">
        <div class="inctour-tabs">
          <div class="mdl-grid">
            <div class="mdl-cell">{/* <h6>Choose your console</h6> */}</div>
          </div>
          <div class="mdl-grid">
            <div class="mdl-cell">
              <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                <div class="mdl-tabs__tab-bar">
                  <a href="#prizes"  class="mdl-tabs__tab is-active" >
                    <img src={tabIcon1} />
                    Prizes
                  </a>
                  <a href="#rules" class="mdl-tabs__tab">
                    <img src={tabIcon2} />
                    Rules
                  </a>
                  <a href="#bracket" class="mdl-tabs__tab">
                    <img src={tabIcon3} />
                    BRACKET
                  </a>
                  <a href="#team"  class="mdl-tabs__tab">
                    <img src={tabIcon4} />
                    TEAMS
                  </a>
                  <a href="#admin" class="mdl-tabs__tab">
                    <img src={tabIcon5} />
                    ADMIN
                  </a>
                </div>
                {/* ================ Prizes =============== */}
                <div class="mdl-tabs__panel is-active" id="prizes">
                  <div class="tab-content prizes-content">
                    <div class="prize-cards">
                      <div class="prize-card-main">
                        {/* ========== Prize Card 1 ============ */}
                        <div class="prize-card">
                          <h4>1st Place</h4>
                          <img src={prizeIcon} />
                          {/* <h5>${ loading ? null :  data.tournament_prizes[0].amount}</h5> */}
                          <h5>${state.firstprize}</h5>
                        </div>
                        {/* ========== Prize Card 2 ============ */}
                        <div class="prize-card">
                          <h4>2nd Place</h4>
                          <img src={prizeIcon} />
                          {/* <h5>${ loading ? null :  data.tournament_prizes[1].amount}</h5> */}
                          <h5>${state.secondprize}</h5>
                        </div>
                        {/* ========== Prize Card 3 ============ */}
                        <div class="prize-card">
                          <h4>3rd Place</h4>
                          <img src={prizeIcon} />
                          {/* <h5>${ loading ? null :  data.tournament_prizes[2].amount}</h5> */}
                          <h5>${state.thirdprize}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ================ Rules =============== */}
                <div class="mdl-tabs__panel"  id="rules">
                  <Rules />
                </div>
                {/* ================ Bracket =============== */}
                <div class="mdl-tabs__panel"  id="bracket">
                  <Bracket team_size={data.team_size} />
                </div>
                {/* ================ Team =============== */}
                <div class="mdl-tabs__panel"  id="team">
                  <Teams />
                </div>
                {/* ================ Admin =============== */}
                <div class="mdl-tabs__panel"  id="admin">
                  <Admin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Inctour Tabs Section End */}
    </div>
  );
}

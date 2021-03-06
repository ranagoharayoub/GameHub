import React, { useEffect, useState } from "react";
import "./TournamentCard.css";
import Timer from "react-compound-timer";
import {Link} from 'react-router-dom'


function TournamentCard({ width, data }) {
  const [name, setname] = useState("score-cont");

  useEffect(() => {
    width >= "800" ? setname("score-cont") : setname("mob-score");
  }, [width]);
  //console.log("datapassed as props", data);

  function getsec(a) {
    var myDate = new Date(a); // a is start_on
    var date = new Date(); // current date
    var dou2 = myDate.getTime() - date.getTime();
    return dou2;
  }


  return (
    <div className="tourn-card">
      <div className="upper">
        <div className="img-badge">
          <img className="tourn-img" src={data.image} alt="img"></img>
          {/* <img className="badge" src="/icons/badge.png" alt="badge"></img> */}
          <img className="badge-price" src="/icons/badge.png" alt="badge"></img>
          <div className="price" style={{ color: "black" }}>
            ${data.tournament_prizes[0]? data.tournament_prizes[0].amount : 0}
          </div>
        </div>
        <div className="tourn-cont">
          <div className="tourn-title" style={{ color: "white" }}>
            {data.title}
          </div>
          <div className="tourn-time">
           
            <div className="time">{new Date(data.start_on).toDateString()}</div>
            {
              getsec(data.start_on)>0?
              <div className="starts">
              
              Starts in{" "}
              {
                getsec(data.start_on) > 24*60*60*1000 ?
                <Timer initialTime={getsec(data.start_on)} direction="backward">
                  <Timer.Days /> Days <Timer.Hours /> hours 
                </Timer>
                :
                getsec(data.start_on) > 1*60*60*1000 ?
                <Timer initialTime={getsec(data.start_on)} direction="backward">
                <Timer.Hours /> hours <Timer.Minutes /> minutes
                </Timer>
                :
                <Timer initialTime={getsec(data.start_on)} direction="backward">
                <Timer.Minutes /> minutes <Timer.Seconds /> Seconds 
                </Timer>
              }
            </div>
            :
            <div className="starts">
              
              Started
            </div>
            }
          </div>
          <div
            className="score-cont"
            style={
              name === "score-cont" ? { display: "flex" } : { display: "none" }
            }
          >
            <div className="column">
              <div className="entry">ENTRY</div>
              <div className="numbers" style={{ display: "flex" }}>
                {" "}
                {data.entry_fee}{" "}
                <div style={{ fontSize: "small", marginLeft: "5px" }}>
                  credits
                </div>
              </div>
            </div>
            <div className="column">
              <div className="entry">TEAM SIZE</div>
              <div className="numbers">{data.team_size}</div>
            </div>
            <div className="column">
              <div className="entry">MAX-TEAM</div>
              <div className="numbers">{data.max_team}</div>
            </div>
            <div className="column">
              <div className="entry">ENTERED</div>
              <div className="numbers">{data.entered}</div>
            </div>
            <div className="column">
              <div className="entry">PLATFORM</div>
              <div className="numbers" style={{ fontSize: "small" }}>
                {" "}
                {data.platform_detail}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mob-score"
        style={name === "mob-score" ? { display: "flex" } : { display: "none" }}
      >
        <div className="column">
          <div className="entry">ENTRY</div>
          <div className="numbers" style={{ display: "flex" }}>
            {" "}
            {data.entry_fee}{" "}
            <div style={{ fontSize: "small", marginLeft: "5px" }}>credits</div>
          </div>
        </div>
        <div className="column">
          <div className="entry">TEAM SIZE</div>
          <div className="numbers">{data.team_size}</div>
        </div>
        <div className="column">
          <div className="entry">MAX-TEAM</div>
          <div className="numbers">{data.max_team}</div>
        </div>
        <div className="column">
          <div className="entry">ENTERED</div>
          <div className="numbers">{data.entered}</div>
        </div>
        <div className="column">
          <div className="entry">PLATFORM</div>
          <div className="numbers" style={{ fontSize: "small" }}>
            {" "}
            {data.platform_detail}
          </div>
        </div>
      </div>
      <div className="bottom">
        <Link 
          to={`/tournament/${data.slug}/${data.id}`}
          // to={{
          //   pathname: `/tournament/:${data.slug}/:${data.id}`,
          //   state:{
          //     gameId: data.id
          //   }
          // }}
          className="view-details"
          >
            VIEW DETAILS
        </Link>
        <img
          style={{ marginLeft: "20px" }}
          src="/icons/right-arrow .png"
          alt="arrow"
        ></img>
      </div>
    </div>
  );
}

export default TournamentCard;

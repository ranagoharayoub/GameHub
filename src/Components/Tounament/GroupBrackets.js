import React from 'react'
import bracketIcon from "../../bg-icons/profile-tournament.webp";

function GroupBrackets({userArray, isStarted, firstCall, round, lastCall}) {



    return (
                    <div class="tournament-details-tab-bracket-group">
                      {
                        firstCall?
                        <div style={{height:'25px', fontWeight:'bold', textTransform:'capitalize'}}>{round}</div>
                        :
                        // <div style={{fontSize:'25px', color:'transparent'}}>Round</div>
                        <div style={{height:'25px'}}></div>
                      }
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row" >
                        <img src={bracketIcon} alt='brack'/>
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                          {
                            isStarted && userArray.length>0?
                            <div class="tournament-details-team">{userArray[0].username}</div>
                            :
                            <div class="tournament-details-team">{null}</div>
                          }
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} alt='brack'/>
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                          {
                            isStarted && userArray.length>0?
                            <div class="tournament-details-team">{userArray[1].username}</div>
                            :
                            <div class="tournament-details-team">{null}</div>
                          }
                            {/* <div class="tournament-details-team">{userArray? userArray[1].username: null}</div> */}
                          </div>
                        </div>
                      </div>
                      {/* <div style={{fontSize:'25px', marginBottom:'25px', color:'white' }}>Round</div> */}
                      {
                        lastCall?
                        <div style={{height:'25px'}}></div>
                        :
                        <div style={{height:'25px'}}></div>
                        // null
                      }
                    </div>        
    )
}

export default GroupBrackets

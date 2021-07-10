import React from 'react'
import bracketIcon from "../../bg-icons/profile-tournament.webp";

function GroupBrackets({userArray, isStarted}) {
  if (isStarted && userArray.length>0) {
    console.log(isStarted,userArray)
  }

    return (
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} alt='brack'/>
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team">{userArray.length>0? userArray[0].username: null}</div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} alt='brack'/>
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team">{userArray.length>0? userArray[1].username: null}</div>
                          </div>
                        </div>
                      </div>
                    </div>        
    )
}

export default GroupBrackets

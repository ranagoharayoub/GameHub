import React from 'react'
import bracketIcon from "../../bg-icons/profile-tournament.webp";

function GroupBrackets() {

    return (
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} alt='brack'/>
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} alt='brack'/>
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
        
                
    )
}

export default GroupBrackets

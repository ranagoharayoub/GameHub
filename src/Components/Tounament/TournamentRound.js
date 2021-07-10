import React from "react";
import GroupBrackets from "./GroupBrackets";
import bracketIcon from "../../bg-icons/profile-tournament.webp";
function TournamentRound({ size, odd, round, enrollUser, isStarted, displayName}) {


  function change(a) {
    return a.replace("_", " ")
  }

  console.log(change(round))
  console.log('user length', enrollUser.length)
  var rows = [];
  var userArray = []
  for (let index = 0; index < size; index++) {
    if (isStarted) {
      for (let index = 0; index < size*2; index=index+2) {
        userArray = enrollUser.slice(index, index+2)
        console.log(userArray)
}
    }
    // for (let index = 0; index < size*2; index=index+2) {
    //         userArray = enrollUser.slice(index, index+2)
    //         console.log(userArray)
    // }
    rows.push(<GroupBrackets isStarted={isStarted} userArray={displayName? userArray: []}></GroupBrackets>);
  }

  console.log(size, odd);
  return (
    <div class="round-1-of-6 tournament-details-tab-bracket-column">
      <h5>{change(round)}</h5>
  
      {rows}
      {
        isStarted?
        <div
        class="tournament-details-tab-bracket-row"
        style={odd ? { display: "flex" } : { display: "none" }}
      >
        <img src={bracketIcon} alt="brack" />
        <div class="bracket-user-main">
          <div class="tournament-details-tab-bracket-user">
            <div class="tournament-details-team">{displayName? enrollUser[enrollUser.length-1].username: null}</div>
          </div>
        </div>
      </div>
      :
      <div
        class="tournament-details-tab-bracket-row"
        style={odd ? { display: "flex" } : { display: "none" }}
      >
        <img src={bracketIcon} alt="brack" />
        <div class="bracket-user-main">
          <div class="tournament-details-tab-bracket-user">
            <div class="tournament-details-team"></div>
          </div>
        </div>
      </div>
      }

    </div>
  );
}

export default TournamentRound;

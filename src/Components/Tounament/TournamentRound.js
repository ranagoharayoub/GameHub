import React from "react";
import GroupBrackets from "./GroupBrackets";
import bracketIcon from "../../bg-icons/profile-tournament.webp";
function TournamentRound({ size, odd, round}) {


  function change(a) {
    return a.replace("_", " ")
  }

  console.log(change(round))

  var rows = [];
  for (let index = 0; index < size; index++) {
    rows.push(<GroupBrackets></GroupBrackets>);
  }

  console.log(size, odd);
  return (
    <div class="round-1-of-6 tournament-details-tab-bracket-column">
      <h5>{change(round)}</h5>
      {/* <h5>ROund</h5> */}
      {rows}
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
    </div>
  );
}

export default TournamentRound;

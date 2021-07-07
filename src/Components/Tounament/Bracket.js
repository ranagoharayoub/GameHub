import React, { useState } from "react";
// import bracketIcon from "../../bg-icons/profile-tournament.webp";
// import GroupBrackets from "./GroupBrackets";
import TournamentRound from "./TournamentRound";
/*eslint-disable*/
export default function Bracket({ team_size }) {
  const [odd, setodd] = useState(false);

  var brackets = [];

  var size = team_size;

  function qoutient(size) {
    let i = 1;
    brackets.push(size);
    while (size > 1) {
      if (size % 2 === 0) {
        size = size / 2;
        if (size % 2 !== 0 && size !== 1) {
          brackets.push(size);
          size = size + 1;
        } else {
          brackets.push(size);
        }
      } else {
        size = (size + 1) / 2;
        brackets.push(size);
      }

      //   size= size/2;
      // if (size%2 !==0 && size!==1) {
      //   brackets.push(size);
      //   size = size+1;
      // }
      //  else {
      //   brackets.push(size)
      // }
      // console.log(size)
      i++;
    }
    return i;
  }

  const totalTournaments = qoutient(size);
  // console.log(totalTournaments)

  var col = [];

  for (let index = 0; index < totalTournaments; index++) {
    // console.log(brackets[index],brackets[index]%2)

    col.push(
      <TournamentRound
        size={
          brackets[index] % 2 == 0
            ? brackets[index] / 2
            : (brackets[index] - 1) / 2
        }
        odd={brackets[index] % 2 == 0 ? false : true}
      ></TournamentRound>
    );
  }

  // for (let index = 0; index < totalTournaments; index++) {
  // setstore(brackets[index])
  // console.log(store)
  // if (brackets[index] !==0) {
  //   setpropsize(brackets[index]/2);
  //   setodd(true);
  //   console.log(propsize, odd)
  // } else {
  //   setpropsize(brackets[index]/2);
  //   console.log(propsize, odd)
  // }

  //     console.log(brackets[index],brackets[index]%2)

  //     if (brackets[index]%2 !== 0) {
  //       setodd(true)
  //       console.log(odd)
  //     }
  //   col.push(<TournamentRound size={brackets[index]} odd={false}></TournamentRound>)
  // }

  return (
    <div>
      <div class="bracket-pills">
        <ul class="nav nav-pills" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-expand"
              type="button"
              role="tab"
              aria-controls="pills-expand"
              aria-selected="true"
            >
              EXPAND
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-compact"
              type="button"
              role="tab"
              aria-controls="pills-compact"
              aria-selected="false"
            >
              COMPACT
            </button>
          </li>
        </ul>

        <div class="tab-content" id="pills-tabContent">
          {/* ====================== Expand Tab ================= */}
          <div
            class="tab-pane fade show active"
            id="pills-expand"
            role="tabpanel"
            aria-labelledby="pills-expand-tab"
          >
            <div
              data-tournament-id="148118"
              class="tournament-bracket-useless-bar"
            ></div>
            <div class="expand-tab">
              <div class="tournament-details-tab-bracket table-responsive">
                <div class="tournament-details-tab-bracket-container">
                  {/* ============== Round 1 ============== */}
                  {col}
                </div>
              </div>
            </div>
          </div>
          {/* ====================== Compact Tab ================= */}
          <div
            class="tab-pane fade"
            id="pills-compact"
            role="tabpanel"
            aria-labelledby="pills-compact-tab"
          >
            <div
              data-tournament-id="148118"
              class="tournament-bracket-useless-bar"
            ></div>
            <div class="compact-tab">
              <div class="tournament-details-tab-bracket table-responsive">
                <div class="tournament-details-tab-bracket-container">
                  {/* ============== Round 1 ============== */}
                  {col}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import TournamentRound from "./TournamentRound";
/*eslint-disable*/
export default function Bracket({ team_size, gameId, enrollUser, isStarted }) {
 
  const [roundName, setroundName] = useState(null)
  
  console.log('enrollUser',enrollUser)

    // for (let index = 0; index < enrollUser.length; index=index+2) {
    //   const element = enrollUser.slice(index, index+2);
    //   console.log("two user",element)
    // }
  
  useEffect(() => {
    const callAPI = async() =>{
      await axios.get("https://gamehubx.com/api/v1/tournament/"+gameId+"/bracket/")
      .then((res)=> {console.log(res.data.bracket); setroundName(res.data.bracket)})
      .catch((res)=> console.log(res))
    }

    callAPI()
  }, [])

  var name = []
  
  if (roundName) {
    Object.keys(roundName).map(data => name.push(data))
    console.log(name)
  }

 
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
        enrollUser= {enrollUser}
        isStarted ={isStarted}
          round = {name.length>0? name[index]: ""}
          displayName={index===0? true : false}
      ></TournamentRound>
    );
  }


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

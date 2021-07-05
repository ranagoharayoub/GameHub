import React, {useState } from "react";
import bracketIcon from "../../bg-icons/profile-tournament.webp";
// import GroupBrackets from "./GroupBrackets";
import TournamentRound from "./TournamentRound";
/*eslint-disable*/
export default function Bracket({max_team}) {

 const [odd, setodd] = useState(false)



  var brackets = [];
  
  var size = max_team;
  
function qoutient(size) {
  let i = 1
  brackets.push(size)
  while (size>1) {
    if (size%2 ===0) {
      size= size/2;
        if (size%2 !==0 && size!==1) {
          brackets.push(size);
          size = size+1;
        }
        else {
          brackets.push(size)  
        }
    } else {
      size= (size+1)/2;
      brackets.push(size)
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
  i++
};
return i;
};



const totalTournaments = qoutient(size)
// console.log(totalTournaments)


var col=[]


  for (let index = 0; index < totalTournaments; index++) {

    // console.log(brackets[index],brackets[index]%2)

  col.push(<TournamentRound size={brackets[index]%2 ==0 ? brackets[index]/2: (brackets[index]-1)/2} odd={brackets[index]%2 ==0? false : true}></TournamentRound>)
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
                  <div class="round-1-of-6 tournament-details-tab-bracket-column">
                    <h5>Round 1</h5>
                    {/* Tab-bracket-group Section 1 */}
                    {/* ============== Tournament-details Group 1 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============== Tournament-details Group 2 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Tab-bracket-group Section 2 */}
                    {/* ============== Tournament-details Group 1 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============== Tournament-details Group 2 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Tab-bracket-group Section 3 */}
                    {/* ============== Tournament-details Group 1 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============== Tournament-details Group 2 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Tab-bracket-group Section 4 */}
                    {/* ============== Tournament-details Group 1 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============== Tournament-details Group 2 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Tab-bracket-group Section 5 */}
                    {/* ============== Tournament-details Group 1 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============== Tournament-details Group 2 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Tab-bracket-group Section 6 */}
                    {/* ============== Tournament-details Group 1 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============== Tournament-details Group 2 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Tab-bracket-group Section 7 */}
                    {/* ============== Tournament-details Group 1 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============== Tournament-details Group 2 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Tab-bracket-group Section 8 */}
                    {/* ============== Tournament-details Group 1 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============== Tournament-details Group 2 ============== */}
                    <div class="tournament-details-tab-bracket-group last">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ============== Round 2 ============== */}
                  <div class="round-2-of-6 tournament-details-tab-bracket-column">
                    <h5>Round 2</h5>
                    {/* Tab-bracket-group Section 1 */}
                    {/* ============== Tournament-details Group 1 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============== Tournament-details Group 2 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Tab-bracket-group Section 2 */}
                    {/* ============== Tournament-details Group 3 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============== Tournament-details Group 4 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Tab-bracket-group Section 3 */}
                    {/* ============== Tournament-details Group 5 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============== Tournament-details Group 6 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Tab-bracket-group Section 4 */}
                    {/* ============== Tournament-details Group 7 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============== Tournament-details Group 8 ============== */}
                    <div class="tournament-details-tab-bracket-group last">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ============== Round 3 ============== */}
                  <div class="round-3-of-6 tournament-details-tab-bracket-column">
                    <h5>QUARTER-FINALS</h5>
                    {/* Tab-bracket-group Section 1 */}
                    {/* ============== Tournament-details Group 1 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============== Tournament-details Group 2 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Tab-bracket-group Section 2 */}
                    {/* ============== Tournament-details Group 1 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============== Tournament-details Group 2 ============== */}
                    <div class="tournament-details-tab-bracket-group last">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ============== Round 4 ============== */}
                  <div class="round-4-of-6 tournament-details-tab-bracket-column">
                    <h5>SEMI-FINALS</h5>
                    {/* Tab-bracket-group Section 1 */}
                    {/* ============== Tournament-details Group 1 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============== Tournament-details Group 2 ============== */}
                    <div class="tournament-details-tab-bracket-group last">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ============== Round 5 ============== */}
                  <div class="round-5-of-6 tournament-details-tab-bracket-column">
                    <h5>GRAND FINALS</h5>
                    {/* Tab-bracket-group Section 1 */}
                    {/* ============== Tournament-details Group 1 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                      {/* =============== Tournament-details Row Second =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ============== Round 6 ============== */}
                  <div class="round-6-of-6 tournament-details-tab-bracket-column">
                    <h5>CHAMPION</h5>
                    {/* Tab-bracket-group Section 1 */}
                    {/* ============== Tournament-details Group 1 ============== */}
                    <div class="tournament-details-tab-bracket-group">
                      {/* =============== Tournament-details Row First =================== */}
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                          <span class="tournament-match-holder"></span>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  {/* <div class="round-1-of-6 tournament-details-tab-bracket-column" >
                    <h5>Winner</h5>
                      <div class="tournament-details-tab-bracket-row">
                        <img src={bracketIcon} />
                        <div class="bracket-user-main">
                          <div class="tournament-details-tab-bracket-user">
                            <div class="tournament-details-team"></div>
                          </div>
                        </div>
                      </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

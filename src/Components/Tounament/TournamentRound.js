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
  var userArray = [];

  if (isStarted) {
    for (let i= 0; i < size*2; i=i+2) {
      userArray.push(enrollUser.slice(i, i+2))
      console.log(userArray)
}
  }

  for (let index = 0; index < size; index++) {

    rows.push(<GroupBrackets round={change(round)} lastCall={index===size-1? true: false} firstCall={index===0? true: false} isStarted={isStarted} userArray={displayName? userArray[index]: []}></GroupBrackets>);
  }

  console.log(size, odd);
  return (
    
    // <div style={{display:'block',margin:'-0px 0px'}}>
    //   <div style={{fontSize:'x-large', textTransform:'capitalize'}}>{change(round)}</div>
    <div class="round-1-of-6 tournament-details-tab-bracket-column">
      {/* <h5>{change(round)}</h5> */}
      {rows}
      {
        isStarted && size===0?
        <div
          class="tournament-details-tab-bracket-row compact-single-bracket"
          style={odd ? { display: "block" , borderRight:'none'} : { display: "none" }}
        >
          <div style={{height:'25px', fontWeight:'bold', textTransform:'capitalize'}}>Winner</div>
            <div style={{display:'flex'}}>
            <img src={bracketIcon} alt="brack" />
            <div class="bracket-user-main">
              <div class="tournament-details-tab-bracket-user">
                <div class="tournament-details-team"></div>
              </div>
            </div>
          </div>
          <div style={{height:'25px'}}></div>
        </div>
        :
        isStarted && size !== 0? 
        <div
        class="tournament-details-tab-bracket-row"
        style={odd ? { display: "flex", paddingTop:'0px', borderRight:'none' } : { display: "none" }}
      >
        <img src={bracketIcon} alt="brack" />
        <div class="bracket-user-main">
          
          <div class="tournament-details-tab-bracket-user">
            {
              displayName && enrollUser.length>0?
              <div class="tournament-details-team">{enrollUser[enrollUser.length-1].username}</div>
              :
              null
            }
          </div>
        </div>
      </div>
      :
        !isStarted & size === 0?
        <div
          class="tournament-details-tab-bracket-row compact-single-bracket"
          style={odd ? { display: "block" , borderRight:'none'} : { display: "none" }}
        >
          <div style={{height:'25px', fontWeight:'bold', textTransform:'capitalize'}}>Winner</div>
            <div style={{display:'flex'}}>
            <img src={bracketIcon} alt="brack" />
            <div class="bracket-user-main">
              <div class="tournament-details-tab-bracket-user">
                <div class="tournament-details-team"></div>
              </div>
            </div>
          </div>
          <div style={{height:'25px'}}></div>
        </div>
        :
        <div
        class="tournament-details-tab-bracket-row"
        style={odd ? { display: "flex", paddingTop:'0px', borderRight:'none' } : { display: "none" }}
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

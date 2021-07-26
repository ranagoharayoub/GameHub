import React, { useEffect, useState } from "react";
import "./Matches.css";
import axios from "axios";
import { Button, Modal} from "react-bootstrap";
import TournamentCard from "../Components/HomeComp/TournamentCard";


/*eslint-disable*/
export default function Matches({ width }) {
  const [upcoming, setupcoming] = useState(null);
  const [inProgress, setinProgress] = useState(null);
  const [userWon, setuserWon] = useState(null)
  const [show, setShow] = useState(false);
  const [modaltext, setmodaltext] = useState("");
  useEffect(() => {
    var userid = localStorage.getItem("userdata");
    const callAPI = async () => {
      await axios
        .get("https://gamehubx.com/api/v1/tournament/?user=" + userid+ "&status=upcoming")
        .then((res) => setupcoming(res.data))

        // .then((data)=>{setupcoming(res.data); console.log('upcoming',upcoming)})
        .catch((error) => console.log(error));
        componentHandler.upgradeDom();
    };
    callAPI();
    const callAPI2 = async () => {
      await axios
        .get(
          "https://gamehubx.com/api/v1/tournament/?user=" +
            userid +
            "&status=ongoing"
        )
        .then((res) => {
          console.log(res);
          setinProgress(res.data);
        })

        // .then((data)=>{setupcoming(res.data); console.log('upcoming',upcoming)})
        .catch((error) => console.log(error));
        componentHandler.upgradeDom();
    };
    callAPI2();
    // componentHandler.upgradeDom();
  }, []);

  const submitHandler = async(param) =>{

    var userid = parseInt(localStorage.getItem("userdata"));
    var is_won =  userWon==="Win"? true : false;
    console.log(userid, is_won)
    const data = JSON.stringify({
      "user": userid,
      "tournament": param,
      "round": "round_1",
      "is_won": is_won,
    })

    var token = localStorage.getItem('token')

    const headers = {
      "Authorization": "Token " + token,
     "Content-Type": "application/json"
    }

    var URL = `https://gamehubx.com/api/v1/tournament/${param}/upload-result/`
    console.log(URL, data, headers)

    axios.post(URL, data, {
      headers: headers
    }).then((res) => {console.log(res);
       setmodaltext(userWon?"Thank you for submitting your result, you will be advanced to the next round. Please note that if you and your opponent both hit WIN, you will be asked to submit photo evidence of your win."
       :
       "Thank you for joining the tournament. Great playing and don’t get discouraged - your next win is right around the corner."
       );
      setShow(true)})
      .catch((error) => {console.log(error.response.data.status); setmodaltext(error.response.data.status); setShow(true)})
  }

  return (
    <div>
      <Modal show={show} onHide={()=> setShow(false)}>
        <Modal.Header >
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>{modaltext}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div class="matches-main">
        <div class="matches-inner">
          <h1>MY MATCHES</h1>
          {/* Matches Tabs */}
          <div class="matches-tabs">
            <div class="mdl-grid">
              <div class="mdl-cell">{/* <h6>Choose your console</h6> */}</div>
            </div>
            <div class="mdl-grid">
              <div class="mdl-cell">
                <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                  <div class="mdl-tabs__tab-bar">
                    <a href="#mattab1" class="mdl-tabs__tab is-active">
                      UPCOMING TOURNAMENTS
                    </a>
                    <a href="#mattab2" class="mdl-tabs__tab">
                      in-progress TOURNAMENTS
                    </a>
                  </div>
                  {/* ================ UPCOMING TOURNAMENTS =============== */}
                  <div class="mdl-tabs__panel is-active" id="mattab1">
                    {/* Soon */}
                    <div class="soon">
                      <p>STARTING SOON</p>
                      <div class="drop-icons">
                        <i class="fas fa-caret-down up"></i>
                        <i class="fas fa-caret-down"></i>
                      </div>
                    </div>
                    {/* Matches Cards */}

                    <div style={{marginTop:'0px', marginRight:'0px', marginLeft:'0px'}} class="row">

                      <div class="col-lg-12">
                        {/* ----------------Give Styling to Feature Cards. Most possibly Grid---------- */}
                        <div class="feature-card">
                          {upcoming
                            ? upcoming.map((ent) => {
                                return (
                                  <TournamentCard
                                    width={width}
                                    data={ent}
                                  ></TournamentCard>
                                );
                              })
                            : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ================ in-progress TOURNAMENTS =============== */}
                  <div class="mdl-tabs__panel" id="mattab2">
                    <div style={{marginLeft:'20px', marginRight:'10px'}} class="progress-tab">
                      <div class="row-card">
                        {/* Card 1 */}
                        <div style={{marginTop:'50px'}} class="col-lg-7 col-md-12">
                          {inProgress
                            ? inProgress.map((data) => (
                              <div style={{display:'flex'}}>
                              <TournamentCard width={width} data={data}></TournamentCard>
                                   <div style={{backgroundColor:'#272727', marginBottom:'50px', paddingTop:'10px'}} class="round">
                                       <button class="round-btn desk">
                                         {data.current_round? data.current_round : "Updating"}
                                       </button>
                                       <button class="round-btn mob">
                                       Updating
                                       </button>
                                       <form >
                                         <div class="input-item">
                                           <input type="radio" name="radio" value="Win" onChange={(e)=>setuserWon(e.target.value)} />
                                           <label>Win</label>
                                         </div>
                                         <div class="input-item">
                                           <input type="radio" name="radio" value="Lose" onChange={(e)=>setuserWon(e.target.value)}/>
                                           <label>Lose</label>
                                         </div>
                                       </form>
                                       <button onClick={()=>submitHandler(data.id)} class="round-btn desk">
                                         Submit
                                       </button>
                                       <button onClick={()=>submitHandler(data.id)} class="round-btn mob">
                                       Submit
                                       </button>
                                    </div>
                              </div>
                              ))
                            : null}
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

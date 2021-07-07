import React, { useEffect, useState } from "react";
import "./Matches.css";
import { Link } from "react-router-dom";
import img from "../bg/feature.png";
import axios from "axios";

/*eslint-disable*/
export default function Matches({ width }) {
  const [upcoming, setupcoming] = useState(null);
  const [inProgress, setinProgress] = useState(null);
  useEffect(() => {
    var userid = localStorage.getItem("userdata");
    const callAPI = async () => {
      await axios
        .get("https://gamehubx.com/api/v1/tournament/?user=" + userid)
        .then((res) => {
          console.log(res);
          setupcoming(res.data);
        })

        // .then((data)=>{setupcoming(res.data); console.log('upcoming',upcoming)})
        .catch((error) => console.log(error));
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
    };
    callAPI2();
    componentHandler.upgradeDom();
  }, []);

  return (
    <div>
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

                    <div class="row">
                      {/* Card 1 */}
                      {upcoming
                        ? upcoming.map((data) => (
                            <div class="col-lg-6">
                              <div class="feature-card">
                                <div class="feature-card-inner">
                                  <div class="feature-img-side">
                                    <div class="feature-img-box">
                                      {/* <img src={img} alt="Feature" /> */}
                                      <img src={data.image} alt="Feature" />
                                    </div>
                                  </div>
                                  <div class="feature-text-side">
                                    <h3>{data.title}</h3>
                                    <p>
                                      {data.start_on}
                                      <span>Starts in 1H 35 M</span>
                                    </p>
                                    <div class="feature-middle-row">
                                      <div class="feature-item entery">
                                        <p>Entry</p>
                                        <p>
                                          <span>{data.entry_fee}</span> credits
                                        </p>
                                      </div>
                                      <div class="feature-item team-sale">
                                        <p>Team Size</p>
                                        <p>{data.team_size}</p>
                                        {/* <p><span>2</span>v<span>2</span></p> */}
                                      </div>
                                      <div class="feature-item max-teams">
                                        <p>Max Teams</p>
                                        <p>
                                          <span>{data.max_team}</span>
                                        </p>
                                      </div>
                                      <div class="feature-item entered">
                                        <p>Entered</p>
                                        <p>
                                          <span>{data.game}</span>
                                        </p>
                                      </div>
                                      <div class="feature-item platform">
                                        <p>Platform</p>
                                        <p>{data.platform_detail}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="feature-detail-btn">
                                  <Link to={"/indtour/:" + data.id}>
                                    View Details{" "}
                                    <i class="fas fa-arrow-right"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          ))
                        : null}
                      {/* Card 2 */}
                      {/* <div class="col-lg-6">
                    <div class="feature-card">
                        <div class="feature-card-inner">
                            <div class="feature-img-side">
                                <div class="feature-img-box">
                                    <img src={img} alt="Feature" />
                                </div>
                            </div>
                            <div class="feature-text-side">
                                <h3>5v5 FIFA CHIP</h3>
                                <p>Jun 10,2:30 PM ET <span>Starts in 1H 35 M</span></p>
                                <div class="feature-middle-row">
                                    <div class="feature-item entery">
                                        <p>Entry</p>
                                        <p><span>10</span> credits</p>
                                    </div>
                                    <div class="feature-item team-sale">
                                        <p>Team Sale</p>
                                        <p><span>2</span>v<span>2</span></p>
                                    </div>
                                    <div class="feature-item max-teams">
                                        <p>Max Teams</p>
                                        <p><span>5</span></p>
                                    </div>
                                    <div class="feature-item entered">
                                        <p>Entered</p>
                                        <p><span>5</span></p>
                                    </div>
                                    <div class="feature-item platform">
                                        <p>Platform</p>
                                        <p>XBOX,PSS, PC,MOBILE</p>
                                    </div>
                                </div>
                                </div>
                        </div>
                        <div class="feature-detail-btn">
                            <a href="#">View Details <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div> */}
                      {/* Card 3 */}
                      {/* <div class="col-lg-6">
                    <div class="feature-card">
                        <div class="feature-card-inner">
                            <div class="feature-img-side">
                                <div class="feature-img-box">
                                    <img src={img} alt="Feature" />
                                </div>
                            </div>
                            <div class="feature-text-side">
                                <h3>5v5 FIFA CHIP</h3>
                                <p>Jun 10,2:30 PM ET <span>Starts in 1H 35 M</span></p>
                                <div class="feature-middle-row">
                                    <div class="feature-item entery">
                                        <p>Entry</p>
                                        <p><span>10</span> credits</p>
                                    </div>
                                    <div class="feature-item team-sale">
                                        <p>Team Sale</p>
                                        <p><span>2</span>v<span>2</span></p>
                                    </div>
                                    <div class="feature-item max-teams">
                                        <p>Max Teams</p>
                                        <p><span>5</span></p>
                                    </div>
                                    <div class="feature-item entered">
                                        <p>Entered</p>
                                        <p><span>5</span></p>
                                    </div>
                                    <div class="feature-item platform">
                                        <p>Platform</p>
                                        <p>XBOX,PSS, PC,MOBILE</p>
                                    </div>
                                </div>
                                </div>
                        </div>
                        <div class="feature-detail-btn">
                            <a href="#">View Details <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div> */}
                      {/* Card 4 */}
                      {/* <div class="col-lg-6">
                    <div class="feature-card">
                        <div class="feature-card-inner">
                            <div class="feature-img-side">
                                <div class="feature-img-box">
                                    <img src={img} alt="Feature" />
                                </div>
                            </div>
                            <div class="feature-text-side">
                                <h3>5v5 FIFA CHIP</h3>
                                <p>Jun 10,2:30 PM ET <span>Starts in 1H 35 M</span></p>
                                <div class="feature-middle-row">
                                    <div class="feature-item entery">
                                        <p>Entry</p>
                                        <p><span>10</span> credits</p>
                                    </div>
                                    <div class="feature-item team-sale">
                                        <p>Team Sale</p>
                                        <p><span>2</span>v<span>2</span></p>
                                    </div>
                                    <div class="feature-item max-teams">
                                        <p>Max Teams</p>
                                        <p><span>5</span></p>
                                    </div>
                                    <div class="feature-item entered">
                                        <p>Entered</p>
                                        <p><span>5</span></p>
                                    </div>
                                    <div class="feature-item platform">
                                        <p>Platform</p>
                                        <p>XBOX,PSS, PC,MOBILE</p>
                                    </div>
                                </div>
                                </div>
                        </div>
                        <div class="feature-detail-btn">
                            <a href="#">View Details <i class="fas fa-arrow-right"></i></a>
                        </div> */}
                      {/* </div> */}
                    </div>
                  </div>
                </div>
                {/* ================ in-progress TOURNAMENTS =============== */}
                <div class="mdl-tabs__panel" id="mattab2">
                  <div class="progress-tab">
                    <div class="row">
                      {/* Card 1 */}
                      <div class="col-lg-7 col-md-12">
                        {inProgress
                          ? inProgress.map((data) => (
                              <div class="feature-card">
                                <div class="feature-card-inner">
                                  <div class="feature-img-side">
                                    <div class="feature-img-box">
                                      <img src={data.image} alt="Feature" />
                                    </div>
                                  </div>
                                  <div class="feature-text-side">
                                    <h3>{data.title}</h3>
                                    <p>
                                      {data.start_on}
                                      <span>Started</span>
                                    </p>
                                    <div class="feature-middle-row">
                                      <div class="feature-item entery">
                                        <p>Entry</p>
                                        <p>
                                          <span>{data.entry_fee}</span> credits
                                        </p>
                                      </div>
                                      <div class="feature-item team-sale">
                                        <p>Team Size</p>
                                        {/* <p><span>2</span>v<span>2</span></p> */}
                                        <p>{data.team_size}</p>
                                      </div>
                                      <div class="feature-item max-teams">
                                        <p>Max Teams</p>
                                        <p>
                                          <span>{data.max_team}</span>
                                        </p>
                                      </div>
                                      <div class="feature-item entered">
                                        <p>Entered</p>
                                        <p>
                                          <span>{data.game}</span>
                                        </p>
                                      </div>
                                      <div class="feature-item platform">
                                        <p>Platform</p>
                                        <p>{data.platform_detail}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="round">
                                    <button class="round-btn desk">
                                      round 2
                                    </button>
                                    <button class="round-btn mob">
                                      round 1
                                    </button>
                                    <form action="#">
                                      <div class="input-item">
                                        <input type="radio" value="Win" />
                                        <label>Win</label>
                                      </div>
                                      <div class="input-item">
                                        <input type="radio" value="Lose" />
                                        <label>Lose</label>
                                      </div>
                                    </form>
                                    <button class="round-btn desk">
                                      Upload result
                                    </button>
                                    <button class="round-btn mob">
                                      Round 2
                                    </button>
                                  </div>
                                </div>
                                <div class="feature-detail-btn">
                                  <Link to={"/indtour/:" + data.id}>
                                    View Details{" "}
                                    <i class="fas fa-arrow-right"></i>
                                  </Link>
                                </div>
                              </div>
                            ))
                          : null}
                      </div>
                      {/* Card 2 */}
                      {/* <div class="col-lg-7 col-md-12"> */}
                      {/* <div class="feature-card">
                                <div class="feature-card-inner">
                                    <div class="feature-img-side">
                                         <div class="feature-img-box">
                                            <img src={img} alt="Feature" />
                                        </div>
                                    </div>
                                    <div class="feature-text-side">
                                        <h3>5v5 FIFA CHIP</h3>
                                        <p>Jun 10,2:30 PM ET <span>Started</span></p>
                                        <div class="feature-middle-row">
                                            <div class="feature-item entery">
                                                <p>Entry</p>
                                                <p><span>10</span> credits</p>
                                            </div>
                                            <div class="feature-item team-sale">
                                                <p>Team Sale</p>
                                                <p><span>2</span>v<span>2</span></p>
                                            </div>
                                            <div class="feature-item max-teams">
                                                <p>Max Teams</p>
                                                <p><span>5</span></p>
                                            </div>
                                            <div class="feature-item entered">
                                                <p>Entered</p>
                                                <p><span>5</span></p>
                                            </div>
                                            <div class="feature-item platform">
                                                <p>Platform</p>
                                                <p>XBOX,PSS, PC,MOBILE</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="round">
                                           <button class="round-btn desk">
                                            round 2
                                           </button>
                                           <button class="round-btn mob">
                                            round 1
                                           </button>
                                           <form action="#">
                                               <div class="input-item">
                                                    <input type="radio" value="Win" />
                                                    <label>Win</label>
                                               </div>
                                               <div class="input-item">
                                                    <input type="radio" value="Lose" />
                                                    <label>Lose</label>
                                               </div>
                                           </form>
                                           <button class="round-btn desk">
                                            Upload result
                                           </button>
                                           <button class="round-btn mob">
                                            round 2
                                           </button>
                                        </div>
                                </div>
                                <div class="feature-detail-btn">
                                    <a href="#">View Details <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div> */}
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

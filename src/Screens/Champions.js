import React, { useEffect, useState } from "react";
import "./Champions.css";
import img from "../bg/cham.png";
import axios from "axios";

export default function Champions() {
  const [dataFetched, setdataFetched] = useState([])
  useEffect(() => {
    window.scrollTo(0,0)
 const callAPI =  async() =>{
     try {
       const {data} = await axios.get('https://gamehubx.com/api/v1/champion-page/')
       //console.log(data)
       setdataFetched(data)
     } catch (error) {
       //console.log(error)
     }
   }
   callAPI()
  }, [])
  //console.log(dataFetched)
  return (
    <div>
      {/* ================= Champion ================= */}
      <div class="champion-main">
        <div class="champion-inner">
          {/* ================= Champion Label ================= */}
          <div class="champion-label">
            <div class="champion-cell">User Name</div>
            <div class="champion-cell">Tournament Won</div>
            <div class="champion-cell">Date</div>
            <div class="champion-cell">Winnings</div>
          </div>
          {/* ======================== Champion List ======================== */}
          {
            dataFetched.map((data) => 
            <div class="champion-list">
            <div class="champion-cell">
              <div class="champion-logo">
                <img src={data.user_image? data.user_image: img} alt='avatar'/>
              </div>
              <div class="champ-text">
                <h4>{data.username}</h4>
                <p>The Darkin Blade</p>
              </div>
            </div>
            <div class="champion-cell">{data.tournament_won}</div>
            <div class="champion-cell">{data.date}</div>
            <div class="champion-cell">{data.wining}</div>
          </div>
            )
          }
          {/* <div class="champion-list">
            <div class="champion-cell">
              <div class="champion-logo">
                <img src={img} />
              </div>
              <div class="champ-text">
                <h4>Atrox</h4>
                <p>The Darkin Blade</p>
              </div>
            </div>
            <div class="champion-cell">2 won</div>
            <div class="champion-cell">2021-05-22</div>
            <div class="champion-cell">2</div>
          </div> */}
          {/* ======================== Champion List ======================== */}
          {/* <div class="champion-list">
            <div class="champion-cell">
              <div class="champion-logo">
                <img src={img} />
              </div>
              <div class="champ-text">
                <h4>Atrox</h4>
                <p>The Darkin Blade</p>
              </div>
            </div>
            <div class="champion-cell">2 won</div>
            <div class="champion-cell">2021-05-22</div>
            <div class="champion-cell">2</div>
          </div> */}
          {/* ======================== Champion List ======================== */}
          {/* <div class="champion-list">
            <div class="champion-cell">
              <div class="champion-logo">
                <img src={img} />
              </div>
              <div class="champ-text">
                <h4>Atrox</h4>
                <p>The Darkin Blade</p>
              </div>
            </div>
            <div class="champion-cell">2 won</div>
            <div class="champion-cell">2021-05-22</div>
            <div class="champion-cell">2</div>
          </div> */}
          {/* Bottom Row */}
          <div class="team-row team-row-bottom">
            <div class="team-row-text">
              <p>1 - 6 of 6</p>
              <div class="small-arrow">
                <i class="fas fa-angle-left"></i>
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

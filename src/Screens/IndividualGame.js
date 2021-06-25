import React, { useEffect, useState } from 'react'
import './IndividualGame.css'
import TournamentCard from "../Components/HomeComp/TournamentCard";
import axios from "axios";

function IndividualGame({width}) {
    const [tourdata, settourdata] = useState([]);

    useEffect(() => {
        const callAPI = async () => {
          await axios.get("https://gamehubx.com/api/v1/tournament/").then((res) => {
            settourdata(res.data);
            //console.log("data coming", tourdata);
          });
        }
        callAPI()
      }, [])
    return (
        <div className='indi-game'>
            <div className='bg-image'>
                <div className='title'>warzone tournaments</div>
            </div>
            <div className='bottom-sec'>
                <div className='subtitle'>upcoming TOURNAMENTS</div>
                       {tourdata.map((ent) => {
          return <TournamentCard width={width} data={ent}></TournamentCard>;
        })}
            </div>
        </div>
    )
}

export default IndividualGame
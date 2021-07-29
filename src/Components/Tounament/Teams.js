import React, {useState } from "react";
import { Card, Accordion } from "react-bootstrap";
// import teamImg from "../../bg/team-1.png";
// import teamImg1 from "../../bg/profile.webp";
import {Avatar} from "@material-ui/core"
// import teamImg2 from "../../bg/download.png";
/*eslint-disable*/
export default function Teams({data}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* =================== Teams =================== */}
      <div class="teams-main">
        <div class="team-row team-row-top">
          <div class="team-row-text">
            <p>Rows per page: 10</p>
            <p>1 - 6 of 6</p>
            <div class="small-arrow">
              <i class="fas fa-angle-left"></i>
              <i class="fas fa-angle-right"></i>
            </div>
          </div>
          <div class="team-label">Team</div>
        </div>
        <Accordion> 
          {
            data.map((data)=>
            <Card>
            {/* <Card.Header> */}
              {/* <Accordion.Toggle as={Button} variant="link" eventKey="0"> */}
              <div className='single-member'>
                <div class="team-person-image-box">
                  {/* <img src={teamImg} /> */}
                  <Avatar className='avatar' alt={data.username} src={data.image}></Avatar>
                </div>
                <div className='team-ind-name' >{data.username}</div>
                </div>  
                {/* <p>Show roster</p> */}
              {/* </Accordion.Toggle> */}
            {/* </Card.Header> */}
            {/* <Accordion.Collapse eventKey="0">
              <Card.Body>
                 {
                data.map((data)=>

                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">

                      <Avatar alt={data.username} src={data.image}></Avatar>
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        
                        {data.username}
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          {data.username}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                )
                
              }
              </Card.Body>
            </Accordion.Collapse> */}
          </Card>
            )
          }
          
        </Accordion>
        {/* <div class="team-row team-row-bottom">
          <div class="team-row-text">
            <p>Rows per page: 10</p>
            <p>1 - 6 of 6</p>
            <div class="small-arrow">
              <i class="fas fa-angle-left"></i>
              <i class="fas fa-angle-right"></i>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

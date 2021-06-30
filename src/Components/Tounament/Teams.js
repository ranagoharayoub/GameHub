import React, {useState } from "react";
import { Button, Card, Accordion } from "react-bootstrap";
import teamImg from "../../bg/team-1.png";
import teamImg1 from "../../bg/profile.webp";
import teamImg2 from "../../bg/download.png";
/*eslint-disable*/
export default function Teams() {
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
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <div class="team-person-image-box">
                  <img src={teamImg} />
                </div>
                TeamShmackeddd
                <p>Show roster</p>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {/* Expand row 1 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Expand row 2 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Expand row 3 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <div class="team-person-image-box">
                  <img src={teamImg} />
                </div>
                TeamShmackeddd
                <p>Show roster</p>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                {" "}
                {/* Expand row 1 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Expand row 2 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Expand row 3 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                <div class="team-person-image-box">
                  <img src={teamImg} />
                </div>
                TeamShmackeddd
                <p>Show roster</p>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                {" "}
                {/* Expand row 1 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Expand row 2 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Expand row 3 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                <div class="team-person-image-box">
                  <img src={teamImg} />
                </div>
                TeamShmackeddd
                <p>Show roster</p>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                {" "}
                {/* Expand row 1 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Expand row 2 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Expand row 3 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="5">
                <div class="team-person-image-box">
                  <img src={teamImg} />
                </div>
                TeamShmackeddd
                <p>Show roster</p>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                {/* Expand row 1 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Expand row 2 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Expand row 3 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="6">
                <div class="team-person-image-box">
                  <img src={teamImg} />
                </div>
                TeamShmackeddd
                <p>Show roster</p>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                {" "}
                {/* Expand row 1 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Expand row 2 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Expand row 3 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="7">
                <div class="team-person-image-box">
                  <img src={teamImg} />
                </div>
                TeamShmackeddd
                <p>Show roster</p>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="7">
              <Card.Body>
                {" "}
                {/* Expand row 1 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Expand row 2 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Expand row 3 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="8">
                <div class="team-person-image-box">
                  <img src={teamImg} />
                </div>
                TeamShmackeddd
                <p>Show roster</p>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="8">
              <Card.Body>
                {" "}
                {/* Expand row 1 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Expand row 2 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Expand row 3 */}
                <div class="expanded-row">
                  <div class="expanded-row-inner">
                    <div class="roster-user">
                      <img src={teamImg1} />
                    </div>
                    <div class="member-name-gamertag">
                      <div class="member-name">
                        <a href="#">Tommygunz24</a>
                      </div>
                      <div class="member-gamertag">
                        <img src={teamImg2} />
                        <div class="member-gamertag-value">
                          Tommygunz247739#1825358
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <div class="team-row team-row-bottom">
          <div class="team-row-text">
            <p>Rows per page: 10</p>
            <p>1 - 6 of 6</p>
            <div class="small-arrow">
              <i class="fas fa-angle-left"></i>
              <i class="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

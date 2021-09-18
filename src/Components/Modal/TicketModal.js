import axios from "axios";
import React, { useState } from "react";
import ReactFileReader from 'react-file-reader';
import {
  NavDropdown,
  Modal,
  Button,
} from "react-bootstrap";
import { DropdownSubmenu } from "react-bootstrap-submenu";

function TicketModal(props) {

  const [show, setShow] = useState(false);
  const [modaltext, setmodaltext] = useState("");
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [ticketProof, setticketProof] = useState('')
  const [ticketProof1, setticketProof1] = useState("")
  const [ticketProof2, setticketProof2] = useState("")
  const [message, setmessage] = useState('')
  const [screenshot, setscreenshot] = useState(null)



const ticketHandler = async(param)=>{
  //console.log(ticketProof, message)

  const emptyURL = "http://127.0.0.1:8011/api/v1/ticket/"

  var optionalProof1 = ticketProof1? ticketProof1 : emptyURL
  var optionalProof2 = ticketProof2? ticketProof2 : emptyURL
  

  //console.log('screenshot', screenshot)

  var token = localStorage.getItem('token')
  var userid = parseInt(localStorage.getItem('userdata'))
  const headers = ({
    "Authorization": "Token " + token,
    "Content-Type": "application/json"
  })
  
  const data = JSON.stringify({
    "tickets_proof_links": [
      {"link": ticketProof},
      {"link": optionalProof1},
      {"link": optionalProof2},
],
    "image": screenshot,
    "message": message,
    "user": userid,
    "category": param,
  })
//console.log(data)

  await axios
        .post("https://gamehubx.com/api/v1/ticket/", data, {
          headers: headers
        })
        .then((res) => {
          //console.log(res); 
          setmodaltext('ticket submitted'); setShow(true)})
        .then(()=>{setmessage(""); setticketProof("") ;setticketProof1(""); setticketProof2(""); setscreenshot("")})
        .catch(error => {
          //console.log(error.response); 
          setmodaltext('ticket could not submitted'); setShow(true)})
}

const handleFiles = (files) => {
  //console.log(typeof(files.base64));
  setscreenshot(files.base64)
}

return (
        <div>
        <Modal show={show} onHide={handleClose} >
                <Modal.Header >
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>{modaltext}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
                    </Modal>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div class="create-box-line"></div>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              CREATE TICKET
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <h4>Centered Modal</h4> */}
            <p>
              General tickets are not to be created for match disputes, in the
              event a general ticket is created for a match dispute it will be
              disregarded.
            </p>
            <div class="ticket-cat-main">
              <DropdownSubmenu href="#action/3.7" title="Ticket Category">
                <div class="catgory-menu">
                  <DropdownSubmenu href="#action/3.7" title="General">
                    <div class="general-submenu">
                      <Modal.Dialog>
                        <Modal.Body>
                          <div class="create-box-line"></div>
                          <div class="general-sub-cat-inner">
                            <h2>CREATE TICKET</h2>
                            <p>
                              General tickets are not to be created for match
                              disputes, in the event a general ticket is created
                              for a match dispute it will be disregarded.
                            </p>
                            <div class="general-subb-cat">
                              <DropdownSubmenu href="#action/3.7" title="General">
                                <NavDropdown.Item href="#action/9.1">
                                  General
                                </NavDropdown.Item>
                              </DropdownSubmenu>
                            </div>
                            <div class="general-subb-cat last">
                              <input name="tickets_proof_links" value={ticketProof} onChange={e=>setticketProof(e.target.value)} style={{width:'100%', height:'50px', backgroundColor:'#4a4747', padding:'0px 20px'}} type='text' placeholder='Proof Link 1'></input>
                            </div>
                        
                            <div class="general-add">
                              <ReactFileReader fileTypes={[".jpg",".jpeg, .png"]} base64={true} multipleFiles={false} handleFiles={handleFiles}>
                                <i style={{cursor:'pointer'}}  class="fas fa-plus-circle"></i>
                                </ReactFileReader>
                                <p>
                                Add Game Results
                                Screenshot Proof
                                </p>

                            </div>
                            <div class="general-forms">
                              <form action="#">
                                <textarea
                                  placeholder="Enter message"
                                  rows="4"
                                  name='message'
                                  value={message}
                                  onChange={e=>setmessage(e.target.value)}
                                ></textarea>
                              </form>
                            </div>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button onClick={props.onHide}>Cancel</Button>
                          
                          <Button onClick={()=>ticketHandler("general")}>Create</Button>
                        </Modal.Footer>
                      </Modal.Dialog>
                    </div>
                  </DropdownSubmenu>
                  <DropdownSubmenu href="#action/3.7" title="Tournaments">
                    <div class="general-submenu tournaments-submenu">
                      <Modal.Dialog>
                        <Modal.Body>
                          <div class="create-box-line"></div>
                          <div class="general-sub-cat-inner">
                            <h2>CREATE TICKET</h2>
                            <p>
                              General tickets are not to be created for match
                              disputes, in the event a general ticket is created
                              for a match dispute it will be disregarded.
                            </p>
                            <div class="general-subb-cat">
                              <DropdownSubmenu href="#action/3.7" title="Tournaments">
                                <NavDropdown.Item href="#action/9.1">
                                  Tournaments
                                </NavDropdown.Item>
                              </DropdownSubmenu>
                            </div>
                            <div class="general-subb-cat last">
                            <input  value={ticketProof} onChange={e=>setticketProof(e.target.value)} style={{width:'100%', height:'50px', backgroundColor:'#4a4747', padding:'0px 20px'}} type='text' placeholder='Proof Link 1'></input>
                              {/* <DropdownSubmenu
                                href="#action/3.7"
                                title="Proof Link 1"
                              ></DropdownSubmenu> */}
                            </div>
                            <div class="general-subb-cat last">
                            <input  value={ticketProof1} onChange={e=>setticketProof1(e.target.value)} style={{width:'100%', height:'50px', backgroundColor:'#4a4747', padding:'0px 20px'}} type='text' placeholder='Proof Link 2'></input>
                              {/* <DropdownSubmenu
                                href="#action/3.7"
                                title="Proof Link 2"
                              ></DropdownSubmenu> */}
                            </div>
                            <div class="general-subb-cat last">
                            <input  value={ticketProof2} onChange={e=>setticketProof2(e.target.value)} style={{width:'100%', height:'50px', backgroundColor:'#4a4747', padding:'0px 20px'}} type='text' placeholder='Proof Link 3'></input>
                              {/* <DropdownSubmenu
                                href="#action/3.7"
                                title="Proof Link 3"
                              ></DropdownSubmenu> */}
                            </div>
                            <div class="general-add">
                              <p>
                                <i class="fas fa-plus-circle"></i>Add Game Results
                                Screenshot Proof
                              </p>
                            </div>
                            <div class="general-forms">
                              <form action="#">
                                <textarea
                                  value={message}
                                  onChange={(e)=>setmessage(e.target.value)}
                                  placeholder="Enter message"
                                  rows="4"
                                ></textarea>
                              </form>
                            </div>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button onClick={props.onHide}>Cancel</Button>
                          <Button onClick={()=>ticketHandler("tournament")}>Create</Button>
                        </Modal.Footer>
                      </Modal.Dialog>
                    </div>
                  </DropdownSubmenu>

                  <DropdownSubmenu href="#action/3.7" title="Prize Claim">
                    <div class="general-submenu prize-claim">
                      <Modal.Dialog>
                        <Modal.Body>
                          <div class="create-box-line"></div>
                          <div class="general-sub-cat-inner">
                            <h2>CREATE TICKET</h2>
                            <p>
                            Let us know the method of payout you would like: Bank Account, Venmo or CashApp. Please type in your username, the tournament you won, the correct name of your Venmo or CashApp account (if you choose either of these methods) and the amount you would like withdrawn.
                            </p>
                            <div class="general-subb-cat">
                              <DropdownSubmenu href="#action/3.7" title="Prize Claim">
                                <NavDropdown.Item href="#action/9.1">
                                  Prize Claim
                                </NavDropdown.Item>
                              </DropdownSubmenu>
                            </div>

                            <div class="general-forms">
                              <form action="#">
                                <textarea
                                  value={message}
                                  onChange={(e)=>setmessage(e.target.value)}
                                  placeholder="Enter message"
                                  rows="4"
                                ></textarea>
                              </form>
                            </div>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button onClick={props.onHide}>Cancel</Button>
                          <Button onClick={()=>ticketHandler("tournament")}>Create</Button>
                        </Modal.Footer>
                      </Modal.Dialog>
                    </div>
                  </DropdownSubmenu>
                </div>
              </DropdownSubmenu>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Cancel</Button>
            {/* <Button>Create</Button> */}
          </Modal.Footer>
        </Modal>
        </div>
);
}

export default TicketModal;

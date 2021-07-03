import React from "react";
import {
  NavDropdown,
  Modal,
  Button,
} from "react-bootstrap";
import { DropdownSubmenu } from "react-bootstrap-submenu";
function TicketModal(props) {
  return (
    <div>
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
                                Tournaments
                              </NavDropdown.Item>
                            </DropdownSubmenu>
                          </div>
                          <div class="general-subb-cat last">
                            <DropdownSubmenu
                              href="#action/3.7"
                              title="Proof Link 1"
                            ></DropdownSubmenu>
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
                                placeholder="Enter message"
                                rows="4"
                              ></textarea>
                            </form>
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={props.onHide}>Cancel</Button>
                        <Button>Create</Button>
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
                            <DropdownSubmenu href="#action/3.7" title="General">
                              <NavDropdown.Item href="#action/9.1">
                                Tournaments
                              </NavDropdown.Item>
                            </DropdownSubmenu>
                          </div>
                          <div class="general-subb-cat last">
                            <DropdownSubmenu
                              href="#action/3.7"
                              title="Proof Link 1"
                            ></DropdownSubmenu>
                          </div>
                          <div class="general-subb-cat last">
                            <DropdownSubmenu
                              href="#action/3.7"
                              title="Proof Link 2"
                            ></DropdownSubmenu>
                          </div>
                          <div class="general-subb-cat last">
                            <DropdownSubmenu
                              href="#action/3.7"
                              title="Proof Link 3"
                            ></DropdownSubmenu>
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
                                placeholder="Enter message"
                                rows="4"
                              ></textarea>
                            </form>
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={props.onHide}>Cancel</Button>
                        <Button>Create</Button>
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
          <Button>Create</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TicketModal;

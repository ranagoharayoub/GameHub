import React, { useState } from "react";
import "./Tickets.css";
import {
  Button,
} from "react-bootstrap";
import TicketModal from "../Components/Modal/TicketModal";

export default function Tickets() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div class="tickets-main">
      <div class="tickets-inner">
        <div class="tickets-container">
          <h1>My Tickets</h1>
          <div class="create-new-box">
            <Button onClick={handleShow}>Create New Ticket</Button>
            <TicketModal show={show} onHide={handleClose}></TicketModal>
          </div>
        </div>
      </div>
    </div>
  );
}

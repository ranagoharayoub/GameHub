import React, { useEffect } from "react";
import "./Faq.css";
import { Accordion, Button, Card } from "react-bootstrap";

export default function Faq() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div>
      {/* =========================== Faq Main ============================== */}
      <div class="faq-main">
        <div class="faq-inner">
          <h1>Frequently Asked Questions</h1>
          {/* =========================== Accordion Tabs ============================== */}
          <div class="accordion-tabs-faq">
            <Accordion>
              {/* =========================== Card 1 ============================== */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <div class="icons plus-icon">
                      <i class="fas fa-plus"></i>
                    </div>
                    GameHub General
                  </Accordion.Toggle>
                </Card.Header>
                {/* =========================== Accordion Inner Tabs ============================== */}
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div class="faq-tab-inside">
                      <Accordion>
                        {/* =========================== Card inner 1 ============================== */}
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="0"
                            >
                              <div class="icons plus-icon">
                                <i class="fas fa-plus"></i>
                              </div>
                              What is GameHub?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularised in the 1960s
                                  with the release of Letraset sheets containing
                                  Lorem Ipsum passages, and more recently with
                                  desktop publishing software like Aldus
                                  PageMaker including versions of Lorem Ipsum.
                                </p>
                              </div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        {/* =========================== Card inner 2 ============================== */}
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="1"
                            >
                              <div class="icons plus-icon">
                                <i class="fas fa-plus"></i>
                              </div>
                              How do I enter a tournament?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularised in the 1960s
                                  with the release of Letraset sheets containing
                                  Lorem Ipsum passages, and more recently with
                                  desktop publishing software like Aldus
                                  PageMaker including versions of Lorem Ipsum.
                                </p>
                              </div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        {/* =========================== Card inner 3 ============================== */}
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="2"
                            >
                              <div class="icons plus-icon">
                                <i class="fas fa-plus"></i>
                              </div>
                              I am legally allowed to join?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="2">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularised in the 1960s
                                  with the release of Letraset sheets containing
                                  Lorem Ipsum passages, and more recently with
                                  desktop publishing software like Aldus
                                  PageMaker including versions of Lorem Ipsum.
                                </p>
                              </div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* =========================== Card 2 ============================== */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    <div class="icons plus-icon">
                      <i class="fas fa-plus"></i>
                    </div>
                    Tournament Details
                  </Accordion.Toggle>
                </Card.Header>
                {/* =========================== Accordion Inner Tabs ============================== */}
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <div class="faq-tab-inside">
                      <Accordion>
                        {/* =========================== Card inner 1 ============================== */}
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="0"
                            >
                              <div class="icons plus-icon">
                                <i class="fas fa-plus"></i>
                              </div>
                              How are the tournaments ran?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularised in the 1960s
                                  with the release of Letraset sheets containing
                                  Lorem Ipsum passages, and more recently with
                                  desktop publishing software like Aldus
                                  PageMaker including versions of Lorem Ipsum.
                                </p>
                              </div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        {/* =========================== Card inner 2 ============================== */}
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="1"
                            >
                              <div class="icons plus-icon">
                                <i class="fas fa-plus"></i>
                              </div>
                              How long are the tournaments?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularised in the 1960s
                                  with the release of Letraset sheets containing
                                  Lorem Ipsum passages, and more recently with
                                  desktop publishing software like Aldus
                                  PageMaker including versions of Lorem Ipsum.
                                </p>
                              </div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        {/* =========================== Card inner 3 ============================== */}
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="2"
                            >
                              <div class="icons plus-icon">
                                <i class="fas fa-plus"></i>
                              </div>
                              Are there live admins available during the
                              tournament?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="2">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularised in the 1960s
                                  with the release of Letraset sheets containing
                                  Lorem Ipsum passages, and more recently with
                                  desktop publishing software like Aldus
                                  PageMaker including versions of Lorem Ipsum.
                                </p>
                              </div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        {/* =========================== Card inner 4 ============================== */}
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="3"
                            >
                              <div class="icons plus-icon">
                                <i class="fas fa-plus"></i>
                              </div>
                              How do I advance in the tournament?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="3">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularised in the 1960s
                                  with the release of Letraset sheets containing
                                  Lorem Ipsum passages, and more recently with
                                  desktop publishing software like Aldus
                                  PageMaker including versions of Lorem Ipsum.
                                </p>
                              </div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        {/* =========================== Card inner 5 ============================== */}
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="4"
                            >
                              <div class="icons plus-icon">
                                <i class="fas fa-plus"></i>
                              </div>
                              How does GameHub deal with delays in the
                              tournament?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="4">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularised in the 1960s
                                  with the release of Letraset sheets containing
                                  Lorem Ipsum passages, and more recently with
                                  desktop publishing software like Aldus
                                  PageMaker including versions of Lorem Ipsum.
                                </p>
                              </div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        {/* =========================== Card inner 6 ============================== */}
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="5"
                            >
                              <div class="icons plus-icon">
                                <i class="fas fa-plus"></i>
                              </div>
                              How will I remember when the tournament starts?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="5">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularised in the 1960s
                                  with the release of Letraset sheets containing
                                  Lorem Ipsum passages, and more recently with
                                  desktop publishing software like Aldus
                                  PageMaker including versions of Lorem Ipsum.
                                </p>
                              </div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* =========================== Card 3 ============================== */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    <div class="icons plus-icon">
                      <i class="fas fa-plus"></i>
                    </div>
                    Entry Fees & Payouts
                  </Accordion.Toggle>
                </Card.Header>
                {/* =========================== Accordion Inner Tabs ============================== */}
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <div class="faq-tab-inside">
                      <Accordion>
                        {/* =========================== Card inner 1 ============================== */}
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="0"
                            >
                              <div class="icons plus-icon">
                                <i class="fas fa-plus"></i>
                              </div>
                              How do I pay to enter a tournament?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularised in the 1960s
                                  with the release of Letraset sheets containing
                                  Lorem Ipsum passages, and more recently with
                                  desktop publishing software like Aldus
                                  PageMaker including versions of Lorem Ipsum.
                                </p>
                              </div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        {/* =========================== Card inner 2 ============================== */}
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="1"
                            >
                              <div class="icons plus-icon">
                                <i class="fas fa-plus"></i>
                              </div>
                              How much do tournaments cost?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularised in the 1960s
                                  with the release of Letraset sheets containing
                                  Lorem Ipsum passages, and more recently with
                                  desktop publishing software like Aldus
                                  PageMaker including versions of Lorem Ipsum.
                                </p>
                              </div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        {/* =========================== Card inner 3 ============================== */}
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="2"
                            >
                              <div class="icons plus-icon">
                                <i class="fas fa-plus"></i>
                              </div>
                              Are my payment details secure?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="2">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularised in the 1960s
                                  with the release of Letraset sheets containing
                                  Lorem Ipsum passages, and more recently with
                                  desktop publishing software like Aldus
                                  PageMaker including versions of Lorem Ipsum.
                                </p>
                              </div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        {/* =========================== Card inner 4 ============================== */}
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="3"
                            >
                              <div class="icons plus-icon">
                                <i class="fas fa-plus"></i>
                              </div>
                              I won. How do I get my winnings?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="3">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularised in the 1960s
                                  with the release of Letraset sheets containing
                                  Lorem Ipsum passages, and more recently with
                                  desktop publishing software like Aldus
                                  PageMaker including versions of Lorem Ipsum.
                                </p>
                              </div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        {/* =========================== Card inner 5 ============================== */}
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="4"
                            >
                              <div class="icons plus-icon">
                                <i class="fas fa-plus"></i>
                              </div>
                              How much does GameHub rake from the pot?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="4">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularised in the 1960s
                                  with the release of Letraset sheets containing
                                  Lorem Ipsum passages, and more recently with
                                  desktop publishing software like Aldus
                                  PageMaker including versions of Lorem Ipsum.
                                </p>
                              </div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* =========================== Card 4 ============================== */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    <div class="icons plus-icon">
                      <i class="fas fa-plus"></i>
                    </div>
                    GameHub Community
                  </Accordion.Toggle>
                </Card.Header>
                {/* =========================== Accordion Inner Tabs ============================== */}
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <div class="faq-tab-inside">
                      <Accordion>
                        {/* =========================== Card inner 1 ============================== */}
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="0"
                            >
                              <div class="icons plus-icon">
                                <i class="fas fa-plus"></i>
                              </div>
                              How do I become Champion of the Week?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularised in the 1960s
                                  with the release of Letraset sheets containing
                                  Lorem Ipsum passages, and more recently with
                                  desktop publishing software like Aldus
                                  PageMaker including versions of Lorem Ipsum.
                                </p>
                              </div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        {/* =========================== Card inner 2 ============================== */}
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="1"
                            >
                              <div class="icons plus-icon">
                                <i class="fas fa-plus"></i>
                              </div>
                              How can I get featured on GameHubs social media
                              accounts?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularised in the 1960s
                                  with the release of Letraset sheets containing
                                  Lorem Ipsum passages, and more recently with
                                  desktop publishing software like Aldus
                                  PageMaker including versions of Lorem Ipsum.
                                </p>
                              </div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        {/* =========================== Card inner 3 ============================== */}
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="2"
                            >
                              <div class="icons plus-icon">
                                <i class="fas fa-plus"></i>
                              </div>
                              How do I find other players to play with?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="2">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularised in the 1960s
                                  with the release of Letraset sheets containing
                                  Lorem Ipsum passages, and more recently with
                                  desktop publishing software like Aldus
                                  PageMaker including versions of Lorem Ipsum.
                                </p>
                              </div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

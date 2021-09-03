import React, { useEffect } from "react";
import "./Faq.css";
import { Accordion, Button, Card } from "react-bootstrap";
import { ExpandMore } from "@material-ui/icons";

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
                      <ExpandMore></ExpandMore>
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
                                <ExpandMore></ExpandMore>
                              </div>
                              What is GameHub?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                GameHub is a eSports gaming tournament platform, hosting all kinds of tournaments across every single available gaming platform, including mobile! We aim to deliver outstanding player service and offer as many tournaments across as many games as possible.
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
                                <ExpandMore></ExpandMore>
                              </div>
                              How do I enter a tournament?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                Click on Games or Tournaments above to find the tournament that is right for you, then hit the ENTER NOW button on the individual tournament page.
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
                                <ExpandMore></ExpandMore>
                              </div>
                              I am legally allowed to join?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="2">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                Yes you are. We do restrict paid tournaments in certain state or territories where it is not permitted, but we also have many free tournaments where anyone can join.
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
                      <ExpandMore></ExpandMore>
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
                                <ExpandMore></ExpandMore>
                              </div>
                              How are the tournaments ran?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                Tournaments start at the starting time posted and are usually single elimination. There is admin assigned to each tournament that facilitates on time starts, advancing teams into the next round and handling any disputes.
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
                                <ExpandMore></ExpandMore>
                              </div>
                              How long are the tournaments?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                This depends on the game and how many teams have joined, but anywhere from 1 to 4-5 hours. All tournaments are started and completed in one continuous session and the same day or night, so you don't have to worry about having days in between games or matches.
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
                                <ExpandMore></ExpandMore>
                              </div>
                              Are there live admins available during the
                              tournament?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="2">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                Yes there are. You can communicate with them through text or email.
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
                                <ExpandMore></ExpandMore>
                              </div>
                              How do I advance in the tournament?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="3">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                You must win your current round to advanced to the next round.
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
                                <ExpandMore></ExpandMore>
                              </div>
                              How does GameHub deal with delays in the
                              tournament?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="4">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                This is on a per situation basis, but we will always gave teams 5-10 minutes post the starting time to arrive and start playing. We will text or email them if they are not showing up and then if they keep delaying or dont respond, they will automatically lose and the other team will advance.

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
                                <ExpandMore></ExpandMore>
                              </div>
                              How will I remember when the tournament starts?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="5">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                After you sign up for a tournament, you will get an email confirmation that you signed up. The starting time for the tournament is always displayed on the individual tournament page, so make sure to check that and know when its starting.
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
                      <ExpandMore></ExpandMore>
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
                                <ExpandMore></ExpandMore>
                              </div>
                              How do I pay to enter a tournament?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                You have to register as a new user first. Then once you are registered, you hit the +Add Cash button on your user panel, and enter the amount of money you’d like to deposit. Then from there, you need to get credits. 1 credit is $1 dollar. You enter a tournament with credits.
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
                                <ExpandMore></ExpandMore>
                              </div>
                              How much do tournaments cost?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                Tournaments generally range from 20-100 credits. Some big or special tournaments may be less or more, it will depend on the tournament.
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
                                <ExpandMore></ExpandMore>
                              </div>
                              Are my payment details secure?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="2">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                Absolutely. We use Stripe for our payments which has world class payment security and technology. We comply with all PCI protocols, deploy the latest SSL protocols and employ advanced tokenization measures, to ensure all data is anonymously and securely protected.
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
                                <ExpandMore></ExpandMore>
                              </div>
                              I won. How do I get my winnings?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="3">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                You can submit a prize withdrawal ticket or send an email to <a style={{color: "lightblue"}} href="mailto: prizes@gamehubx.com"> prizes@gamehubx.com</a>  with your request.
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
                                <ExpandMore></ExpandMore>
                              </div>
                              How much does GameHub take from the pot?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="4">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                We take 15.9% percent from each pot. This goes to administrative fees, employee fees, hosting and website fees and just the general expenses it takes to run and host a complicated service such as this.
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
                      <ExpandMore></ExpandMore>
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
                                <ExpandMore></ExpandMore>
                              </div>
                              How do I become a recent champion featured on the homepage?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                  We choose homepage champions at random!
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
                                <ExpandMore></ExpandMore>
                              </div>
                              How can I get featured on GameHubs social media accounts?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                We choose to feature players on our social media accounts all the time, this is mostly by random choice as well. It won’t be long before you are featured on one of our channels!
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
                                <ExpandMore></ExpandMore>
                              </div>
                              How do I find other players to play with?
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="2">
                            <Card.Body>
                              <div class="card-body-inner-content">
                                <p>
                                In the future we will implement a community pool of players that can reach out to one another to join forces on a team tournament and play together. For now, we suggest you to ask some friends that enjoy similar games as you or post requests on your social media accounts asking if anyone is interested in joining a tournament with you.
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

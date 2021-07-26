import React from "react";
import mymatches from '../../Images/mymatches.png'

/*eslint-disable*/
export default function Rules() {
  return (
    <div>
      {/* =================== Tournament Rules Tabs ===================== */}
      <div class="tab-content rules-content">
        {/* ============== Search Bar ============ */}
        {/* <div class="rules-search-bar">
          <i class="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search Rules"
            class="rules-searchbar-input"
          />
        </div> */}
        {/* ================== Accordion Tabs 1 ================ */}
        <div class="tournament-rules-tab-content">
          <div class="tournament-rules-content-inner">
            <h2>General Tournament Rules</h2>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              {/* ========= Tab item 1 =========== */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    No Show & Forfeits
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <div class="accordion-detail-content-text">
                      <p>
                      You or your opponent are officially considered a “no-show” if you are more than 10 MINUTES late to the start of your official match time. In addition to knowing the start time of the tournament when you sign up for it, you will also get a reminder sent to your email or phone before the tournament starts, so please be prepared. We recommend being ready, set up and in the game lobby 5 minutes prior to the start of your first match, in case any technical difficulties should happen.
                      </p>
                      <p>
                      If your opposing team is not ready within the 10 minutes of the match start time, you must contact the tournament administrator via email or text to notify them.
                      </p>
                      <p>
                      Once the administrator has been notified, they will then contact your opponent. Your opponent will be given 5 minutes to respond to the administrator and join the match.
                      </p>
                      <p>
                      Failure to follow the time limit given by the administrator will result in a forfeiture and loss of the match. You will then automatically advance.
                      </p>
                    </div>
                  </div>
                </div>  
              </div>
                {/* ========= Tab item 2 Start =========== */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Showing Proof of Wins
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <div class="accordion-detail-content-text">
                      <p>
                      After the end of your match, you will have to go to your <b>IN PROGRESS TOURNAMENTS</b> in your <b>MY MATCHES</b> section in your profile. You can that access here in your profile panel:
                      </p>
                      <img src={mymatches} class="img-fluid" alt='pic'></img>
                      <p>
                      You will truthfully report the result of your match in his section. If you won the match and you click WIN and your opponent clicks LOSE, then you will automatically advance to the next round and the bracket will reflect this.
                      </p>
                      <p>
                      If you won, click WIN and your opponent also clicks WIN, you will both be required to submit photo/screenshot proof of your scoreboard. You have 5 minutes to submit this proof. In order to submit proof, go to the bottom of the website and click CREATE A TICKET, then enter your details/proof and press submit. 
                      </p>
                      <p>
                      Do NOT exit your final score screen until AFTER you have advanced on the bracket. Once you both submit proof, the admin will check and advance forward the true winner.
                      </p>
                      <p>
                      If your opponent does not submit proof in this timeframe, you will be declared the winner & automatically advance to the next round.
                      </p>
                    </div>
                  </div>
                </div>  
              </div>
              {/* ========= Tab item 2 End =========== */}
              {/* ========= Tab item  3 ========== */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Hosting
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <div class="accordion-detail-content-text">                     
                    <p>
                    You will be chosen at random to become a host for each game in the tournament. Hosts are randomly chosen each round between you and your opponent. Your administrator will let you know if you are the host for the current round.
                    </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ========= Tab item 3 End =========== */}
              {/* ========= Tab item 4 =========== */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    GameHub Support 
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <div class="accordion-detail-content-text tab2-text tab4-text">
                      <p>
                      Your tournament will be assigned at least one admin to settle disputes, reach out to teams if they’re late, help answer questions and ensure the tournament is run smoothly and fairly.
                      </p>
                      <p>
                      You may contact your admin via phone or email throughout the tournament to ask any questions and help settle any potential disputes. You can view their contact info on the page to the right, under ADMINS. You are still required to submit proof through the ticket portal on the website in order to show proof and settle disputes.
                      </p>
                      <p>
                      You may contact <a style={{color: 'lightblue'}} href='mailto:support@gamehubx.com'>support@gamehubx.com</a> at any time as well with questions or help.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ========= Tab item 4 End =========== */}
              {/* ========= Tab item 5 =========== */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    Prize Winnings Policy
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <div class="accordion-detail-content-text">
                      <p>
                      If you are in a paid tournament and win a cash prize by placing in the Top 3 spots, you are eligible to withdraw your winnings. 
                      </p>
                    </div>
                    <div class="accordion-detail-content-text">
                      <div class="tournament-column">
                        {/* <p>
                          Miami removed for CDL Search and Destroy 1v1/2v2
                          Tournaments, XP, and Cash Matches Raid added for CDL
                          Search and Destroy Tournaments, XP, and Cash Matches
                        </p> */}
                        <div class="short-text">
                          <p>
                          Your winnings will be deposited to your account and you will be able to request a transfer. You can request a payout in the following 3 ways:
                          </p>
                          <p>1.	Wire transfer to your bank account. You will be able to securely submit your bank account number and routing number, and we will initiate a wire transfer. This should take 1-3 business days depending on your financial institution.</p>
                          <p>2.	Venmo. You can submit your Venmo username and we will send your payment within 1 business day.</p>
                          <p>3.	Cash App. You can submit your Cash App username and we will send your payment within 1 business day.</p>
                        </div>
                      </div>
                      <p>
                      Please be aware if you submit an incorrect name or misspell your Venmo or Cash App username, we will not be able to recover the funds sent to a mistaken account. This is your responsibility to provide the exact correct username. 
                      </p>
                      <p>
                      The minimum amount of funds eligible to be withdrawn is $10. Please contact us with any questions prior or post a withdrawal by creating a ticket or emailing us <a style={{color: "lightblue"}} href="mailto:support@gamehubx.com"> support@gamehubx.com</a> .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ========= Tab item 5 End =========== */}
            </div>
          </div>
        </div>
        {/* ================== Accordion Tabs 1 End ================ */}
        {/* ================== Accordion Tabs 2 End ================ */}
      </div>
    </div>
  );
}

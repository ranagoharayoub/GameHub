import React from "react";
/*eslint-disable*/
export default function Rules() {
  return (
    <div>
      {/* =================== Tournament Rules Tabs ===================== */}
      <div class="tab-content rules-content">
        {/* ============== Search Bar ============ */}
        <div class="rules-search-bar">
          <i class="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search Rules"
            class="rules-searchbar-input"
          />
        </div>
        {/* ================== Accordion Tabs 1 ================ */}
        <div class="tournament-rules-tab-content">
          <div class="tournament-rules-content-inner">
            <h2>Black Ops Cold War General Tournament Rules</h2>
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
                    PC Players (MUST READ)
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
                        <strong>PC Stream Requirements</strong>
                      </p>
                      <p>
                        ALL PC players participating in a Black Ops Cold War CMG
                        Match MUST STREAM with Past Broadcasts ENABLED so the
                        VOD of the match is available.
                      </p>
                      <p>
                        It is each team's responsibility to ensure that the
                        opposing team’s PC players are streaming with past
                        broadcasts enabled prior to the match starting. We will
                        not issue forfeits or replays if your team fails to
                        confirm this prior to the match starting. You can gather
                        this information by requesting the stream links in the
                        match chat or by viewing your opponents social media
                        links under the roster section in the match details
                        page.
                      </p>
                      <p>
                        <strong>
                          All streams are required to have Audio (Gameplay and
                          Voice Communication - Voice changers are not allowed!)
                          during matches. Failure to do this may result in a
                          replay, cancel or forfeit.
                        </strong>
                      </p>
                      <hr />
                    </div>
                    <div class="accordion-detail-content-text accordion-tab-text-2">
                      <p>
                        <strong>Enabling Past Broadcasts:</strong>
                      </p>
                      <p>
                        For any assistance in enabling your past broadcasts on
                        Twitch, you may refer to this article
                        <a href="https://help.twitch.tv/s/article/video-on-demand">
                          <span>
                            https://help.twitch.tv/s/article/video-on-demand
                          </span>
                        </a>
                      </p>
                      <p>
                        It is each team's responsibility to ensure that the
                        opposing team’s PC players are streaming with past
                        broadcasts enabled prior to the match starting. We will
                        not issue forfeits or replays if your team fails to
                        confirm this prior to the match starting. You can gather
                        this information by requesting the stream links in the
                        match chat or by viewing your opponents social media
                        links under the roster section in the match details
                        page.
                      </p>
                      <p>
                        <strong>
                          All streams are required to have Audio (Gameplay and
                          Voice Communication - Voice changers are not allowed!)
                          during matches. Failure to do this may result in a
                          replay, cancel or forfeit.
                        </strong>
                      </p>
                      <hr />
                    </div>
                    <div class="accordion-detail-content-text accordion-tab-text-2">
                      <p>
                        <strong>Cheating:</strong>
                      </p>
                      <p>
                        Here at CMG we have a zero-tolerance policy for anyone
                        who is cheating/hacking. If we find, in your stream or
                        VOD, that you are using a 3rd party software/device to
                        cheat/hack you will be permanently banned from the
                        platform.
                      </p>
                      <p>
                        Admins may require additional proof from any user who we
                        may suspect is hacking. Failure to provide additional
                        proof to an admin may result in a ban/forfeit on your
                        match.
                      </p>
                      <p>
                        For any questions regarding our PC Player Policies,
                        please refer to this article{" "}
                        <a href="https://www.checkmategaming.com/article/cmg-pc-transition-519.htm">
                          <span>
                            https://www.checkmategaming.com/article/cmg-pc-transition-519.htm
                          </span>
                        </a>
                      </p>
                      <hr />
                    </div>
                    <div class="accordion-detail-content-text accordion-tab-text-2">
                      <p>
                        <strong>Tournament Matches:</strong>
                      </p>
                      <p>
                        1. If the opposing team cannot provide stream proof
                        before the match start time you will need to treat it
                        like a no-show. You can dispute the match and request an
                        admin inside your match chat.
                      </p>
                      <p>
                        2. Any matches played out in full will count regardless
                        if it was streamed or not. It is each team's
                        responsibility to ensure all PC players in the match are
                        streaming with past broadcasts enabled prior to
                        starting.
                      </p>
                      <p>
                        3. If the match is started and you play out rounds
                        without confirming the opposing teams PC players are
                        streaming, those rounds will count.
                      </p>
                      <p>
                        4. If any valid hacking claims are made, and proof is
                        provided, an admin will have the ability to ensure the
                        player(s) being accused is using ‘Display Capture’
                        instead of ‘Game Capture’. An admin also has the ability
                        to conduct a ‘Monitor Cam’ on the player(s) being
                        accused of cheating. If this is not completed at the
                        admin’s discretion a forfeit, replay or ban may be
                        issued. 5. If you are required to provide an admin with
                        a ‘Monitor Cam’, this can be done through Periscope or
                        Twitch. New ‘alternate’ accounts can be created and
                        linked to an admin separate from your match chat to
                        ensure there is no ‘stream watching’. You may also turn
                        a webcam on your Monitor to show on your Twitch Stream.
                        If this is not completed within the time an admin gives
                        you, a forfeit, replay, or ban may be issued.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ========= Tab item 1 End =========== */}
              {/* ========= Tab item 2 =========== */}
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
                    No Show
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <div class="accordion-detail-content-text tab2-text">
                      <p>
                        <strong>
                          No Shows for Tournaments and Live Support Challenges
                          will now exclusively be done through the CMG Chat on
                          the Website or App - Click Here to read about it and
                          install on your iOS or Android device
                        </strong>
                      </p>
                      <p>
                        1. Each team has 15 Minutes from the scheduled match
                        time to join/host their match. If the opposing team is
                        not ready within the 15 minutes, you must click “no
                        show” in your match chat and then click “request an
                        administrator”.
                      </p>
                      <p>
                        2. Once the administrator has been requested, the
                        administrator will then contact your opponents. Your
                        opponent will be given X amount of time to respond to
                        the administrator and Join/Host. The additional amount
                        of time is based on the administrator’s discretion.
                      </p>
                      <p>
                        3. Failure to follow the time limit given by the
                        administrator will result in a forfeiture of the
                        map/match.
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
                    Submitting Proof
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
                        <strong>Tournament Matches - PC Players:</strong>
                      </p>
                      <div class="tournament-column">
                        <div class="row">
                          <div class="col-lg-2">
                            <p>
                              If the opposing team cannot provide stream proof
                              before the match start time you will need to treat
                              it like a no-show. You can dispute the match and
                              request an admin inside your match chat.
                            </p>
                          </div>
                          <div class="col-lg-2">
                            <p>
                              Any matches played out in full will count
                              regardless if it was streamed or not. It is each
                              team's responsibility to ensure all PC players in
                              the match are streaming with past broadcasts
                              enabled prior to starting.
                            </p>
                          </div>
                          <div class="col-lg-2">
                            <p>
                              If the match is started and you play out rounds
                              without confirming the opposing teams PC players
                              are streaming, those rounds will count.
                            </p>
                          </div>
                          <div class="col-lg-3">
                            <p>
                              If any valid hacking claims are made, and proof is
                              provided, an admin will have the ability to ensure
                              the player(s) being accused is using ‘Display
                              Capture’ instead of ‘Game Capture’. An admin also
                              has the ability to conduct a ‘Monitor Cam’ on the
                              player(s) being accused of cheating. If this is
                              not completed at the admin’s discretion a forfeit,
                              replay or ban may be issued.
                            </p>
                          </div>
                          <div class="col-lg-3">
                            <p>
                              If you are required to provide an admin with a
                              ‘Monitor Cam’, this can be done through Periscope
                              or Twitch. New ‘alternate’ accounts can be created
                              and linked to an admin separate from your match
                              chat to ensure there is no ‘stream watching’. You
                              may also turn a webcam on your Monitor to show on
                              your Twitch Stream. If this is not completed
                              within the time an admin gives you, a forfeit,
                              replay, or ban may be issued.
                            </p>
                          </div>
                        </div>
                      </div>
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
                    Activision ID
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
                        Your Activision ID must match exactly how it is
                        displayed on your Call of Duty profile.
                      </p>
                      <p>
                        If a match is played to completion on incorrect
                        Activision IDs, the outcome of the match will stand.
                      </p>
                      <p>
                        Your Activision ID must be correct. In the event that
                        your gamer tag does not match your match details page,
                        it is the admin's discretion to forfeit or force your
                        team to play a man down. Please check to ensure it is
                        correct.
                      </p>
                      <p>
                        Your Activision ID can be found by going to your friend
                        list and clicking the right thumbstick.
                        <span>
                          We need the "Activision ID" including the "#1234" if
                          they are present, some players do not have these
                          numbers and so they are not necessary.
                        </span>
                      </p>
                      <p>
                        Your Activision ID should only include the English
                        alphabet, numbers and characters. Special characters
                        such as emojis, faces and other languages are not
                        permitted as they cannot be accessed on the consoles
                        US/EU keyboard layouts. If you have any special
                        characters, and are not adding your opponent before the
                        no-show time, you may be forfeited at the admin's
                        discretion.
                      </p>
                      <p>
                        <strong>
                          CMG Reserves the right of our administrators to
                          approve of a gamertag in rare instances. This can only
                          be done via live support and the opponents will be
                          notified.
                        </strong>
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
                    Recent Changes
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
                        <strong>February 9th 2021</strong>
                      </p>
                      <div class="tournament-column">
                        <p>
                          Items which are restricted in the CDL Search and
                          Destroy in-game rules are no longer allowed for use in
                          the CMG Search and Destroy ruleset
                        </p>
                      </div>
                    </div>
                    <div class="accordion-detail-content-text">
                      <p>
                        <strong>January 28th 2021 at 5am EST</strong>
                      </p>
                      <div class="tournament-column">
                        <p>Snipers are restricted for Search and Destroy.</p>
                      </div>
                    </div>
                    <div class="accordion-detail-content-text">
                      <p>
                        <strong>December 15th 2020 at 2:00am EST</strong>
                      </p>
                      <div class="tournament-column">
                        <p>
                          Miami removed for CDL Search and Destroy 1v1/2v2
                          Tournaments, XP, and Cash Matches Raid added for CDL
                          Search and Destroy Tournaments, XP, and Cash Matches
                        </p>
                        <div class="short-text">
                          <p>
                            The following items are restricted for CDL Search
                            and Destroy, CDL Hardpoint, and CDL Control;
                          </p>
                          <p>Molotovs</p>
                          <p>VisionTech 2x</p>
                          <p>SUSAT Multizoom</p>
                          <p>Axial Arms 3x</p>
                          <p>Royal and Kross 4x</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ========= Tab item 5 End =========== */}
            </div>
          </div>
        </div>
        {/* ================== Accordion Tabs 1 End ================ */}

        {/* ================== Accordion Tabs 2 ================ */}
        <div class="tournament-rules-tab-content accordiontabs-2">
          <div class="tournament-rules-content-inner">
            <h2>CMG SEARCH AND DESTROY RULES</h2>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              {/* ========= Tab item 1 =========== */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSix">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseSix"
                  >
                    PC Players (MUST READ)
                  </button>
                </h2>
                <div
                  id="flush-collapseSix"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingSix"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <div class="accordion-detail-content-text">
                      <p>
                        <strong>PC Stream Requirements</strong>
                      </p>
                      <p>
                        ALL PC players participating in a Black Ops Cold War CMG
                        Match MUST STREAM with Past Broadcasts ENABLED so the
                        VOD of the match is available.
                      </p>
                      <p>
                        It is each team's responsibility to ensure that the
                        opposing team’s PC players are streaming with past
                        broadcasts enabled prior to the match starting. We will
                        not issue forfeits or replays if your team fails to
                        confirm this prior to the match starting. You can gather
                        this information by requesting the stream links in the
                        match chat or by viewing your opponents social media
                        links under the roster section in the match details
                        page.
                      </p>
                      <p>
                        <strong>
                          All streams are required to have Audio (Gameplay and
                          Voice Communication - Voice changers are not allowed!)
                          during matches. Failure to do this may result in a
                          replay, cancel or forfeit.
                        </strong>
                      </p>
                      <hr />
                    </div>
                    <div class="accordion-detail-content-text accordion-tab-text-2">
                      <p>
                        <strong>Enabling Past Broadcasts:</strong>
                      </p>
                      <p>
                        For any assistance in enabling your past broadcasts on
                        Twitch, you may refer to this article
                        <a href="https://help.twitch.tv/s/article/video-on-demand">
                          <span>
                            https://help.twitch.tv/s/article/video-on-demand
                          </span>
                        </a>
                      </p>
                      <p>
                        It is each team's responsibility to ensure that the
                        opposing team’s PC players are streaming with past
                        broadcasts enabled prior to the match starting. We will
                        not issue forfeits or replays if your team fails to
                        confirm this prior to the match starting. You can gather
                        this information by requesting the stream links in the
                        match chat or by viewing your opponents social media
                        links under the roster section in the match details
                        page.
                      </p>
                      <p>
                        <strong>
                          All streams are required to have Audio (Gameplay and
                          Voice Communication - Voice changers are not allowed!)
                          during matches. Failure to do this may result in a
                          replay, cancel or forfeit.
                        </strong>
                      </p>
                      <hr />
                    </div>
                    <div class="accordion-detail-content-text accordion-tab-text-2">
                      <p>
                        <strong>Cheating:</strong>
                      </p>
                      <p>
                        Here at CMG we have a zero-tolerance policy for anyone
                        who is cheating/hacking. If we find, in your stream or
                        VOD, that you are using a 3rd party software/device to
                        cheat/hack you will be permanently banned from the
                        platform.
                      </p>
                      <p>
                        Admins may require additional proof from any user who we
                        may suspect is hacking. Failure to provide additional
                        proof to an admin may result in a ban/forfeit on your
                        match.
                      </p>
                      <p>
                        For any questions regarding our PC Player Policies,
                        please refer to this article{" "}
                        <a href="https://www.checkmategaming.com/article/cmg-pc-transition-519.htm">
                          <span>
                            https://www.checkmategaming.com/article/cmg-pc-transition-519.htm
                          </span>
                        </a>
                      </p>
                      <hr />
                    </div>
                    <div class="accordion-detail-content-text accordion-tab-text-2">
                      <p>
                        <strong>Tournament Matches:</strong>
                      </p>
                      <p>
                        1. If the opposing team cannot provide stream proof
                        before the match start time you will need to treat it
                        like a no-show. You can dispute the match and request an
                        admin inside your match chat.
                      </p>
                      <p>
                        2. Any matches played out in full will count regardless
                        if it was streamed or not. It is each team's
                        responsibility to ensure all PC players in the match are
                        streaming with past broadcasts enabled prior to
                        starting.
                      </p>
                      <p>
                        3. If the match is started and you play out rounds
                        without confirming the opposing teams PC players are
                        streaming, those rounds will count.
                      </p>
                      <p>
                        4. If any valid hacking claims are made, and proof is
                        provided, an admin will have the ability to ensure the
                        player(s) being accused is using ‘Display Capture’
                        instead of ‘Game Capture’. An admin also has the ability
                        to conduct a ‘Monitor Cam’ on the player(s) being
                        accused of cheating. If this is not completed at the
                        admin’s discretion a forfeit, replay or ban may be
                        issued. 5. If you are required to provide an admin with
                        a ‘Monitor Cam’, this can be done through Periscope or
                        Twitch. New ‘alternate’ accounts can be created and
                        linked to an admin separate from your match chat to
                        ensure there is no ‘stream watching’. You may also turn
                        a webcam on your Monitor to show on your Twitch Stream.
                        If this is not completed within the time an admin gives
                        you, a forfeit, replay, or ban may be issued.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ========= Tab item 1 End =========== */}
              {/* ========= Tab item 2 =========== */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSeven">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSeven"
                    aria-expanded="false"
                    aria-controls="flush-collapseSeven"
                  >
                    No Show
                  </button>
                </h2>
                <div
                  id="flush-collapseSeven"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingSeven"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <div class="accordion-detail-content-text">
                      <p>
                        <strong>PC Stream Requirements</strong>
                      </p>
                      <p>
                        ALL PC players participating in a Black Ops Cold War CMG
                        Match MUST STREAM with Past Broadcasts ENABLED so the
                        VOD of the match is available.
                      </p>
                      <p>
                        It is each team's responsibility to ensure that the
                        opposing team’s PC players are streaming with past
                        broadcasts enabled prior to the match starting. We will
                        not issue forfeits or replays if your team fails to
                        confirm this prior to the match starting. You can gather
                        this information by requesting the stream links in the
                        match chat or by viewing your opponents social media
                        links under the roster section in the match details
                        page.
                      </p>
                      <p>
                        <strong>
                          All streams are required to have Audio (Gameplay and
                          Voice Communication - Voice changers are not allowed!)
                          during matches. Failure to do this may result in a
                          replay, cancel or forfeit.
                        </strong>
                      </p>
                      <hr />
                    </div>
                    <div class="accordion-detail-content-text accordion-tab-text-2">
                      <p>
                        <strong>Enabling Past Broadcasts:</strong>
                      </p>
                      <p>
                        For any assistance in enabling your past broadcasts on
                        Twitch, you may refer to this article
                        <a href="https://help.twitch.tv/s/article/video-on-demand">
                          <span>
                            https://help.twitch.tv/s/article/video-on-demand
                          </span>
                        </a>
                      </p>
                      <p>
                        It is each team's responsibility to ensure that the
                        opposing team’s PC players are streaming with past
                        broadcasts enabled prior to the match starting. We will
                        not issue forfeits or replays if your team fails to
                        confirm this prior to the match starting. You can gather
                        this information by requesting the stream links in the
                        match chat or by viewing your opponents social media
                        links under the roster section in the match details
                        page.
                      </p>
                      <p>
                        <strong>
                          All streams are required to have Audio (Gameplay and
                          Voice Communication - Voice changers are not allowed!)
                          during matches. Failure to do this may result in a
                          replay, cancel or forfeit.
                        </strong>
                      </p>
                      <hr />
                    </div>
                    <div class="accordion-detail-content-text accordion-tab-text-2">
                      <p>
                        <strong>Cheating:</strong>
                      </p>
                      <p>
                        Here at CMG we have a zero-tolerance policy for anyone
                        who is cheating/hacking. If we find, in your stream or
                        VOD, that you are using a 3rd party software/device to
                        cheat/hack you will be permanently banned from the
                        platform.
                      </p>
                      <p>
                        Admins may require additional proof from any user who we
                        may suspect is hacking. Failure to provide additional
                        proof to an admin may result in a ban/forfeit on your
                        match.
                      </p>
                      <p>
                        For any questions regarding our PC Player Policies,
                        please refer to this article{" "}
                        <a href="https://www.checkmategaming.com/article/cmg-pc-transition-519.htm">
                          <span>
                            https://www.checkmategaming.com/article/cmg-pc-transition-519.htm
                          </span>
                        </a>
                      </p>
                      <hr />
                    </div>
                    <div class="accordion-detail-content-text accordion-tab-text-2">
                      <p>
                        <strong>Tournament Matches:</strong>
                      </p>
                      <p>
                        1. If the opposing team cannot provide stream proof
                        before the match start time you will need to treat it
                        like a no-show. You can dispute the match and request an
                        admin inside your match chat.
                      </p>
                      <p>
                        2. Any matches played out in full will count regardless
                        if it was streamed or not. It is each team's
                        responsibility to ensure all PC players in the match are
                        streaming with past broadcasts enabled prior to
                        starting.
                      </p>
                      <p>
                        3. If the match is started and you play out rounds
                        without confirming the opposing teams PC players are
                        streaming, those rounds will count.
                      </p>
                      <p>
                        4. If any valid hacking claims are made, and proof is
                        provided, an admin will have the ability to ensure the
                        player(s) being accused is using ‘Display Capture’
                        instead of ‘Game Capture’. An admin also has the ability
                        to conduct a ‘Monitor Cam’ on the player(s) being
                        accused of cheating. If this is not completed at the
                        admin’s discretion a forfeit, replay or ban may be
                        issued. 5. If you are required to provide an admin with
                        a ‘Monitor Cam’, this can be done through Periscope or
                        Twitch. New ‘alternate’ accounts can be created and
                        linked to an admin separate from your match chat to
                        ensure there is no ‘stream watching’. You may also turn
                        a webcam on your Monitor to show on your Twitch Stream.
                        If this is not completed within the time an admin gives
                        you, a forfeit, replay, or ban may be issued.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ========= Tab item 2 End =========== */}
              {/* ========= Tab item  3 ========== */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingEight">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseEight"
                    aria-expanded="false"
                    aria-controls="flush-collapseEight"
                  >
                    Submitting Proof
                  </button>
                </h2>
                <div
                  id="flush-collapseEight"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingEight"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <div class="accordion-detail-content-text">
                      <p>
                        <strong>PC Stream Requirements</strong>
                      </p>
                      <p>
                        ALL PC players participating in a Black Ops Cold War CMG
                        Match MUST STREAM with Past Broadcasts ENABLED so the
                        VOD of the match is available.
                      </p>
                      <p>
                        It is each team's responsibility to ensure that the
                        opposing team’s PC players are streaming with past
                        broadcasts enabled prior to the match starting. We will
                        not issue forfeits or replays if your team fails to
                        confirm this prior to the match starting. You can gather
                        this information by requesting the stream links in the
                        match chat or by viewing your opponents social media
                        links under the roster section in the match details
                        page.
                      </p>
                      <p>
                        <strong>
                          All streams are required to have Audio (Gameplay and
                          Voice Communication - Voice changers are not allowed!)
                          during matches. Failure to do this may result in a
                          replay, cancel or forfeit.
                        </strong>
                      </p>
                      <hr />
                    </div>
                    <div class="accordion-detail-content-text accordion-tab-text-2">
                      <p>
                        <strong>Enabling Past Broadcasts:</strong>
                      </p>
                      <p>
                        For any assistance in enabling your past broadcasts on
                        Twitch, you may refer to this article
                        <a href="https://help.twitch.tv/s/article/video-on-demand">
                          <span>
                            https://help.twitch.tv/s/article/video-on-demand
                          </span>
                        </a>
                      </p>
                      <p>
                        It is each team's responsibility to ensure that the
                        opposing team’s PC players are streaming with past
                        broadcasts enabled prior to the match starting. We will
                        not issue forfeits or replays if your team fails to
                        confirm this prior to the match starting. You can gather
                        this information by requesting the stream links in the
                        match chat or by viewing your opponents social media
                        links under the roster section in the match details
                        page.
                      </p>
                      <p>
                        <strong>
                          All streams are required to have Audio (Gameplay and
                          Voice Communication - Voice changers are not allowed!)
                          during matches. Failure to do this may result in a
                          replay, cancel or forfeit.
                        </strong>
                      </p>
                      <hr />
                    </div>
                    <div class="accordion-detail-content-text accordion-tab-text-2">
                      <p>
                        <strong>Cheating:</strong>
                      </p>
                      <p>
                        Here at CMG we have a zero-tolerance policy for anyone
                        who is cheating/hacking. If we find, in your stream or
                        VOD, that you are using a 3rd party software/device to
                        cheat/hack you will be permanently banned from the
                        platform.
                      </p>
                      <p>
                        Admins may require additional proof from any user who we
                        may suspect is hacking. Failure to provide additional
                        proof to an admin may result in a ban/forfeit on your
                        match.
                      </p>
                      <p>
                        For any questions regarding our PC Player Policies,
                        please refer to this article{" "}
                        <a href="https://www.checkmategaming.com/article/cmg-pc-transition-519.htm">
                          <span>
                            https://www.checkmategaming.com/article/cmg-pc-transition-519.htm
                          </span>
                        </a>
                      </p>
                      <hr />
                    </div>
                    <div class="accordion-detail-content-text accordion-tab-text-2">
                      <p>
                        <strong>Tournament Matches:</strong>
                      </p>
                      <p>
                        1. If the opposing team cannot provide stream proof
                        before the match start time you will need to treat it
                        like a no-show. You can dispute the match and request an
                        admin inside your match chat.
                      </p>
                      <p>
                        2. Any matches played out in full will count regardless
                        if it was streamed or not. It is each team's
                        responsibility to ensure all PC players in the match are
                        streaming with past broadcasts enabled prior to
                        starting.
                      </p>
                      <p>
                        3. If the match is started and you play out rounds
                        without confirming the opposing teams PC players are
                        streaming, those rounds will count.
                      </p>
                      <p>
                        4. If any valid hacking claims are made, and proof is
                        provided, an admin will have the ability to ensure the
                        player(s) being accused is using ‘Display Capture’
                        instead of ‘Game Capture’. An admin also has the ability
                        to conduct a ‘Monitor Cam’ on the player(s) being
                        accused of cheating. If this is not completed at the
                        admin’s discretion a forfeit, replay or ban may be
                        issued. 5. If you are required to provide an admin with
                        a ‘Monitor Cam’, this can be done through Periscope or
                        Twitch. New ‘alternate’ accounts can be created and
                        linked to an admin separate from your match chat to
                        ensure there is no ‘stream watching’. You may also turn
                        a webcam on your Monitor to show on your Twitch Stream.
                        If this is not completed within the time an admin gives
                        you, a forfeit, replay, or ban may be issued.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ========= Tab item 3 End =========== */}
              {/* ========= Tab item 4 =========== */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingNine">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseNine"
                    aria-expanded="false"
                    aria-controls="flush-collapseNine"
                  >
                    Activision ID
                  </button>
                </h2>
                <div
                  id="flush-collapseNine"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingNine"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <div class="accordion-detail-content-text">
                      <p>
                        <strong>PC Stream Requirements</strong>
                      </p>
                      <p>
                        ALL PC players participating in a Black Ops Cold War CMG
                        Match MUST STREAM with Past Broadcasts ENABLED so the
                        VOD of the match is available.
                      </p>
                      <p>
                        It is each team's responsibility to ensure that the
                        opposing team’s PC players are streaming with past
                        broadcasts enabled prior to the match starting. We will
                        not issue forfeits or replays if your team fails to
                        confirm this prior to the match starting. You can gather
                        this information by requesting the stream links in the
                        match chat or by viewing your opponents social media
                        links under the roster section in the match details
                        page.
                      </p>
                      <p>
                        <strong>
                          All streams are required to have Audio (Gameplay and
                          Voice Communication - Voice changers are not allowed!)
                          during matches. Failure to do this may result in a
                          replay, cancel or forfeit.
                        </strong>
                      </p>
                      <hr />
                    </div>
                    <div class="accordion-detail-content-text accordion-tab-text-2">
                      <p>
                        <strong>Enabling Past Broadcasts:</strong>
                      </p>
                      <p>
                        For any assistance in enabling your past broadcasts on
                        Twitch, you may refer to this article
                        <a href="https://help.twitch.tv/s/article/video-on-demand">
                          <span>
                            https://help.twitch.tv/s/article/video-on-demand
                          </span>
                        </a>
                      </p>
                      <p>
                        It is each team's responsibility to ensure that the
                        opposing team’s PC players are streaming with past
                        broadcasts enabled prior to the match starting. We will
                        not issue forfeits or replays if your team fails to
                        confirm this prior to the match starting. You can gather
                        this information by requesting the stream links in the
                        match chat or by viewing your opponents social media
                        links under the roster section in the match details
                        page.
                      </p>
                      <p>
                        <strong>
                          All streams are required to have Audio (Gameplay and
                          Voice Communication - Voice changers are not allowed!)
                          during matches. Failure to do this may result in a
                          replay, cancel or forfeit.
                        </strong>
                      </p>
                      <hr />
                    </div>
                    <div class="accordion-detail-content-text accordion-tab-text-2">
                      <p>
                        <strong>Cheating:</strong>
                      </p>
                      <p>
                        Here at CMG we have a zero-tolerance policy for anyone
                        who is cheating/hacking. If we find, in your stream or
                        VOD, that you are using a 3rd party software/device to
                        cheat/hack you will be permanently banned from the
                        platform.
                      </p>
                      <p>
                        Admins may require additional proof from any user who we
                        may suspect is hacking. Failure to provide additional
                        proof to an admin may result in a ban/forfeit on your
                        match.
                      </p>
                      <p>
                        For any questions regarding our PC Player Policies,
                        please refer to this article{" "}
                        <a href="https://www.checkmategaming.com/article/cmg-pc-transition-519.htm">
                          <span>
                            https://www.checkmategaming.com/article/cmg-pc-transition-519.htm
                          </span>
                        </a>
                      </p>
                      <hr />
                    </div>
                    <div class="accordion-detail-content-text accordion-tab-text-2">
                      <p>
                        <strong>Tournament Matches:</strong>
                      </p>
                      <p>
                        1. If the opposing team cannot provide stream proof
                        before the match start time you will need to treat it
                        like a no-show. You can dispute the match and request an
                        admin inside your match chat.
                      </p>
                      <p>
                        2. Any matches played out in full will count regardless
                        if it was streamed or not. It is each team's
                        responsibility to ensure all PC players in the match are
                        streaming with past broadcasts enabled prior to
                        starting.
                      </p>
                      <p>
                        3. If the match is started and you play out rounds
                        without confirming the opposing teams PC players are
                        streaming, those rounds will count.
                      </p>
                      <p>
                        4. If any valid hacking claims are made, and proof is
                        provided, an admin will have the ability to ensure the
                        player(s) being accused is using ‘Display Capture’
                        instead of ‘Game Capture’. An admin also has the ability
                        to conduct a ‘Monitor Cam’ on the player(s) being
                        accused of cheating. If this is not completed at the
                        admin’s discretion a forfeit, replay or ban may be
                        issued. 5. If you are required to provide an admin with
                        a ‘Monitor Cam’, this can be done through Periscope or
                        Twitch. New ‘alternate’ accounts can be created and
                        linked to an admin separate from your match chat to
                        ensure there is no ‘stream watching’. You may also turn
                        a webcam on your Monitor to show on your Twitch Stream.
                        If this is not completed within the time an admin gives
                        you, a forfeit, replay, or ban may be issued.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ========= Tab item 4 End =========== */}
              {/* ========= Tab item 5 =========== */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTen">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTen"
                    aria-expanded="false"
                    aria-controls="flush-collapseTen"
                  >
                    Recent Changes
                  </button>
                </h2>
                <div
                  id="flush-collapseTen"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTen"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <div class="accordion-detail-content-text">
                      <p>
                        <strong>PC Stream Requirements</strong>
                      </p>
                      <p>
                        ALL PC players participating in a Black Ops Cold War CMG
                        Match MUST STREAM with Past Broadcasts ENABLED so the
                        VOD of the match is available.
                      </p>
                      <p>
                        It is each team's responsibility to ensure that the
                        opposing team’s PC players are streaming with past
                        broadcasts enabled prior to the match starting. We will
                        not issue forfeits or replays if your team fails to
                        confirm this prior to the match starting. You can gather
                        this information by requesting the stream links in the
                        match chat or by viewing your opponents social media
                        links under the roster section in the match details
                        page.
                      </p>
                      <p>
                        <strong>
                          All streams are required to have Audio (Gameplay and
                          Voice Communication - Voice changers are not allowed!)
                          during matches. Failure to do this may result in a
                          replay, cancel or forfeit.
                        </strong>
                      </p>
                      <hr />
                    </div>
                    <div class="accordion-detail-content-text accordion-tab-text-2">
                      <p>
                        <strong>Enabling Past Broadcasts:</strong>
                      </p>
                      <p>
                        For any assistance in enabling your past broadcasts on
                        Twitch, you may refer to this article
                        <a href="https://help.twitch.tv/s/article/video-on-demand">
                          <span>
                            https://help.twitch.tv/s/article/video-on-demand
                          </span>
                        </a>
                      </p>
                      <p>
                        It is each team's responsibility to ensure that the
                        opposing team’s PC players are streaming with past
                        broadcasts enabled prior to the match starting. We will
                        not issue forfeits or replays if your team fails to
                        confirm this prior to the match starting. You can gather
                        this information by requesting the stream links in the
                        match chat or by viewing your opponents social media
                        links under the roster section in the match details
                        page.
                      </p>
                      <p>
                        <strong>
                          All streams are required to have Audio (Gameplay and
                          Voice Communication - Voice changers are not allowed!)
                          during matches. Failure to do this may result in a
                          replay, cancel or forfeit.
                        </strong>
                      </p>
                      <hr />
                    </div>
                    <div class="accordion-detail-content-text accordion-tab-text-2">
                      <p>
                        <strong>Cheating:</strong>
                      </p>
                      <p>
                        Here at CMG we have a zero-tolerance policy for anyone
                        who is cheating/hacking. If we find, in your stream or
                        VOD, that you are using a 3rd party software/device to
                        cheat/hack you will be permanently banned from the
                        platform.
                      </p>
                      <p>
                        Admins may require additional proof from any user who we
                        may suspect is hacking. Failure to provide additional
                        proof to an admin may result in a ban/forfeit on your
                        match.
                      </p>
                      <p>
                        For any questions regarding our PC Player Policies,
                        please refer to this article{" "}
                        <a href="https://www.checkmategaming.com/article/cmg-pc-transition-519.htm">
                          <span>
                            https://www.checkmategaming.com/article/cmg-pc-transition-519.htm
                          </span>
                        </a>
                      </p>
                      <hr />
                    </div>
                    <div class="accordion-detail-content-text accordion-tab-text-2">
                      <p>
                        <strong>Tournament Matches:</strong>
                      </p>
                      <p>
                        1. If the opposing team cannot provide stream proof
                        before the match start time you will need to treat it
                        like a no-show. You can dispute the match and request an
                        admin inside your match chat.
                      </p>
                      <p>
                        2. Any matches played out in full will count regardless
                        if it was streamed or not. It is each team's
                        responsibility to ensure all PC players in the match are
                        streaming with past broadcasts enabled prior to
                        starting.
                      </p>
                      <p>
                        3. If the match is started and you play out rounds
                        without confirming the opposing teams PC players are
                        streaming, those rounds will count.
                      </p>
                      <p>
                        4. If any valid hacking claims are made, and proof is
                        provided, an admin will have the ability to ensure the
                        player(s) being accused is using ‘Display Capture’
                        instead of ‘Game Capture’. An admin also has the ability
                        to conduct a ‘Monitor Cam’ on the player(s) being
                        accused of cheating. If this is not completed at the
                        admin’s discretion a forfeit, replay or ban may be
                        issued. 5. If you are required to provide an admin with
                        a ‘Monitor Cam’, this can be done through Periscope or
                        Twitch. New ‘alternate’ accounts can be created and
                        linked to an admin separate from your match chat to
                        ensure there is no ‘stream watching’. You may also turn
                        a webcam on your Monitor to show on your Twitch Stream.
                        If this is not completed within the time an admin gives
                        you, a forfeit, replay, or ban may be issued.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ========= Tab item 5 End =========== */}
            </div>
          </div>
        </div>
        {/* ================== Accordion Tabs 2 End ================ */}
      </div>
    </div>
  );
}

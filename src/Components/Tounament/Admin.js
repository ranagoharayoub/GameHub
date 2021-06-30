import React from "react";
import teamImg from "../../bg/team-1.png";
/*eslint-disable*/
export default function Admin() {
  return (
    <div>
      {/* =================== Admin =================== */}
      <div class="admin-main">
        <div class="team-row team-row-top">
          <div class="team-row-text">
            <p>Rows per page: 10</p>
            <p>1 - 6 of 6</p>
            <div class="small-arrow">
              <i class="fas fa-angle-left"></i>
              <i class="fas fa-angle-right"></i>
            </div>
          </div>
          <div class="team-label">
            <div class="staff-cell">Staff Member</div>
            <div class="staff-cell">Social</div>
            <div class="staff-cell">EMAIL</div>
            <div class="staff-cell">PHONE</div>
          </div>
        </div>
        {/* ============================== Staff Profile ============================ */}
        {/* ====================== Profile 1 ========================= */}
        <div class="profile-main">
          <div class="staff-cell">
            <div class="staff-profile">
              <div class="team-person-image-box">
                <img src={teamImg} />
              </div>
              <div class="team-person">
                <h2>TeamShmackeddd</h2>
                <p>OLT Support</p>
              </div>
            </div>
          </div>
          <div class="staff-cell">
            <div class="staff-icons">
              <div class="staff-icon">
                <i class="fab fa-twitter"></i>
              </div>
              <div class="staff-icon">
                <i class="fab fa-instagram"></i>
              </div>
            </div>
          </div>
          <div class="staff-cell">
            <p>Lozpdata@gmail.com</p>
          </div>
          <div class="staff-cell">
            <p>042356565455</p>
          </div>
        </div>
        {/* ====================== Profile 2 ========================= */}
        <div class="profile-main">
          <div class="staff-cell">
            <div class="staff-profile">
              <div class="team-person-image-box">
                <img src={teamImg} />
              </div>
              <div class="team-person">
                <h2>TeamShmackeddd</h2>
                <p>OLT Support</p>
              </div>
            </div>
          </div>
          <div class="staff-cell">
            <div class="staff-icons">
              <div class="staff-icon">
                <i class="fab fa-twitter"></i>
              </div>
              <div class="staff-icon">
                <i class="fab fa-instagram"></i>
              </div>
            </div>
          </div>
          <div class="staff-cell">
            <p>Lozpdata@gmail.com</p>
          </div>
          <div class="staff-cell">
            <p>042356565455</p>
          </div>
        </div>
        {/* ====================== Profile 3 ========================= */}
        <div class="profile-main">
          <div class="staff-cell">
            <div class="staff-profile">
              <div class="team-person-image-box">
                <img src={teamImg} />
              </div>
              <div class="team-person">
                <h2>TeamShmackeddd</h2>
                <p>OLT Support</p>
              </div>
            </div>
          </div>
          <div class="staff-cell">
            <div class="staff-icons">
              <div class="staff-icon">
                <i class="fab fa-twitter"></i>
              </div>
              <div class="staff-icon">
                <i class="fab fa-instagram"></i>
              </div>
            </div>
          </div>
          <div class="staff-cell">
            <p>Lozpdata@gmail.com</p>
          </div>
          <div class="staff-cell">
            <p>042356565455</p>
          </div>
        </div>
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

import React from "react";
import "./AfterSignup.css";
import { Link } from "react-router-dom";
export default function AfterSignup() {
  return (
    <div>
      <div class="after-signup-main">
        <div class="almost-done">
          <div class="almost-line"></div>
          <div class="almost-content">
            <h2>Almost Done!</h2>
            <p>
              Your account has been created. Please verify your account by
              clicking the link found in the email we just sent. If you cannot
              locate the verification email please check your spam folder or to
              have the verification email resent.
              <Link to="/login">Go to Login Page</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

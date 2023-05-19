import React from "react";
import { Link } from "react-router-dom";
import LOGO from "./../assets/main-footer_LOGO.png";
import "./Main_footer.css";

export default function MainFooter() {
  return (
    <div className="main-footer__container">
      <div className="main-footer__logo-container">
        <Link to="/">
          <img
            className="main-footer__logo"
            src={LOGO}
            alt="Kasa footer LOGO"
          />
        </Link>
      </div>
      <div className="main-footer__rights-reserved-text">
        © 2020 Kasa. All rights reserved
      </div>
    </div>
  );
}

import { React } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Main_header.css";
import Logo from "../assets/LOGO.jpg";
import "./../constants/colors.css";

export default function MainHeader(props) {
  const path = window.location.pathname;
  const underLineStyle = `1px solid var(--mainRed)`;
  return (
    <div className="MainHeader">
      <Link className="MainHeader__logo-link" to="/">
        <div className="MainHeader__logo-container">
          <img
            src={Logo}
            className="MainHeader__logo-container__logo"
            alt="Logo"
          />
        </div>
      </Link>
      <nav className="MainHeader__nav-bar">
        <div className="MainHeader__nav-bar__elt-container">
          <Link
            style={{
              borderBottom:
                path === "/Home" || path === "/" ? `${underLineStyle}` : "none",
            }}
            to="/Home"
            className="MainHeader__nav-bar__elt-container__elt"
          >
            Accueil
          </Link>
          <Link
            style={{
              borderBottom: path === "/A-propos" ? `${underLineStyle}` : "none",
            }}
            to="/A-propos"
            className="MainHeader__nav-bar__elt-container__elt"
          >
            A Propos
          </Link>
        </div>
      </nav>
    </div>
  );
}

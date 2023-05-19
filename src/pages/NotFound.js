import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import MainHeader from "../components/Main_Header";
import MainFooter from "../components/Main_footer";

export default function NotFound() {
  return (
    <>
      <MainHeader />

      <div className="content-404">
        <span className="text-404">404</span>
        <p className="explication">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className="link-404" to="/">
          Retouner sur la page d'accueil
        </Link>
      </div>
      <MainFooter />
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "../pages/Home.css";

import logements from "./../assets/logements.json";

import HomeThumb from "../components/Home_thumb";
import MainHeader from "../components/Main_Header";

export default function Home() {
  console.log(logements);
  return (
    <>
      <MainHeader isUnderLined={true} />
      <div className="hero">
        <div className="hero__img-container">
          <div className="hero__img"></div>
          <p className="hero__text">Chez vous, {"\n"} partout et ailleurs</p>
        </div>
      </div>
      <div className="logements-container">
        <div className="logements">
          {logements.map((logement, index) => {
            return (
              <HomeThumb
                key={index}
                title={logement.title}
                cover={logement.cover}
              />
            );
          })}
        </div>
      </div>
      <Link to="Fiche-Logement">Click to see the fiche-logement</Link>
    </>
  );
}

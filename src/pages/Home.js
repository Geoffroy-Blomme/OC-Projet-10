import React from "react";
import "../pages/Home.css";

import logements from "./../assets/logements.json";
import MainFooter from "../components/Main_footer";
import HomeThumb from "../components/Home_thumb";
import MainHeader from "../components/Main_Header";

export default function Home() {
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
                key={logement.id}
                id={logement.id}
                title={logement.title}
                cover={logement.cover}
              />
            );
          })}
        </div>
      </div>
      <MainFooter />
    </>
  );
}

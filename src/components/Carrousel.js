import { React, useState } from "react";
import arrowBack from "./../assets/arrow_back.svg";
import arrowForward from "./../assets/arrow_forward.svg";
import "./Carrousel.css";

export default function Carrousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const picturesImgElts = props.pictures.map((picture, index) => {
    return (
      <img
        src={picture}
        key={index}
        alt=""
        // On display seulement l'img qui a comme index le current Index.
        style={{ display: `${index === currentIndex ? "initial" : "none"}` }}
        className="carrousel__img"
      />
    );
  });

  function hasMultiplePictures() {
    if (props.pictures.length > 1) {
      return (
        <>
          <img
            src={arrowBack}
            alt=""
            className="carrousel__arrow carrousel__arrow--back"
            onClick={() => arrowClickHandler(-1)}
          />
          <img
            src={arrowForward}
            alt=""
            className="carrousel__arrow carrousel__arrow--forward"
            onClick={() => arrowClickHandler(1)}
          />
          <span className="carrousel__numerotation">
            {currentIndex + 1}/{props.pictures.length}
          </span>
        </>
      );
    } else {
      return null;
    }

    function arrowClickHandler(indexChange) {
      if (indexChange === 1) {
        if (currentIndex === props.pictures.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
      } else {
        if (currentIndex === 0) {
          setCurrentIndex(props.pictures.length - 1);
        } else {
          setCurrentIndex(currentIndex - 1);
        }
      }
    }
  }
  return (
    <>
      <div className="carrousel">
        <div className="carrousel__img-container">
          {picturesImgElts}
          {hasMultiplePictures()}
        </div>
      </div>
    </>
  );
}

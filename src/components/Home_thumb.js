import React from "react";
import "../components/Home_thumb.css";
import { Link } from "react-router-dom";

export default function HomeThumb(props) {
  const linkTo = {
    pathname: `/Fiche-logement/${props.id}`,
  };
  return (
    <>
      <Link to={linkTo} className="thumb">
        <div className="thumb__img-container">
          <img
            src={props.cover}
            alt={"cover pour " + props.title}
            className="thumb__img"
          />
        </div>
        <p className="thumb__title">{props.title}</p>
      </Link>
    </>
  );
}

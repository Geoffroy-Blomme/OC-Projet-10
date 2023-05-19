import React from "react";
import "./Tag.css";
export default function Tag(props) {
  return (
    <div className="tag">
      <span className="tag__text">{props.title}</span>
    </div>
  );
}

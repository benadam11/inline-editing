import React from "react";
import { Element } from "../index";
import "./AboutCard.css";

export const AboutCard = ({ img, heading, text }) => {
  return (
    <div className="about-card">
      <figure style={{ backgroundImage: `url(${img})` }} />
      <div className="content">
        <h4>
          <Element value={heading} />
        </h4>
        <Element value={text} />
      </div>
    </div>
  );
};

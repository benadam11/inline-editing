import React from "react";
import { Element } from "../index";
import "./Content.css";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Ut venenatis tellus in metus vulputate eu. Malesuada proin libero nunc consequat interdum varius sit.";
export const ContentSection = () => {
  return (
    <div className="content-section">
      <div className="container">
        <h3>
          <Element value="Welcome" />
        </h3>
        <Element value={content} />
      </div>
    </div>
  );
};

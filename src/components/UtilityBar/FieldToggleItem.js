import React from "react";
import ReactToggle from "react-toggle";
import "react-toggle/style.css";

const descriptionMap = {
  heading: "Title",
  subheading: "Subtitle",
  text: "Description",
  CTA: "Action Button",
  img: "Image",
  price: "Price"
};

export const FieldToggleItem = ({ field, handleToggle, hidden, id = "" }) => {
  return (
    <div className="toggle-row">
      <span className="field-title">{descriptionMap[field]}</span>
      <ReactToggle
        checked={!hidden}
        onChange={() => {
          handleToggle(field, id);
        }}
      />
    </div>
  );
};

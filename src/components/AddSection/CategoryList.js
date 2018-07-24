import React from "react";

export const CategoryList = ({ selectedIndex, name, handleSelect, index }) => (
  <li
    key={index}
    className={`category-item ${selectedIndex === name ? "active" : ""}`}
    onClick={() => {
      handleSelect(name);
    }}
    children={name}
  />
);

import React from "react";
import { Element } from "../index";

export const MenuCategory = ({ heading, subheading, children }) => {
  return (
    <div className="category">
      {!heading.hidden && (
        <h3 className="category-heading">
          <Element value={heading.content} />
        </h3>
      )}
      {!subheading.hidden && (
        <h6 className="category-subheading">
          <Element value={subheading.content} />
        </h6>
      )}
      {children}
    </div>
  );
};

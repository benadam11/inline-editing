import React from "react";
import { Element } from "../index";

export const MenuItem = ({ heading, subheading, price }) => {
  return (
    <div className="item">
      <div className="item-row">
        {!heading.hidden && (
          <h3 className="item-heading">
            <Element value={heading.content} />
          </h3>
        )}
        {!price.hidden && (
          <h4 className="item-price">
            <Element value={price.content} />
          </h4>
        )}
      </div>
      {!subheading.hidden && (
        <h4 className="item-description">
          <Element value={subheading.content} />
        </h4>
      )}
    </div>
  );
};

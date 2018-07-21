import React from "react";
import "./UtilityBar.css";

export * from "./AddButton";
export * from "./UtilityBarItem";

export const UtilityBar = ({ type = "section", actions = [] }) => {
  return actions.length ? <div className="utility-bar">{actions}</div> : null;
};

import React from "react";
import { ContextMenuToggle } from "./ContextMenuToggle";
import "./UtilityBar.css";

export * from "./AddButton";
export * from "./UtilityBarItem";
export * from "./FieldToggleItem";
export * from "./LayoutChanger";

export const UtilityBar = ({
  type = "section",
  actions = [],
  fields = [],
  layout
}) => {
  return Boolean(actions.length || fields.length) ? (
    <div className="utility-bar-wrapper">
      <div className="utility-bar">
        {actions}
        {Boolean(fields.length) && (
          <ContextMenuToggle fields={fields} layout={layout} />
        )}
      </div>
    </div>
  ) : null;
};

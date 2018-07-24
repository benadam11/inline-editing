import React from "react";
import { UtilityBar } from "../UtilityBar/";
import { Field } from "./Field";
import { Consumer } from "./HoverContext";

export class GroupItem extends React.Component {
  render() {
    return (
      <Field>
        <Consumer>
          {({ isSelected, isHovered }) => {
            return (
              <div className="group-item" data-type="GroupItem">
                {isSelected /*|| isHovered*/ && (
                  <UtilityBar type="groupItem" actions={this.props.actions} />
                )}
                {this.props.children}
              </div>
            );
          }}
        </Consumer>
      </Field>
    );
  }
}

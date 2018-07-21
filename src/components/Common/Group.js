import React from "react";
import { UtilityBar } from "../UtilityBar/";
import { Field } from "./Field";
import { Consumer } from "./HoverContext";

export class Group extends React.Component {
  render() {
    return (
      <Field>
        <Consumer>
          {context => {
            return (
              <div className="group" data-type="Group">
                {context.isSelected && <UtilityBar type="group" />}
                {this.props.children}
              </div>
            );
          }}
        </Consumer>
      </Field>
    );
  }
}

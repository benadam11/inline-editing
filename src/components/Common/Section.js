import React from "react";
import { Field } from "./Field";
import { Consumer } from "./HoverContext";
import { UtilityBar } from "../UtilityBar/";

export class Section extends React.Component {
  render() {
    return (
      <Field>
        <Consumer>
          {context => {
            return (
              <div className="section" data-type="Section">
                {context.isSelected && (
                  <UtilityBar actions={this.props.actions} />
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

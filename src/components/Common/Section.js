import React from "react";
import { Field } from "./Field";
import { Provider, Consumer } from "./HoverContext";
import { UtilityBar } from "../UtilityBar/";

export class Section extends React.Component {
  render() {
    return (
      <Field>
        <Consumer>
          {context => {
            const { isSelected, selectedSection } = context;
            const isEditing = selectedSection === this.el;
            return (
              <Provider value={{ ...context, isEditing }}>
                <div
                  className="section"
                  data-type="Section"
                  ref={el => (this.el = el)}
                >
                  {isSelected && <UtilityBar actions={this.props.actions} />}
                  {this.props.children}
                </div>
              </Provider>
            );
          }}
        </Consumer>
      </Field>
    );
  }
}

import React from "react";
import ReactTooltip from "react-tooltip";
import { Field } from "./Field";
import { Provider, Consumer } from "./HoverContext";
import { UtilityBar, AddButton } from "../UtilityBar/";

export class Section extends React.Component {
  render() {
    const { index } = this.props;
    return (
      <Field>
        <Consumer>
          {context => {
            const { selectedSection, isHovered } = context;
            const isEditing = selectedSection === this.el;
            return (
              <Provider value={{ ...context, isEditing }}>
                <div
                  className="section"
                  data-type="Section"
                  ref={el => (this.el = el)}
                >
                  {Boolean(index < 1) && (
                    <div
                      className="add-button-wrapper top"
                      data-tip="Add section"
                    >
                      <AddButton addItem={this.props.addSection} />
                    </div>
                  )}
                  {(isHovered || isEditing) && (
                    <UtilityBar actions={this.props.actions} />
                  )}
                  {this.props.children}
                  {Boolean(index + 1) && (
                    <div
                      className="add-button-wrapper bottom"
                      data-tip="Add section"
                    >
                      <AddButton addItem={this.props.addSection} />
                    </div>
                  )}
                </div>
                <ReactTooltip effect="solid" />
              </Provider>
            );
          }}
        </Consumer>
      </Field>
    );
  }
}

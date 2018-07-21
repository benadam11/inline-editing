import React from "react";
import { Provider, Consumer } from "./HoverContext";
import cx from "classnames";

export class Field extends React.Component {
  render() {
    return (
      <Consumer>
        {context => {
          const { field, selectedField, onMouseOver, onMouseLeave } = context;
          const selected = selectedField === this.field;
          const hover = selectedField !== this.field && field === this.field;
          const classNames = cx("field", { selected, hover });

          return (
            <Provider value={{ ...context, isSelected: !!selected }}>
              <div
                ref={ref => (this.field = ref)}
                className={classNames}
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
                {...this.props}
              />
            </Provider>
          );
        }}
      </Consumer>
    );
  }
}

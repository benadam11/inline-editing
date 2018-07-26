import React from "react";
import uuid from "uuid";
import { Element, Section, FieldToggleItem } from "../index";
import "./Content.css";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Ut venenatis tellus in metus vulputate eu. Malesuada proin libero nunc consequat interdum varius sit.";

const initialData = {
  heading: {
    content: "Welcome",
    hidden: false
  },
  text: {
    content,
    hidden: false
  },
  CTA: {
    content: "Our Services",
    hidden: true
  }
};

export class ContentSection extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      data: initialData
    };
  }

  handleToggle = key => {
    this.setState(({ data }) => {
      data[key].hidden = !data[key].hidden;
      return { data };
    });
  };

  render() {
    const { heading, text, CTA } = this.state.data;
    return (
      <Section
        actions={this.props.actions}
        fields={Object.keys(this.state.data).map(key => (
          <FieldToggleItem
            key={key}
            field={key}
            hidden={this.state.data[key].hidden}
            handleToggle={this.handleToggle}
          />
        ))}
      >
        <div className="content-section">
          <div className="container">
            {!heading.hidden && (
              <h3>
                <Element value={heading.content} />
              </h3>
            )}
            {!text.hidden && <Element value={text.content} />}
            {!CTA.hidden && (
              <button className="cta-button">
                <Element value={CTA.content} />
              </button>
            )}
          </div>
        </div>
      </Section>
    );
  }
}

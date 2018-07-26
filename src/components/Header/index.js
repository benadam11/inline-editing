import React from "react";
import { FieldToggleItem } from "../UtilityBar/";
import { Element, Section } from "../index";
import "./Header.css";

export class HeaderSection extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      data: {
        heading: {
          content: "Welcome to our site",
          hidden: false
        },
        subheading: {
          content: "We have the best business",
          hidden: false
        }
      }
    };
  }

  handleToggle = key => {
    this.setState(({ data }) => {
      data[key].hidden = !data[key].hidden;
      return data;
    });
  };
  render() {
    const { data } = this.state;
    const { heading, subheading } = data;
    return (
      <Section
        fields={Object.keys(data).map(key => {
          return (
            <FieldToggleItem
              key={key}
              field={key}
              hidden={data[key].hidden}
              handleToggle={this.handleToggle}
            />
          );
        })}
      >
        <header className="header">
          <div className="container">
            <nav />
            <div className="hero-content ">
              {!heading.hidden && (
                <h1>
                  <Element Toolbar={() => null} value={heading.content} />
                </h1>
              )}
              {!subheading.hidden && (
                <h3>
                  <Element value={subheading.content} />
                </h3>
              )}
            </div>
          </div>
        </header>
      </Section>
    );
  }
}

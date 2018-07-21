import React from "react";
import { Element, Section } from "../index";
import "./Header.css";

export class HeaderSection extends React.Component {
  render() {
    return (
      <Section top>
        <header className="header">
          <div className="container">
            <nav />
            <div className="hero-content ">
              <h1>
                <Element Toolbar={() => null} value="Welcome to our site" />
              </h1>
              <h3>
                <Element value="We have the best business" />
              </h3>
            </div>
          </div>
        </header>
      </Section>
    );
  }
}

import React from "react";
import { Element, Section } from "../index";
import "./Footer.css";

export class FooterSection extends React.Component {
  render() {
    const date = new Date().getFullYear();
    return (
      <Section>
        <footer className="footer">
          <div className="container">
            <div className="content">
              <h3>
                <Element value="Powered by GoDaddy" />
              </h3>
              <h6>
                <Element value="Copyright Ben Adam" />
                <span className="date">{date}</span>
              </h6>
            </div>
          </div>
        </footer>
      </Section>
    );
  }
}

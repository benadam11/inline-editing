import React from "react";
import * as actions from "../actions/";
import { AddButton, UtilityBarItem } from "../UtilityBar/";
import { Consumer } from "../Common/HoverContext";
import { GroupItem, Element } from "../index";
import { AboutCard } from "./AboutCard";
import "./AboutSection.css";

const data = Array.from({ length: 3 }).map(item => actions.newItem());

export class AboutSection extends React.Component {
  static defaultProps = {
    maxItems: 6
  };

  constructor() {
    super(...arguments);
    this.state = {
      data
    };
  }

  updateImage = id => {
    this.setState(actions.updateImage(id));
  };

  addItem = () => {
    this.setState(actions.addItem);
  };

  removeItem = id => {
    if (window.confirm("Are you sure you want to delete this group?")) {
      this.setState(actions.removeItem(id));
    }
  };

  moveItemLeft = id => {
    this.setState(actions.moveLeft(id));
  };

  moveItemRight = id => {
    this.setState(actions.moveRight(id));
  };

  render() {
    const { data } = this.state;

    return (
      <Consumer>
        {({ isEditing }) => {
          const showGhostItem = this.props.maxItems > data.length && isEditing;
          return (
            <div className="about-section">
              <div className="container">
                <h2>
                  <Element value="Gear & Guides" />
                </h2>
                <div className="about-items">
                  {data.map((item, i) => {
                    return (
                      <GroupItem
                        key={item.id}
                        actions={[
                          <UtilityBarItem
                            key="img"
                            icon="img"
                            action={this.updateImage}
                            itemId={item.id}
                          />,
                          <UtilityBarItem
                            key="left"
                            disabled={i < 1}
                            icon="left"
                            action={this.moveItemLeft}
                            itemId={item.id}
                          />,
                          <UtilityBarItem
                            key="right"
                            disabled={i === data.length - 1}
                            icon="right"
                            action={this.moveItemRight}
                            itemId={item.id}
                          />,
                          <UtilityBarItem
                            key="trash"
                            icon="trash"
                            action={this.removeItem}
                            itemId={item.id}
                          />
                        ]}
                      >
                        <AboutCard {...item} />
                      </GroupItem>
                    );
                  })}
                  {showGhostItem && (
                    <div className="ghost-item about-card field">
                      <div data-type="ghost">
                        <AddButton addItem={this.addItem} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

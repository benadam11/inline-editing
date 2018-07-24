import React from "react";
import ReactTooltip from "react-tooltip";
import uuid from "uuid";
import { Consumer } from "../Common/HoverContext";
import { Element, Group, GroupItem } from "../index";
import { AddButton, UtilityBarItem } from "../UtilityBar/";
import * as actions from "./actions";
import "./Menu.css";

const initialData = {
  heading: "Menu / Price List",
  subheading: "Add a footnote about this group",
  categories: [
    {
      categoryId: uuid(),
      heading: "First Category",
      subheading: "Add a description about this category",
      items: [
        {
          id: uuid(),
          heading: "First Item",
          subheading: "Add a description about this item",
          price: "12"
        },
        {
          id: uuid(),
          heading: "Second Item",
          subheading: "Add a description about this item",
          price: "15"
        }
      ]
    },
    {
      categoryId: uuid(),
      heading: "Second Category",
      subheading: "Add a description about this category",
      items: [
        {
          id: uuid(),
          heading: "First Item",
          subheading: "Add a description about this item",
          price: "12"
        },
        {
          id: uuid(),
          heading: "Second Item",
          subheading: "Add a description about this item",
          price: "15"
        }
      ]
    }
  ]
};

export class Menu extends React.Component {
  static defaultProps = {
    maxItems: 6
  };

  constructor() {
    super(...arguments);
    this.state = {
      data: initialData
    };
  }

  addCategory = () => {
    this.setState(actions.addCategory);
  };

  removeCategory = id => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      this.setState(actions.removeCategory(id));
    }
  };

  moveCategoryUp = id => {
    this.setState(actions.moveCategoryLeft(id));
  };

  moveCategoryDown = id => {
    this.setState(actions.moveCategoryRight(id));
  };

  addItem = id => {
    this.setState(actions.addItem(id));
  };

  removeItem = id => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      this.setState(actions.removeItem(id));
    }
  };

  moveItemUp = id => {
    this.setState(actions.moveItemLeft(id));
  };

  moveItemDown = id => {
    this.setState(actions.moveItemRight(id));
  };

  render() {
    const { data } = this.state;
    return (
      <Consumer>
        {({ isEditing }) => {
          const showAddCategory =
            this.props.maxItems > data.categories.length && isEditing;
          return (
            <div className="menu">
              <div className="container inset">
                <h2>
                  <Element value={data.heading} />
                </h2>
                {data.categories.map(
                  ({ heading, subheading, items, categoryId }, i, arr) => {
                    const showGhostItem =
                      this.props.maxItems > arr.length && isEditing;
                    return (
                      <Group
                        key={categoryId}
                        actions={[
                          <UtilityBarItem
                            key="up1"
                            icon="up"
                            disabled={i < 1}
                            action={this.moveCategoryUp}
                            itemId={categoryId}
                          />,
                          <UtilityBarItem
                            disabled={i === arr.length - 1}
                            key="down1"
                            icon="down"
                            action={this.moveCategoryDown}
                            itemId={categoryId}
                          />,
                          <UtilityBarItem
                            key="trash1"
                            icon="trash"
                            action={this.removeCategory}
                            itemId={categoryId}
                          />
                        ]}
                      >
                        <div className="category">
                          <h3 className="category-heading">
                            <Element value={heading} />
                          </h3>
                          <h6 className="category-subheading">
                            <Element value={subheading} />
                          </h6>
                          {items.map(
                            ({ heading, subheading, price, id }, i) => {
                              return (
                                <GroupItem
                                  key={id}
                                  actions={[
                                    <UtilityBarItem
                                      key="up2"
                                      icon="up"
                                      disabled={i < 1}
                                      action={this.moveItemUp}
                                      itemId={id}
                                    />,
                                    <UtilityBarItem
                                      key="down2"
                                      icon="down"
                                      disabled={i === items.length - 1}
                                      action={this.moveItemDown}
                                      itemId={id}
                                    />,
                                    <UtilityBarItem
                                      key="trash2"
                                      icon="trash"
                                      action={this.removeItem}
                                      itemId={id}
                                    />
                                  ]}
                                >
                                  <div className="item">
                                    <div className="item-row">
                                      <h3 className="item-heading">
                                        <Element value={heading} />
                                      </h3>
                                      <h4 className="item-price">
                                        <Element value={price} />
                                      </h4>
                                    </div>
                                    <h4 className="item-description">
                                      <Element value={subheading} />
                                    </h4>
                                  </div>
                                </GroupItem>
                              );
                            }
                          )}
                          {showGhostItem && (
                            <React.Fragment>
                              <div
                                className="ghost-item field"
                                data-tip="Add item"
                                data-for="add-item"
                              >
                                <div data-type="ghost">
                                  <AddButton
                                    addItem={this.addItem}
                                    id={categoryId}
                                  />
                                </div>
                              </div>
                              <ReactTooltip
                                id="add-item"
                                effect="solid"
                                place="left"
                              />
                            </React.Fragment>
                          )}
                        </div>
                      </Group>
                    );
                  }
                )}
                {showAddCategory && (
                  <React.Fragment>
                    <div className="ghost-item field" data-tip="Add category">
                      <div data-type="ghost">
                        <AddButton addItem={this.addCategory} />
                      </div>
                    </div>
                    <ReactTooltip effect="solid" />
                  </React.Fragment>
                )}
                <h5>
                  <Element value={data.subheading} />
                </h5>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

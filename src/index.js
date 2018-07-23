import React from "react";
import ReactDOM from "react-dom";
import uuid from "uuid";
import * as actions from "./components/actions";
import {
  HoverProvider,
  HeaderSection,
  AboutSection,
  ContentSection,
  FooterSection,
  Menu,
  Section,
  UtilityBarItem
} from "./components";
import "./styles.css";

const data = [
  {
    id: uuid(),
    component: <ContentSection />
  },
  {
    id: uuid(),
    component: <Menu />
  },
  {
    id: uuid(),
    component: <AboutSection />
  },
  {
    id: uuid(),
    component: <AboutSection />
  }
];

class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      data
    };
  }

  removeItem = id => {
    if (window.confirm("Are you sure you want to delete this section?")) {
      this.setState(actions.removeItem(id));
    }
  };

  moveItemUp = id => {
    this.setState(actions.moveLeft(id));
  };

  moveItemDown = id => {
    this.setState(actions.moveRight(id));
  };

  render() {
    return (
      <HoverProvider>
        <div className="website">
          <HeaderSection />
          {this.state.data.map((item, i) => (
            <Section
              key={item.id}
              actions={[
                <UtilityBarItem
                  disabled={i < 1}
                  icon="up"
                  itemId={item.id}
                  key="up"
                  action={this.moveItemUp}
                />,
                <UtilityBarItem
                  disabled={i === this.state.data.length - 1}
                  icon="down"
                  itemId={item.id}
                  key="down"
                  action={this.moveItemDown}
                />,
                <UtilityBarItem
                  icon="trash"
                  itemId={item.id}
                  key="trash"
                  action={this.removeItem}
                />
              ]}
            >
              {item.component}
            </Section>
          ))}
          <FooterSection />
        </div>
      </HoverProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

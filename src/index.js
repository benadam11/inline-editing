import React from "react";
import ReactDOM from "react-dom";
import uuid from "uuid";
import * as actions from "./components/actions";
import animate, { delay, stop } from "./components/AddSection/animate";
import {
  HoverProvider,
  HeaderSection,
  AboutSection,
  ContentSection,
  FooterSection,
  Menu,
  Section,
  UtilityBarItem,
  AddSectionFlyout
} from "./components";
import "./styles.css";

const data = [
  {
    id: uuid(),
    component: <ContentSection />
  },
  {
    id: uuid(),
    component: <AboutSection />
  },
  {
    id: uuid(),
    component: <AboutSection />
  },
  {
    id: uuid(),
    component: <Menu />
  }
];

class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      data,
      showFlyout: false,
      selectedIndex: "Recommended"
    };
  }

  toggleFlyout = () => {
    this.resetAnimation();
    this.setState(state => ({ showFlyout: !state.showFlyout }));
    delay(300).then(this.animateIn);
  };

  handleSelect = selectedIndex => {
    this.resetAnimation();
    this.setState({ selectedIndex });
    delay(100).then(this.animateIn);
  };

  handleChange = ({ target }) => {
    this.resetAnimation();
    this.setState({ selectedIndex: target.value });
    delay(100).then(this.animateIn);
  };

  animateIn = () => {
    animate({
      elements: ".widget-preview-wrapper",
      easing: "in-out-cubic",
      duration: 800,
      delay: index => index * 120,
      opacity: [0, 1],
      transform: ["translateY(-40px)", "translateY(0px)"]
    });
  };

  resetAnimation = () => {
    document.querySelectorAll(".widget-preview-wrapper").forEach(el => {
      stop(el);
      el.style.opacity = 0;
    });
  };

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
    const { showFlyout, selectedIndex } = this.state;
    return (
      <div className={showFlyout ? "show-add-section" : ""}>
        <HoverProvider>
          <div className="website">
            <HeaderSection />
            {this.state.data.map((item, i) => (
              <Section
                addSection={this.toggleFlyout}
                index={i}
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

          <AddSectionFlyout
            toggleFlyout={this.toggleFlyout}
            handleSelect={this.handleSelect}
            handleChange={this.handleChange}
            selectedIndex={selectedIndex}
          />
        </HoverProvider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

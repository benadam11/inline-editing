import React from "react";
import { Provider } from "./HoverContext";

export class HoverProvider extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      field: null,
      selectedField: null,
      selectedType: "",
      onMouseOver: this.handleMouseOver,
      onMouseLeave: this.handleMouseLeave,
      isSelected: false
    };
  }

  componentDidMount() {
    document.addEventListener("click", this.handleSelection);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleSelection);
  }

  handleMouseOver = e => {
    const field = e.target.closest(".field");
    if (this.state.field !== field) {
      this.setState({ field });
    }
  };

  handleMouseLeave = e => {
    const field = e.target.closest(".field");
    if (this.state.field === field) {
      this.setState({ field: null });
    }
  };

  handleSelection = e => {
    const field = e.target.closest(".field");
    const selectedType = field && field.firstChild.dataset.type;
    this.setState({ selectedField: field, selectedType });
    if (selectedType === "Section") {
      field.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      field && field.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

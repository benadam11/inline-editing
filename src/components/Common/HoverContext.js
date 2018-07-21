import React from "react";
const HoverContext = React.createContext({
  field: null,
  selectedField: null,
  isSelected: false,
  selectedType: "",
  onMouseOver: () => {},
  onMouseLeave: () => {}
});

export const { Provider, Consumer } = HoverContext;

import React from 'react';
const HoverContext = React.createContext({
	field: null,
	selectedField: null,
	selectedSection: null,
	isEditing: false,
	isSelected: false,
	isHovered: false,
	onMouseOver: () => {},
	onMouseLeave: () => {}
});

export const { Provider, Consumer } = HoverContext;

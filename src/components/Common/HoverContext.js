import React from 'react';
const HoverContext = React.createContext({
	field: null,
	selectedField: null,
	isSelected: false,
	isHovered: false,
	danger: false,
	overlay: false,
	onMouseOver: () => {},
	onMouseLeave: () => {},
	toggleDangerOverlay: () => {},
	toggleOverlay: () => {}
});

export const { Provider, Consumer } = HoverContext;

import React from 'react';

export const ContextMenu = ({
	fields,
	layout,
	alignment,
	backgroundColor,
	style
}) => {
	return (
		<div className="dropdown-container" style={style}>
			{Boolean(fields) && (
				<div className="dropdown-group">
					<span className="dropdown-title">Fields</span>
					{fields}
				</div>
			)}
			{Boolean(layout) && (
				<div className="dropdown-group">
					<span className="dropdown-title">Layout</span>
					{layout}
				</div>
			)}
			{Boolean(alignment) && (
				<div className="dropdown-group">
					<span className="dropdown-title">Alignment</span>
					{alignment}
				</div>
			)}
			{Boolean(backgroundColor) && (
				<div className="dropdown-group">
					<span className="dropdown-title">Background Color</span>
					{backgroundColor}
				</div>
			)}
		</div>
	);
};

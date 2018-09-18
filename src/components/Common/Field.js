import React from 'react';
import { Provider, Consumer } from './HoverContext';

export class Field extends React.Component {
	render() {
		return (
			<Consumer>
				{context => {
					const { field, selectedField, onMouseOver, onMouseLeave } = context;
					const isSelected = selectedField === this.field;
					const isHovered =
						/*selectedField !== this.field &&*/ field === this.field;
					const newContext = { ...context, isSelected, isHovered };
					return (
						<Provider value={newContext}>
							<div
								ref={ref => (this.field = ref)}
								className="field"
								onMouseOver={onMouseOver}
								onMouseLeave={onMouseLeave}
								{...this.props}
							/>
						</Provider>
					);
				}}
			</Consumer>
		);
	}
}

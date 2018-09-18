import React from 'react';
import { Field, Base } from './';
import { Consumer } from './HoverContext';

export class Group extends React.Component {
	render() {
		return (
			<Field>
				<Consumer>
					{({ isSelected, isHovered, overlay, danger }) => {
						return (
							<Base
								actions={this.props.actions}
								className="group"
								danger={danger}
								overlay={overlay}
								isHovered={isHovered}
								isSelected={isSelected}>
								{this.props.children}
							</Base>
						);
					}}
				</Consumer>
			</Field>
		);
	}
}

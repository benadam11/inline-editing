import React from 'react';
import { Field, Base } from './';
import { Consumer } from './HoverContext';

export class GroupItem extends React.Component {
	render() {
		return (
			<Field>
				<Consumer>
					{({ isSelected, isHovered, overlay, danger }) => {
						return (
							<Base
								className="group-item"
								actions={this.props.actions}
								overlay={overlay}
								danger={danger}
								isSelected={isSelected}
								isHovered={isHovered}>
								{this.props.children}
							</Base>
						);
					}}
				</Consumer>
			</Field>
		);
	}
}

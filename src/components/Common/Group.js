import React from 'react';
import { UtilityBar } from '../UtilityBar/';
import { Field } from './Field';
import { AnimateIn } from './AnimateIn';
import { Consumer } from './HoverContext';

export class Group extends React.Component {
	render() {
		return (
			<Field>
				<Consumer>
					{({ isSelected, isHovered }) => {
						return (
							<div className="group" data-type="Group">
								{isSelected /*|| isHovered*/ && (
									<UtilityBar
										type="group"
										actions={this.props.actions}
										fields={this.props.fields}
									/>
								)}
								{this.props.children}
							</div>
						);
					}}
				</Consumer>
			</Field>
		);
	}
}

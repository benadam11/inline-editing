import React from 'react';
import uuid from 'uuid';
import ReactTooltip from 'react-tooltip';
import { Field, Base } from './';
import { Consumer } from './HoverContext';
import { AddButton } from '../UtilityBar/';
const id1 = uuid();
const id2 = uuid();

export class Section extends React.Component {
	render() {
		const { index } = this.props;
		return (
			<Field>
				<Consumer>
					{({ isHovered, isSelected, overlay, danger }) => {
						return (
							<Base
								className="section"
								actions={this.props.actions}
								isHovered={isHovered}
								overlay={overlay}
								danger={danger}
								isSelected={isSelected}>
								{Boolean(index < 1) &&
									!danger &&
									!overlay && (
										<div
											className="add-button-wrapper top"
											data-for={id1}
											data-tip="Add Section">
											<AddButton addItem={this.props.addSection} />
										</div>
									)}
								{this.props.children}
								{Boolean(index + 1) &&
									!danger &&
									!overlay && (
										<div
											className="add-button-wrapper bottom"
											data-for={id2}
											data-tip="Add section">
											<AddButton addItem={this.props.addSection} />
										</div>
									)}
								<ReactTooltip id={id1} effect="solid" />
								<ReactTooltip id={id2} effect="solid" />
							</Base>
						);
					}}
				</Consumer>
			</Field>
		);
	}
}

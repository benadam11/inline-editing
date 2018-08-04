import React from 'react';
import * as actions from './actions';
import { UtilityBarItem, FieldToggleItem } from '../UtilityBar/';
import { Consumer } from '../Common/HoverContext';
import { Item, Group, Element, Section, GhostItem } from '../index';
import { AboutCard } from './AboutCard';
import './AboutSection.css';

const items = Array.from({ length: 3 }).map(item => actions.newItem());
const initialData = {
	heading: {
		content: 'Gear & Guides',
		hidden: false
	},
	items
};

export class AboutSection extends React.Component {
	static defaultProps = {
		maxItems: 6
	};

	constructor() {
		super(...arguments);
		this.state = {
			data: initialData
		};
	}

	updateImage = id => {
		this.setState(actions.updateImage(id));
	};

	addItem = () => {
		this.setState(actions.addItem);
	};

	removeItem = id => {
		if (window.confirm('Are you sure you want to delete this group?')) {
			this.setState(actions.removeItem(id));
		}
	};

	moveItemLeft = id => {
		this.setState(actions.moveLeft(id));
	};

	moveItemRight = id => {
		this.setState(actions.moveRight(id));
	};

	toggleGroup = (key, id) => {
		this.setState(actions.toggleGroupField(key, id));
	};

	toggleField = key => {
		this.setState(actions.toggleField(key));
	};

	render() {
		const { data } = this.state;

		return (
			<Section
				layout="about"
				actions={this.props.actions}
				fields={[
					<FieldToggleItem
						key="headding-toggle"
						field="heading"
						hidden={data.heading.hidden}
						handleToggle={this.toggleField}
					/>
				]}
				{...this.props}>
				<Consumer>
					{({ isEditing, isHovered }) => {
						const showGhostItem =
							this.props.maxItems > data.items.length &&
							isEditing /*|| isHovered*/;
						return (
							<div className="about-section">
								<div className="container">
									{!data.heading.hidden && (
										<h2>
											<Item>
												<Element
													value="Gear & Guides"
													placeholder="Enter a heading"
												/>
											</Item>
										</h2>
									)}
									<div className="about-items">
										{data.items.map(({ id, ...item }, i) => {
											return (
												<Group
													key={id}
													fields={Object.keys(item).map(key => {
														return (
															<FieldToggleItem
																key={key}
																id={id}
																field={key}
																hidden={item[key].hidden}
																handleToggle={this.toggleGroup}
															/>
														);
													})}
													actions={[
														<UtilityBarItem
															key="img"
															icon="img"
															action={this.updateImage}
															itemId={id}
														/>,
														<UtilityBarItem
															key="left"
															disabled={i < 1}
															icon="left"
															action={this.moveItemLeft}
															itemId={id}
														/>,
														<UtilityBarItem
															key="right"
															disabled={i === data.items.length - 1}
															icon="right"
															action={this.moveItemRight}
															itemId={id}
														/>,
														<UtilityBarItem
															key="trash"
															icon="trash"
															action={this.removeItem}
															itemId={id}
														/>
													]}>
													<AboutCard {...item} />
												</Group>
											);
										})}
										<GhostItem
											card
											label="Add Card"
											show={showGhostItem}
											action={this.addItem}
										/>
									</div>
								</div>
							</div>
						);
					}}
				</Consumer>
			</Section>
		);
	}
}

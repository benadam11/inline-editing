import React from 'react';
import ReactTooltip from 'react-tooltip';
import * as actions from './actions';
import { AddButton, UtilityBarItem, FieldToggleItem } from '../UtilityBar/';
import { Consumer } from '../Common/HoverContext';
import { GroupItem, Element, Section } from '../index';
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
				]}>
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
											<Element
												value="Gear & Guides"
												placeholder="Enter a heading"
											/>
										</h2>
									)}
									<div className="about-items">
										{data.items.map(({ id, ...item }, i) => {
											return (
												<GroupItem
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
												</GroupItem>
											);
										})}
										{showGhostItem && (
											<React.Fragment>
												<div className="field" data-tip="Add Group">
													<div
														data-type="ghost"
														className="ghost-item about-card">
														<AddButton addItem={this.addItem} />
													</div>
												</div>
												<ReactTooltip effect="solid" />
											</React.Fragment>
										)}
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

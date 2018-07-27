import React from 'react';
import ReactTooltip from 'react-tooltip';
import uuid from 'uuid';
import { Consumer } from '../Common/HoverContext';
import { Element, Group, GroupItem, Section } from '../index';
import { AddButton, UtilityBarItem, FieldToggleItem } from '../UtilityBar/';
import { MenuItem } from './MenuItem';
import { MenuCategory } from './MenuCategory';
import * as actions from './actions';
import './Menu.css';

const initialData = {
	heading: {
		content: 'Menu / Price List',
		hidden: false
	},
	subheading: {
		content: 'Add a footnote about this group',
		hidden: false
	},
	categories: [
		{
			categoryId: uuid(),
			heading: {
				content: 'First Category',
				hidden: false
			},
			subheading: {
				content: 'Add a description about this category',
				hidden: false
			},
			items: [
				{
					id: uuid(),
					heading: {
						content: 'First Item',
						hidden: false
					},
					subheading: {
						content: 'Add a description about this item',
						hidden: false
					},
					price: {
						content: '12',
						hidden: false
					}
				},
				{
					id: uuid(),
					heading: {
						content: 'Second Item',
						hidden: false
					},
					subheading: {
						content: 'Add a description about this item',
						hidden: false
					},
					price: {
						content: '12',
						hidden: false
					}
				}
			]
		}
	]
};

export class Menu extends React.Component {
	static defaultProps = {
		maxItems: 6
	};

	constructor() {
		super(...arguments);
		this.state = {
			data: initialData
		};
	}

	addCategory = () => {
		this.setState(actions.addCategory);
	};

	removeCategory = id => {
		if (window.confirm('Are you sure you want to delete this category?')) {
			this.setState(actions.removeCategory(id));
		}
	};

	moveCategoryUp = id => {
		this.setState(actions.moveCategoryLeft(id));
	};

	moveCategoryDown = id => {
		this.setState(actions.moveCategoryRight(id));
	};

	addItem = id => {
		this.setState(actions.addItem(id));
	};

	removeItem = id => {
		if (window.confirm('Are you sure you want to delete this item?')) {
			this.setState(actions.removeItem(id));
		}
	};

	moveItemUp = id => {
		this.setState(actions.moveItemLeft(id));
	};

	moveItemDown = id => {
		this.setState(actions.moveItemRight(id));
	};

	toggleSectionField = key => {
		this.setState(actions.toggleField(key));
	};

	toggleCategoryField = (key, id) => {
		this.setState(actions.toggleCategoryField(key, id));
	};

	toggleItemField = (key, id) => {
		this.setState(actions.toggleItemField(key, id));
	};

	render() {
		const { data } = this.state;
		const { categories, ...fields } = data;
		return (
			<Section
				actions={this.props.actions}
				fields={Object.keys(fields).map(key => {
					return (
						<FieldToggleItem
							key={key}
							field={key}
							hidden={data[key].hidden}
							handleToggle={this.toggleSectionField}
						/>
					);
				})}>
				<Consumer>
					{({ isEditing, isHovered }) => {
						const showAddCategory =
							this.props.maxItems > data.categories.length &&
							isEditing /*|| isHovered*/;
						return (
							<div className="menu">
								<div className="container inset">
									{!data.heading.hidden && (
										<h2>
											<Element
												value={data.heading.content}
												placeholder="Enter a section heading"
											/>
										</h2>
									)}
									{categories.map(
										({ items, categoryId, ...fields }, i, arr) => {
											const { heading, subheading } = fields;
											const showGhostItem =
												this.props.maxItems > arr.length &&
												isEditing /*|| isHovered*/;
											return (
												<Group
													key={categoryId}
													fields={Object.keys(fields).map(key => {
														return (
															<FieldToggleItem
																id={categoryId}
																key={key}
																field={key}
																hidden={fields[key].hidden}
																handleToggle={this.toggleCategoryField}
															/>
														);
													})}
													actions={[
														<UtilityBarItem
															key="up1"
															icon="up"
															disabled={i < 1}
															action={this.moveCategoryUp}
															itemId={categoryId}
														/>,
														<UtilityBarItem
															disabled={i === arr.length - 1}
															key="down1"
															icon="down"
															action={this.moveCategoryDown}
															itemId={categoryId}
														/>,
														<UtilityBarItem
															key="trash1"
															icon="trash"
															action={this.removeCategory}
															itemId={categoryId}
														/>
													]}>
													<MenuCategory
														heading={heading}
														subheading={subheading}>
														{items.map(({ id, ...fields }, i) => {
															const { heading, subheading, price } = fields;
															return (
																<GroupItem
																	key={id}
																	fields={Object.keys(fields).map(key => {
																		return (
																			<FieldToggleItem
																				id={id}
																				key={key}
																				field={key}
																				hidden={fields[key].hidden}
																				handleToggle={this.toggleItemField}
																			/>
																		);
																	})}
																	actions={[
																		<UtilityBarItem
																			key="up2"
																			icon="up"
																			disabled={i < 1}
																			action={this.moveItemUp}
																			itemId={id}
																		/>,
																		<UtilityBarItem
																			key="down2"
																			icon="down"
																			disabled={i === items.length - 1}
																			action={this.moveItemDown}
																			itemId={id}
																		/>,
																		<UtilityBarItem
																			key="trash2"
																			icon="trash"
																			action={this.removeItem}
																			itemId={id}
																		/>
																	]}>
																	<MenuItem
																		heading={heading}
																		subheading={subheading}
																		price={price}
																	/>
																</GroupItem>
															);
														})}
														{showGhostItem && (
															<React.Fragment>
																<div
																	className="ghost-item field"
																	data-tip="Add item"
																	data-for="add-item">
																	<div data-type="ghost">
																		<AddButton
																			addItem={this.addItem}
																			id={categoryId}
																		/>
																	</div>
																</div>
																<ReactTooltip
																	id="add-item"
																	effect="solid"
																	place="left"
																/>
															</React.Fragment>
														)}
													</MenuCategory>
												</Group>
											);
										}
									)}
									{showAddCategory && (
										<React.Fragment>
											<div className="ghost-item field" data-tip="Add category">
												<div data-type="ghost">
													<AddButton addItem={this.addCategory} />
												</div>
											</div>
											<ReactTooltip effect="solid" />
										</React.Fragment>
									)}
									{!data.subheading.hidden && (
										<h5>
											<Element
												value={data.subheading.content}
												placeholder="Enter a footnote"
											/>
										</h5>
									)}
								</div>
							</div>
						);
					}}
				</Consumer>
			</Section>
		);
	}
}

import React from 'react';
import initialData from './data';
import { Element, Group, GroupItem, Section } from '../index';
import { UtilityBarItem, FieldToggleItem } from '../UtilityBar/';
import { MenuItem } from './MenuItem';
import { MenuCategory } from './MenuCategory';
import * as actions from './actions';
import './Menu.css';

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

	duplicateCategory = i => {
		console.log('called');
		this.setState(actions.duplicateCategory(i));
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
				layout="menu"
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
				})}
				{...this.props}>
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
						{categories.map(({ items, categoryId, ...fields }, i, arr) => {
							const { heading, subheading } = fields;
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
											key="duplicate1"
											icon="duplicate"
											message="Duplicate Category"
											action={this.duplicateCategory}
											itemId={i}
										/>,
										<UtilityBarItem
											key="up1"
											icon="up"
											message="Move Category Up"
											disabled={i < 1}
											action={this.moveCategoryUp}
											itemId={categoryId}
										/>,
										<UtilityBarItem
											disabled={i === arr.length - 1}
											key="down1"
											icon="down"
											message="Move Category Down"
											action={this.moveCategoryDown}
											itemId={categoryId}
										/>,
										<UtilityBarItem
											key="trash1"
											icon="trash"
											message="Delete Category"
											action={this.removeCategory}
											itemId={categoryId}
										/>
									]}>
									<MenuCategory heading={heading} subheading={subheading}>
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
															message="Move Item Up"
															disabled={i < 1}
															action={this.moveItemUp}
															itemId={id}
														/>,
														<UtilityBarItem
															key="down2"
															icon="down"
															message="Move Item Down"
															disabled={i === items.length - 1}
															action={this.moveItemDown}
															itemId={id}
														/>,
														<UtilityBarItem
															key="trash2"
															icon="trash"
															message="Delete Item"
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
									</MenuCategory>
								</Group>
							);
						})}

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
			</Section>
		);
	}
}

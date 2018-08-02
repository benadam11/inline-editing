import React from 'react';
import uuid from 'uuid';
import { FieldToggleItem, UtilityBarItem } from '../UtilityBar/';
import { Element, Section } from '../index';
import './Header.css';

export class HeaderSection extends React.Component {
	constructor() {
		super(...arguments);
		this.state = {
			data: {
				heading: {
					content: 'Welcome to our site',
					hidden: false
				},
				subheading: {
					content: 'We have the best business',
					hidden: false
				},
				backgroundImage: {
					url: `https://source.unsplash.com/random/${uuid()}`,
					hidden: false
				}
			}
		};
	}

	updateImage = id => {
		this.setState(({ data }) => {
			data.backgroundImage.url = `https://source.unsplash.com/random/${uuid()}`;
			return { data };
		});
	};

	handleToggle = key => {
		this.setState(({ data }) => {
			data[key].hidden = !data[key].hidden;
			return data;
		});
	};

	render() {
		const { data } = this.state;
		const {
			backgroundImage: { url },
			...fields
		} = data;
		const backgroundImage = `url(${url})`;
		return (
			<Section
				layout="header"
				actions={[
					<UtilityBarItem key="img" icon="img" action={this.updateImage} />
				]}
				fields={Object.keys(fields).map(key => {
					return (
						<FieldToggleItem
							key={key}
							field={key}
							hidden={fields[key].hidden}
							handleToggle={this.handleToggle}
						/>
					);
				})}>
				<header className="header" style={{ backgroundImage }}>
					<div className="hero-content">
						<div className="container">
							{!fields.heading.hidden && (
								<h1>
									<Element
										Toolbar={() => null}
										value={fields.heading.content}
										placeholder="Enter a heading"
									/>
								</h1>
							)}
							{!fields.subheading.hidden && (
								<h3>
									<Element
										value={fields.subheading.content}
										placeholder="Enter a subheading"
									/>
								</h3>
							)}
						</div>
					</div>
				</header>
			</Section>
		);
	}
}

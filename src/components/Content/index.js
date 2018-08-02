import React from 'react';
import { Element, Section, FieldToggleItem } from '../index';
import './Content.css';

const content =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Ut venenatis tellus in metus vulputate eu. Malesuada proin libero nunc consequat interdum varius sit.';

const initialData = {
	heading: {
		content: 'Welcome',
		hidden: false
	},
	text: {
		content,
		hidden: false
	},
	CTA: {
		content: 'Our Services',
		hidden: true
	}
};

export class ContentSection extends React.Component {
	constructor() {
		super(...arguments);
		this.state = {
			hasText: true,
			data: initialData
		};
	}

	handleTextChange = hasText => {
		this.setState({ hasText });
	};

	handleToggle = key => {
		this.setState(({ data }) => {
			data[key].hidden = !data[key].hidden;
			return { data };
		});
	};

	render() {
		const { heading, text, CTA } = this.state.data;
		return (
			<Section
				layout="content"
				hasText={this.state.hasText}
				actions={this.props.actions}
				fields={Object.keys(this.state.data).map(key => (
					<FieldToggleItem
						key={key}
						field={key}
						hidden={this.state.data[key].hidden}
						handleToggle={this.handleToggle}
					/>
				))}>
				<div className="content-section">
					<div className="container">
						{!heading.hidden && (
							<h3>
								<Element
									maxChars={14}
									handleChange={this.handleTextChange}
									value={heading.content}
									placeholder="Enter a heading"
								/>
							</h3>
						)}
						{!text.hidden && (
							<Element
								handleChange={this.handleTextChange}
								value={text.content}
								placeholder="Enter some text"
							/>
						)}
						{!CTA.hidden && (
							<button className="cta-button">
								<Element
									handleChange={this.handleTextChange}
									value={CTA.content}
									placeholder="Button"
								/>
							</button>
						)}
					</div>
				</div>
			</Section>
		);
	}
}

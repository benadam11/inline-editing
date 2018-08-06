import React from 'react';
import ReactTooltip from 'react-tooltip';
import { Field } from './Field';
import { Provider, Consumer } from './HoverContext';
import { UtilityBar, AddButton, LayoutChanger } from '../UtilityBar/';

export class Section extends React.Component {
	render() {
		const { index } = this.props;
		return (
			<Field>
				<Consumer>
					{context => {
						const { selectedSection } = context;
						const isEditing = selectedSection === this.el;
						return (
							<Provider value={{ ...context, isEditing }}>
								<section
									className={`${this.props.layout} section ${
										isEditing ? 'selected' : ''
									}`}
									data-type="Section"
									ref={el => (this.el = el)}>
									{Boolean(index < 1) && (
										<div
											className="add-button-wrapper top"
											data-tip="Add Section">
											<AddButton addItem={this.props.addSection} />
										</div>
									)}
									<UtilityBar
										hasText={this.props.hasText}
										actions={this.props.actions}
										fields={this.props.fields}
										// layout={<LayoutChanger layout={this.props.layout} />}
									/>
									{this.props.children}
									{Boolean(index + 1) && (
										<div
											className="add-button-wrapper bottom"
											data-tip="Add section">
											<AddButton addItem={this.props.addSection} />
										</div>
									)}
								</section>
								<ReactTooltip effect="solid" />
							</Provider>
						);
					}}
				</Consumer>
			</Field>
		);
	}
}

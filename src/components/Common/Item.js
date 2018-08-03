import React from 'react';
import { Field } from './Field';

export class Item extends React.Component {
	render() {
		return (
			<Field>
				<div className="item" data-type="Item">
					{this.props.children}
				</div>
			</Field>
		);
	}
}

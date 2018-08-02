import React from 'react';

export class Item extends React.Component {
	render() {
		return (
			<div className="item" data-type="Item">
				{this.props.children}
			</div>
		);
	}
}

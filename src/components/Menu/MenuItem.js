import React from 'react';
import { Element } from '../index';

export const MenuItem = ({ heading, subheading, price }) => {
	return (
		<div className="item">
			<div className="item-row">
				{!heading.hidden && (
					<h3 className="item-heading">
						<Element value={heading.content} placeholder="Enter a heading" />
					</h3>
				)}
				{!price.hidden && (
					<h4 className="item-price">
						<Element value={price.content} placeholder="$12" />
					</h4>
				)}
			</div>
			{!subheading.hidden && (
				<h4 className="item-description">
					<Element
						value={subheading.content}
						placeholder="Enter a description"
					/>
				</h4>
			)}
		</div>
	);
};

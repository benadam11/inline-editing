import React from 'react';
import { Element } from '../index';

export const MenuItem = ({ heading, subheading, price }) => {
	return (
		<div className="menu-item">
			<div className="menu-item-row">
				{!heading.hidden && (
					<h3 className="menu-item-heading">
						<Element value={heading.content} placeholder="Enter a heading" />
					</h3>
				)}
				{!price.hidden && (
					<h4 className="menu-item-price">
						<Element
							Toolbar={() => null}
							value={price.content}
							placeholder="$12"
						/>
					</h4>
				)}
			</div>
			{!subheading.hidden && (
				<h4 className="menu-item-description">
					<Element
						value={subheading.content}
						placeholder="Enter a description"
					/>
				</h4>
			)}
		</div>
	);
};

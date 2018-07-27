import React from 'react';
import { Element } from '../index';
import './AboutCard.css';

export const AboutCard = ({ img, heading, text }) => {
	return (
		<div className="about-card">
			{!img.hidden && <figure style={{ backgroundImage: `url(${img.url})` }} />}
			{(!heading.hidden || !text.hidden) && (
				<div className="content">
					{!heading.hidden && (
						<h4>
							<Element value={heading.content} placeholder="Enter a heading" />
						</h4>
					)}
					{!text.hidden && (
						<Element value={text.content} placeholder="Enter some text" />
					)}
				</div>
			)}
		</div>
	);
};

import React from 'react';
import header from '../../images/header.png';
import content from '../../images/content.png';
import about from '../../images/about.png';
import menu from '../../images/menu.png';

const imageMap = {
	header,
	content,
	about,
	menu
};

export const LayoutChanger = ({ layout }) => {
	return (
		<React.Fragment>
			<div className="layout-preview">
				{layout && <img src={imageMap[layout]} />}
			</div>
			<button disabled className="brand-btn">
				Change Layout
			</button>
		</React.Fragment>
	);
};

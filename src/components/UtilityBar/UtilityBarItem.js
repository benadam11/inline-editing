import React from 'react';
import uuid from 'uuid';
import ReactTooltip from 'react-tooltip';
import cx from 'classnames';
import {
	upIcon,
	downIcon,
	trashIcon,
	moreIcon,
	imgIcon,
	leftIcon,
	rightIcon,
	duplicate
} from '../Common/icons';

const iconMap = {
	up: upIcon,
	down: downIcon,
	trash: trashIcon,
	more: moreIcon,
	img: imgIcon,
	left: leftIcon,
	right: rightIcon,
	duplicate
};

const messageMap = {
	up: 'Move up',
	down: 'Move down',
	trash: 'Delete',
	more: 'More settings',
	img: 'Change image',
	left: 'Move left',
	right: 'Move right',
	duplicate: 'Add Another Item'
};

export const UtilityBarItem = ({
	type,
	icon,
	action,
	itemId = '',
	disabled = false,
	message = ''
}) => {
	const id = uuid();
	const handleClick = e => action && action(itemId, e);
	const classNames = cx(`utility-bar-item ${icon}`, {
		disabled
	});

	return (
		<React.Fragment>
			<div
				data-tip={message || messageMap[icon]}
				data-for={id}
				className={classNames}
				onClick={handleClick}>
				{iconMap[icon]}
			</div>
			<ReactTooltip id={id} effect="solid" />
		</React.Fragment>
	);
};

import React from 'react';
import { addIcon } from '../index';
import './AddButton.css';

export const AddButton = ({
	addItem = e => {
		console.log('clicked');
	},
	size = 'default',
	id = ''
}) => {
	return (
		<button className="add-button" onClick={() => addItem(id)}>
			{addIcon}
		</button>
	);
};

import React from 'react';
import uuid from 'uuid';
import cx from 'classnames';
import ReactTooltip from 'react-tooltip';
import { AddButton } from '../UtilityBar/AddButton';

export const GhostItem = ({
	show,
	label = 'Add Item',
	labelPosition = 'top',
	action,
	actionId,
	card = false
}) => {
	const classNames = cx('ghost-item', { card });
	const id = uuid();
	return (
		show && (
			<React.Fragment>
				<div
					data-for={id}
					className="field"
					data-tip={label}
					data-place={labelPosition}>
					<div data-type="ghost" className={classNames}>
						<AddButton addItem={action} id={actionId} />
					</div>
				</div>
				<ReactTooltip id={id} effect="solid" />
			</React.Fragment>
		)
	);
};

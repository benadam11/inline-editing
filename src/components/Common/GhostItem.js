import React from 'react';
import cx from 'classnames';
import ReactTooltip from 'react-tooltip';
import { AddButton } from '../UtilityBar/AddButton';

export const GhostItem = ({ show, action, actionId, card = false }) => {
	const classNames = cx('ghost-item', { card });
	return (
		show && (
			<React.Fragment>
				<div className="field" data-tip="Add Group">
					<div data-type="ghost" className={classNames}>
						<AddButton addItem={action} id={actionId} />
					</div>
				</div>
				<ReactTooltip effect="solid" />
			</React.Fragment>
		)
	);
};

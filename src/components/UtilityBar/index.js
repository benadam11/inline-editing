import React from 'react';
import cx from 'classnames';
import { ContextMenuToggle } from './ContextMenuToggle';
import './UtilityBar.css';

export * from './AddButton';
export * from './UtilityBarItem';
export * from './FieldToggleItem';
export * from './LayoutChanger';

export const UtilityBar = ({
	type = 'section',
	actions = [],
	fields = [],
	layout,
	hasText = true,
	vertical
}) => {
	const classNames = cx('utility-bar', { vertical });
	return Boolean(actions.length || fields.length) ? (
		<div className="utility-bar-wrapper">
			<div className={classNames}>
				{actions}
				{Boolean(fields.length) && (
					<ContextMenuToggle
						fields={fields}
						layout={layout}
						hasText={hasText}
					/>
				)}
			</div>
		</div>
	) : null;
};

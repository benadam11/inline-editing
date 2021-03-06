import React from 'react';

const random = (min, max) => Math.random() * (max - min) + min;
export const Preview = ({ toggleFlyout, label }) => {
	return (
		<div className="widget-preview-wrapper">
			<div
				className="widget-preview"
				style={{ height: `${random(60, 300)}px` }}
				onClick={() => {
					alert(
						'This is a prototype - but if this were the real thing you would have successfully added a section'
					);
					toggleFlyout();
				}}>
				<button>Add</button>
			</div>
			<label className="preview-label">Short Widget Description</label>
		</div>
	);
};

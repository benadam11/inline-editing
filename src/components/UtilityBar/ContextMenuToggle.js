import React from 'react';
import uuid from 'uuid';
import ReactTooltip from 'react-tooltip';
import { ContextMenu } from './ContextMenu';
import { moreIcon } from '../Common/icons';
import './ContextMenuToggle.css';

export class ContextMenuToggle extends React.Component {
	constructor() {
		super(...arguments);
		this.state = {
			showDropdown: false
		};
	}

	componentDidMount() {
		document.addEventListener('click', this.handleClick);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClick);
	}

	handleClick = e => {
		const dropdown = this.dropdown;
		const toggle = this.toggle;
		const inToggle = toggle && toggle.contains(e.target);
		const inDropdown = dropdown && dropdown.contains(e.target);
		if (this.state.showDropdown && !inDropdown && !inToggle) {
			this.toggleDropdown();
		}
	};

	toggleDropdown = () => {
		this.setState(prevState => ({ showDropdown: !prevState.showDropdown }));
	};

	render() {
		const { fields, layout } = this.props;
		const id = uuid();
		return (
			<React.Fragment>
				<div
					ref={el => (this.toggle = el)}
					className="utility-bar-item"
					onClick={this.toggleDropdown}
					data-tip="More Options"
					data-for={id}>
					{moreIcon}
				</div>

				{this.state.showDropdown && (
					<div ref={el => (this.dropdown = el)}>
						<ContextMenu fields={fields} layout={layout} />
					</div>
				)}
				<ReactTooltip id={id} effect="solid" />
			</React.Fragment>
		);
	}
}

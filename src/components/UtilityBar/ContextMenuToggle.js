import React from 'react';
import uuid from 'uuid';
import ReactTooltip from 'react-tooltip';
import { ContextMenu } from './ContextMenu';
import { AnimateIn, moreIcon } from '../Common';
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
		const inToggle = this.toggle && this.toggle.contains(e.target);
		const inDropdown = this.dropdown && this.dropdown.contains(e.target);
		if (!inDropdown && !inToggle) {
			this.setState({ showDropdown: false });
		}
	};

	toggleDropdown = () => {
		const { top } = this.toggle.getBoundingClientRect();
		const upper = window.innerHeight * 0.45 > top;
		this.setState(
			prevState => ({
				showDropdown: !prevState.showDropdown,
				upper
			}),
			() => {
				const { height } = this.dropdown
					.querySelector('.dropdown-container')
					.getBoundingClientRect();
				this.setState({ height });
			}
		);
	};

	render() {
		const { showDropdown, upper, height } = this.state;
		const { fields, layout } = this.props;
		const id = uuid();

		const position = upper
			? { top: '40px' }
			: {
					top: `-${height + 60}px`
			  };
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
				<ReactTooltip id={id} effect="solid" />
				<AnimateIn show={showDropdown}>
					<div ref={el => (this.dropdown = el)}>
						<ContextMenu fields={fields} layout={layout} style={position} />
					</div>
				</AnimateIn>
			</React.Fragment>
		);
	}
}

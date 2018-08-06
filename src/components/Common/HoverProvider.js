import React from 'react';
import { Provider } from './HoverContext';

export class HoverProvider extends React.Component {
	constructor() {
		super(...arguments);
		this.state = {
			field: null,
			selectedField: null,
			selectedSection: null,
			isSelected: false,
			isHovered: false,
			onMouseOver: this.handleMouseOver,
			onMouseLeave: this.handleMouseLeave
		};
	}

	componentDidMount() {
		document.addEventListener('click', this.handleSelection);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleSelection);
	}

	handleMouseOver = e => {
		const field = e.target.closest('.field');
		if (this.state.field !== field) {
			this.setState({ field });
		}
	};

	handleMouseLeave = e => {
		const field = e.target.closest('.field');
		if (this.state.field === field) {
			this.setState({ field: null });
		}
	};

	handleSelection = e => {
		const field = e.target.closest('.field');
		const section = e.target.closest('.section');
		this.setState({ selectedField: field, selectedSection: section });
		this.scrollToSection(e);
	};

	scrollToSection = e => {
		const section = e.target.closest('.section');
		const up = e.target.closest('.up');
		const down = e.target.closest('.down');
		if (section && (up || down)) {
			section.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	render() {
		return <Provider value={this.state}>{this.props.children}</Provider>;
	}
}

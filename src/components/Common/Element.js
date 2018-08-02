import React from 'react';
import { AnimateIn } from './AnimateIn';
import { ContentState, convertToRaw } from 'draft-js';
import { MegadraftEditor, editorStateFromRaw } from 'megadraft';
import 'megadraft/dist/css/megadraft.css';

export class Element extends React.Component {
	static defaultProps = {
		value: 'Hello World',
		handleChange: () => {}
	};

	constructor() {
		super(...arguments);
		this.state = {
			length: this.props.value.length,
			editorState: editorStateFromRaw(
				convertToRaw(ContentState.createFromText(this.props.value))
			)
		};
	}

	onChange = editorState => {
		const length = editorState.getCurrentContent().getPlainText('').length;
		this.setState({ editorState, length });
	};

	handleBlur = e => {
		const hasText = this.state.editorState.getCurrentContent().hasText();
		this.props.handleChange(hasText);
	};

	render() {
		const { editorState, length } = this.state;
		const { maxChars } = this.props;
		const showError = maxChars && length > maxChars;
		const errorMessage = (
			<AnimateIn animation="slide" show={showError}>
				<div className="error-message">You typed too much text </div>
			</AnimateIn>
		);
		return (
			<span className="element item">
				<MegadraftEditor
					autoCapitalize="off"
					autoComplete="off"
					autoCorrect="off"
					ref="editor"
					placeholder={this.props.placeholder}
					editorState={editorState}
					onChange={this.onChange}
					onBlur={this.handleBlur}
					sidebarRendererFn={() => null}
					{...this.props}
				/>
			</span>
		);
	}
}

import React from "react";
import { ContentState, convertToRaw } from "draft-js";
import { MegadraftEditor, editorStateFromRaw } from "megadraft";
import "megadraft/dist/css/megadraft.css";

export class Element extends React.Component {
  static defaultProps = {
    value: "Hello World"
  };

  constructor() {
    super(...arguments);
    this.state = {
      editorState: editorStateFromRaw(
        convertToRaw(ContentState.createFromText(this.props.value))
      )
    };
  }

  onChange = editorState => {
    this.setState({ editorState });
  };

  render() {
    const { editorState } = this.state;
    return (
      <MegadraftEditor
        ref="editor"
        editorState={editorState}
        onChange={this.onChange}
        sidebarRendererFn={() => null}
        {...this.props}
      />
    );
  }
}

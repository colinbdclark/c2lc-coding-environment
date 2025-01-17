// @flow

import ProgramBlockEditor from './ProgramBlockEditor';
import ProgramTextEditor from './ProgramTextEditor';
import React from 'react';
import TextSyntax from './TextSyntax';
import type {EditorMode, Program, SelectedAction} from './types';

type EditorContainerProps = {
    program: Program,
    syntax: TextSyntax,
    mode: EditorMode,
    selectedAction: SelectedAction,
    onSelectAction: (action: SelectedAction) => void,
    onChange: (Program) => void
};

export default class EditorContainer extends React.Component<EditorContainerProps, {}> {
    render() {
        return (
            <div style={{width: '100%'}}>
                {this.props.mode === 'text' ? (
                    <ProgramTextEditor
                        program={this.props.program}
                        syntax={this.props.syntax}
                        onChange={this.props.onChange} />
                 ) : (
                    <ProgramBlockEditor
                        minVisibleSteps={6}
                        program={this.props.program}
                        selectedAction={this.props.selectedAction}
                        onSelectAction={this.props.onSelectAction}
                        onChange={this.props.onChange} />
                )}
            </div>
        );
    }
}

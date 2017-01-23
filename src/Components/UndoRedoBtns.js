import React, {Component} from 'react';
import '../styles/App.css';
import { ActionCreators } from 'redux-undo';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => ({
    undo: () => dispatch(ActionCreators.undo()),
    redo: () => dispatch(ActionCreators.redo()),

});

class UndoRedoButtons extends Component {
    render() {
        return (
            <div className="UndoRedoButtons">
                <button onClick={this.props.undo}>Undo</button>
                <button onClick={this.props.redo}>Redo</button>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(UndoRedoButtons);


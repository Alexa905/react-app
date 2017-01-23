import React from 'react';
import Toolbar from './Toolbar';
import ProgressBar from './ProgressBar';
import {Link} from 'react-router'
import '../styles/Header.css';

class Header extends React.Component {
    render() {
        let task = this.props.store.editTask;
        return (
            <div className="Header">
                <div className="toolbar-wrapper">
                <h2><Link to={`/`}> {task ? 'Edit ' + task.name : 'Travel ToDo List'}</Link></h2>
                    {!task && <Toolbar/>}
                </div>
                <div className="progressbar-wrapper">
                {!task && <ProgressBar store={this.props.store}/>}
                </div>
            </div>
        );
    }

}

export default Header;

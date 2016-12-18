import React from 'react';
import Toolbar from './Toolbar';
import ProgressBar from './ProgressBar';
import {Link} from 'react-router'
import '../styles/Header.css';
import {connect} from 'react-redux';

const mapStateToProps = ({editTask}) => ({
    editTask
});
class Header extends React.Component {
    render() {
        let task = this.props.editTask;
        return (
            <div className="Header">
                <div className="toolbar-wrapper">
                <h2><Link to={`/`}> {task ? task.name : 'Travel ToDo List'}</Link></h2>
                    {!task && <Toolbar/>}
                </div>
                <div className="progressbar-wrapper">
                {!task && <ProgressBar/>}
                </div>
            </div>
        );
    }

}

export default connect(mapStateToProps)(Header);

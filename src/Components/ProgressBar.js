import React from 'react';
import '../styles/ProgressBar.css';
import {connect} from 'react-redux';

const mapStateToProps = ({tasks}) => ({
    tasks
});

class ProgressBar extends React.Component {

    render() {
        let tasksAll = this.props.tasks.length;
        let tasksActive = this.props.tasks.filter((task) => task.done );
        let tasksActiveLength = tasksActive.length;
        let progress = parseInt((100 * (tasksActiveLength / tasksAll)).toFixed(), 10);
        return (<div className='ProgressBar'>
            <progress max="100" value={progress}/>
        </div>);
    };
}

export default connect(mapStateToProps)(ProgressBar);

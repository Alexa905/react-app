import React from 'react';
/*import './TasksList.css';*/

class TasksList extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div><input type="checkbox"/>
                <span>{this.props.task.name} </span>
                <i className="fa fa-pencil-square-o"> </i>
            </div>
        );
    }

}

export default TasksList;
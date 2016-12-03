import React from 'react';
import '../styles/TaskList.css';
import {Link} from 'react-router'

class TasksList extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const tasks = this.getTasks();
        return (
            <div className="TaskList">
                {tasks || []}
            </div>

        )

    }

    handleChange(catIndex, taskIndex) {
        this.props.categories[catIndex].tasks[taskIndex].active = !this.props.categories[catIndex].tasks[taskIndex].active;
    }

    getTasks() {
        var activeCatIndex = this.props.params.id;

        if (activeCatIndex) {
            var tasks = this.props.tasks.filter(function (task) {
                return task.categoryId == activeCatIndex;
            });
            return tasks.map((task, index) => {
                return (<div className="Task" key={task.name + index}>
                    <input type="checkbox" onChange={this.handleChange.bind(this, task.id)} defaultChecked={task.active}/>
                    <span>{task.name} </span>
                    <Link to={`/task-${index}`}> <i className="fa fa-pencil-square-o"> </i></Link>
                </div>);
            });
        }
    }

}

export default TasksList;
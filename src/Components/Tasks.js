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

    getTasks() {
        var activeCatIndex = this.props.params.id;
        var activeSubCatIndex = this.props.params.subId;
        if (activeCatIndex) {
            var category = activeSubCatIndex ? this.props.categories[activeCatIndex].categories[activeSubCatIndex] : this.props.categories[activeCatIndex];
            return category && category.tasks.map((task, index) => {
                    return (<div className="Task" key={category.name + index}>
                        <input type="checkbox" defaultChecked={task.active}/>
                        <span>{task.name} </span>
                        <Link to={`/category-${activeCatIndex}/task-${index}`}> <i className="fa fa-pencil-square-o"> </i></Link>
                    </div>);
                });
        }
    }

}

export default TasksList;
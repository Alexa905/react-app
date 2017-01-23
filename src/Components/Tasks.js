import React from 'react';
import '../styles/TaskList.css';
import InputForm from './InputForm.js';
import Task from './Task.js';
import {addTask, updateTask} from '../actions';
const matchFilter = (filter, task) => (!filter || task.name.toLowerCase().match(filter));
const matchState = (state, task) => (!state || task.done);

class TasksList extends React.Component {
    render() {
        let tasks =this.props.store.tasks.filter(t => t.categoryId.toString() === this.props.params.id && matchFilter(this.props.store.taskFilter, t) && matchState(this.props.store.toggleState, t))
        return (<div>
                <InputForm addItem={this.addTask.bind(this)} placeholder="Add new task"/>
                <div className="TaskList">
                    {tasks.map((task, i) => {
                        return (<Task item={task} key={task.name + i} update={this.update.bind(this, task.id)}/>);
                    })}
                </div>
            </div>
        )
    }

    update(id, done) {
        updateTask({id, done})
    }

    addTask(taskName) {
        addTask({
            categoryId: this.props.params.id,
            name: taskName
        })
    }

}
export default TasksList;

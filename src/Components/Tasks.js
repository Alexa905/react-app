import React from 'react';
import '../styles/TaskList.css';
import InputForm from './InputForm.js';
import Task from './Task.js';
import {connect} from 'react-redux';
import {addTask, updateTask} from '../actions';
const matchFilter = (filter, task) => (!filter || task.name.match(filter));
const matchState = (state, task) => (!state || !task.done);
const mapStateToProps = ({tasks, taskFilter, toggleState}, {params: {id}}) => ({
    tasks: tasks.filter(t => t.categoryId.toString() === id && matchFilter(taskFilter, t) && matchState(toggleState, t))
});



const mapDispatchToProps = dispatch => ({
    addTask: name => dispatch(addTask(name)),
    updateTask: (task) => dispatch(updateTask(task))
});

class TasksList extends React.Component {
    render() {
        return (<div>
                <InputForm addItem={this.addTask.bind(this)} placeholder="Add new task"/>
                <div className="TaskList">
                    {this.props.tasks.map((task, i) => {
                        return (<Task item={task} key={task.name + i} update={this.update.bind(this, task.id)}/>);
                    })}
                </div>
            </div>
        )
    }

    update(id, done) {
        this.props.updateTask({id, done})
    }

    addTask(taskName) {
        this.props.addTask({
            categoryId: this.props.params.id,
            name: taskName
        })
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(TasksList);

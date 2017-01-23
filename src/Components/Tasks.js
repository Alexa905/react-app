import React from 'react';
import '../styles/TaskList.css';
import InputForm from './InputForm.js';
import Task from './Task.js';
import {connect} from 'react-redux';
import {addTask, updateTask} from '../actions';
import UndoRedoBtns from './UndoRedoBtns.js';

const matchFilter = (filter, task) => (!filter || (task.name.toLowerCase().match(filter.toLowerCase())));
const matchState = (state, task) => (!state || !task.done);
const mapStateToProps = ({tasks, taskFilter, toggleState}, {params: {categoryId}}) => ({
    tasks: tasks.present.filter(t => t.categoryId.toString() === categoryId && matchFilter(taskFilter.present, t) &&
    matchState(toggleState.present, t)),
    filter: taskFilter.present
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
                        return (<Task item={task} key={task.name + i} filter={this.props.filter} update={this.update.bind(this, task.id)}/>);
                    })}
                </div>
                <UndoRedoBtns/>
            </div>
        )
    }

    update(id, done) {
        this.props.updateTask({id, done})
    }

    addTask(taskName) {
        this.props.addTask({
            categoryId: this.props.params.categoryId,
            name: taskName
        })
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(TasksList);

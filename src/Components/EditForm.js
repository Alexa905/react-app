import React, {Component} from 'react';
import {Link} from 'react-router'
import '../styles/EditForm.css';
class ToDoList extends Component {

    render() {
        var task = this.getTask();
        return (
            <div className="EditForm">
                <form action="" onSubmit={this.updateTask.bind(this)}>
                    <div className="buttons">
                        <button type="submit"
                                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
                            Save
                        </button>
                        <Link to={`/`}> <button
                            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
                           Cancel</button></Link>
                    </div>
                    <div className="inputText"><input className="mdl-textfield__input" type="text" defaultValue={task.name}/></div>
                    <div><input type="checkbox" defaultValue={task.active}/>Done</div>
                    <textarea className="mdl-textfield__input" type="text" rows="10" id="sample5"
                              defaultValue={task.description} placeholder="Description"></textarea>
                </form>
            </div>
        );
    }

    updateTask(){
        var taskIndex = this.props.params.taskId;
        delete this.props.tasks[taskIndex]
    }

    getTask() {
        var taskIndex = this.props.params.taskId;
        return this.props.tasks[taskIndex]
    }

}

export default ToDoList;

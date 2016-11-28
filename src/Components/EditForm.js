import React, {Component} from 'react';
import {Link} from 'react-router'
import '../styles/EditForm.css';
class ToDoList extends Component {

    render() {
        var task = this.getTask();
        return (
            <div className="EditForm">
                <form action="">
                    <div className="buttons">
                        <button type="submit"
                                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
                            Save
                        </button>
                        <button
                            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
                            <Link to={`/`}><span>Cancel</span></Link></button>
                    </div>
                    <div className="inputText"><input className="mdl-textfield__input" type="text" defaultValue={task.name}/></div>
                    <div><input type="checkbox" defaultValue={task.active}/>Done</div>
                    <textarea className="mdl-textfield__input" type="text" rows="10" id="sample5"
                              defaultValue={task.description} placeholder="Description"></textarea>
                </form>
            </div>
        );
    }

    getTask() {
        var catIndex = this.props.params.categoryId;
        var taskIndex = this.props.params.taskId;
        return this.props.categories[catIndex].tasks[taskIndex]
    }

}

export default ToDoList;

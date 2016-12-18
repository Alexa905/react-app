import React, {Component} from 'react';
import '../styles/EditForm.css';
import {connect} from 'react-redux';
import {updateTask, setEditTask} from '../actions';
import ReactDOM from 'react-dom';

const mapStateToProps = ({tasks}) => ({
    tasks
});

const mapDispatchToProps = dispatch => ({
    updateTask: (task) => dispatch(updateTask(task)),
    setEditTask: (task) => dispatch(setEditTask(task))
});

class EditForm extends Component {
    componentDidMount(){
        let task = this.getTask()[0];
        this.props.setEditTask(task);
    }
    componentWillUnmount(){
        this.props.setEditTask(null);
    }
    render() {
        let task = this.getTask()[0];
        return (
            <div className="EditForm">
                <form action="" onSubmit={this.updateTask.bind(this)}>
                    <div className="buttons">
                        <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
                            Save
                        </button>
                        <button type="reset" onClick={this.props.router.goBack} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
                           Cancel</button>
                    </div>
                    <div className="inputText">
                        <input className="mdl-textfield__input" ref="name" type="text" defaultValue={task.name}/></div>
                    <div><input type="checkbox" defaultChecked={task.done} ref="checkbox"/>Done</div>
                    <textarea ref="description" className="mdl-textfield__input" type="text" rows="10" id="sample5"
                              defaultValue={task.description} placeholder="Description"/>
                </form>
            </div>
        );
    }

    updateTask(e){
        var task = this.getTask()[0];
        var active = ReactDOM.findDOMNode(this.refs.checkbox).checked;
        var name = ReactDOM.findDOMNode(this.refs.name).value;
        var description = ReactDOM.findDOMNode(this.refs.description).value;
        this.props.updateTask({id:task.id, active, name, description});
        this.props.router.push(`/category-${task.categoryId}`);
        e.preventDefault();
    }

    getTask() {
        var taskId = this.props.params.taskId;
        return this.props.tasks.filter(task=>taskId === task.id.toString())
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(EditForm);

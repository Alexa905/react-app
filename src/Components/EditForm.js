import React, {Component} from 'react';
import '../styles/EditForm.css';
import {connect} from 'react-redux';
import {updateTask, setEditTask} from '../actions';
import ReactDOM from 'react-dom';

const mapStateToProps = ({tasks}) => ({
    tasks: tasks.present
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
        let task = this.getTask()[0];
        let done = ReactDOM.findDOMNode(this.refs.checkbox).checked;
        let name = ReactDOM.findDOMNode(this.refs.name).value;
        let description = ReactDOM.findDOMNode(this.refs.description).value;
        this.props.updateTask({id:task.id, done, name, description});
        this.props.router.push(`/category-${task.categoryId}`);
        e.preventDefault();
    }

    getTask() {
        let taskId = this.props.params.taskId;
        return this.props.tasks.filter(task=>taskId === task.id.toString())
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(EditForm);

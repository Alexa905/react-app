import React from 'react';
import ReactDOM from 'react-dom';
import  '../styles/Category.css';
import Category from './Category.js'
import InputForm from './InputForm.js';
import {connect} from 'react-redux';
import {addCategory, addSubCategory, deleteCategory, updateCategory, updateTask, setEditTask} from '../actions';

const mapStateToProps = ({categories, editTask}) => ({
    categories, editTask
});

const mapDispatchToProps = dispatch => ({
    addCategory: name => dispatch(addCategory(name)),
    addSubCategory: id => dispatch(addSubCategory(id)),
    deleteCategory: id => dispatch(deleteCategory(id)),
    updateCategory: (id, name) => dispatch(updateCategory(id, name)),
    updateTask: (task) => dispatch(updateTask(task)),
    setEditTask: (task) => dispatch(setEditTask(task))
});

const Sidebar = React.createClass({
    componentDidUpdate() {
        var el = ReactDOM.findDOMNode(this.refs.add);
        if (el) el.focus();
    },
    render() {
        let props = this.props;

        return (<div className='Sidebar'>
            <InputForm addItem={props.addCategory} placeholder="Add new category"/>
            <div className="Categories">
                {props.categories.map((cat, i) =>
                    <Category key={cat.name + i}
                              update={props.updateCategory}
                              editTask={props.editTask}
                              updateTask={this.updateTask}
                              node={cat}
                              add={props.addSubCategory}
                              delete={props.deleteCategory}/>
                )}
            </div>
        </div>);
    },

    createCategory(evt) {
        if (evt.which !== 13) return;
        var name = ReactDOM.findDOMNode(this.refs.add).value;
        this.props.addCategory(name);
    },

    updateTask(updatedTask) {
        this.props.updateTask(updatedTask);
        this.props.setEditTask(updatedTask);
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

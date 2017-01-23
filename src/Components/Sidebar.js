import React from 'react';
import ReactDOM from 'react-dom';
import  '../styles/Category.css';
import Category from './Category.js'
import InputForm from './InputForm.js';
import {connect} from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = ({categories, editTask}) => ({
    categories: categories.present, editTask: editTask.present
});

const mapDispatchToProps = dispatch => ({
    addCategory: name => dispatch(actions.addCategory(name)),
    addSubCategory: id => dispatch(actions.addSubCategory(id)),
    deleteCategory: id => dispatch(actions.deleteCategory(id)),
    updateCategory: (id, name) => dispatch(actions.updateCategory(id, name)),
    updateTask: (task) => dispatch(actions.updateTask(task)),
    setEditTask: (task) => dispatch(actions.setEditTask(task)),
    deleteTasks: (task) => dispatch(actions.deleteTasks(task))
});

const Sidebar = React.createClass({
    componentDidUpdate() {
        const el = ReactDOM.findDOMNode(this.refs.add);
        if (el) el.focus();
    },
    render() {
        let props = this.props;
        return (<div className='Sidebar'>
            <InputForm addItem={props.addCategory} placeholder="Add new category"/>
            <div className="Categories">
                {props.categories.map((category, i) =>
                    <Category key={category.name + i}
                              update={props.updateCategory}
                              editTask={props.editTask}
                              updateTask={this.updateTask}
                              node={category}
                              add={props.addSubCategory}
                              delete={this.deleteCategory}/>
                )}
            </div>
        </div>);
    },

    createCategory(evt) {
        if (evt.which !== 13) return;
        let name = ReactDOM.findDOMNode(this.refs.add).value;
        this.props.addCategory(name);
    },

    updateTask(updatedTask) {
        this.props.updateTask(updatedTask);
        this.props.setEditTask(updatedTask);
    },

    deleteCategory(categoryId) {
        let confirmation = confirm('Are you sure to delete this category?');
        if(confirmation){
            this.props.deleteCategory(categoryId);
            this.props.deleteTasks(categoryId);
        }
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

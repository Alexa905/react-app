import React from 'react';
import ReactDOM from 'react-dom';
import  '../styles/Category.css';
import Category from './Category.js'
import InputForm from './InputForm.js';
import {addCategory, addSubCategory, deleteCategory, updateCategory, updateTask, setEditTask} from '../actions';

const Sidebar = React.createClass({
    componentDidUpdate() {
        let el = ReactDOM.findDOMNode(this.refs.add);
        if (el) el.focus();
    },
    render() {
        let props = this.props;
        let categories = props.store.categories;
        return (<div className='Sidebar'>
            <InputForm addItem={addCategory} placeholder="Add new category"/>
            <div className="Categories">
                {categories.map((cat, i) =>
                    <Category key={cat.name + i}
                              update={updateCategory}
                              editTask={props.store.editTask}
                              updateTask={this.updateTask}
                              node={cat}
                              add={addSubCategory}
                              delete={this.deleteCategory}/>
                )}
            </div>
        </div>);
    },

    createCategory(evt) {
        if (evt.which !== 13) return;
        let name = ReactDOM.findDOMNode(this.refs.add).value;
        addCategory(name);
    },

    updateTask(updatedTask) {
        updateTask(updatedTask);
        setEditTask(updatedTask);
    },

    deleteCategory(id){
        let confirmation = confirm('Are you sure to delete this category?');
        if(confirmation){
            deleteCategory(id);
        }


    }

});

export default Sidebar;

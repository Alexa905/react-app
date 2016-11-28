import React, {Component} from 'react';

import '../styles/App.css';
import InputForm from './InputForm.js';
import Header from './Header.js';
import Categories from './Categories.js';

class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            activeCategoryIndex: null,
            categories: [{
                id: 0,
                name: 'My first Category',
                tasks: [{name: 'Item1', active: true}, {name: 'Item2'}]
            }, {
                id: 1,
                name: 'Home tasks',
                tasks: [{name: 'Item3', active: true}, {name: 'Item4'},],
                categories: [{
                    name: 'SubCategory 1',
                    tasks: [{name: '200', active: true}, {name: 'Item2000'}]
                }, {
                    name: 'SubCategory 2',
                    tasks: [{name: '300', active: true}, {name: 'Item40000'},]
                }]
            }],
            editMode: false
        };
    }

    render() {
        var state = this.state;
        this.state.editMode = this.props.location.pathname.indexOf('task') !== -1;
        const children = React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, {
                categories: state.categories
            })
        });
        return (
            <div className="App">
                {!this.state.editMode && <Header title='Todo-list'>
                    <div className="toggle-tasks">
                        <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect">
                            <input type="checkbox" defaultValue={false} id="switch-2" className="mdl-switch__input"/>
                                <span className="mdl-switch__label">     Show active</span>

                        </label>
                    </div>
                    <div className="search-tasks"><input className="mdl-textfield__input" type="text" placeholder="Search"/>
                        <i className="fa fa-icon-remove"> </i></div>
                </Header>}
                {this.state.editMode && <Header title='Edit task'/>}

                <div className="App-intro">
                    <div className="sidebar">
                        {!this.state.editMode && <InputForm addItem={this.addCategory.bind(this)} placeholder="Add new category"/>}
                        <Categories categories={this.state.categories} setActive={this.setActiveCategory.bind(this)}
                                    deleteCategory={this.deleteCategory.bind(this)} editMode={this.state.editMode}/>
                    </div>
                    <div className="content">
                        <div className="content-inner">

                        {children && !this.state.editMode &&  <InputForm addItem={this.addTask.bind(this)} placeholder="Add new task"/>}

                        {children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    addCategory(categoryName) {
        var newCategory = {id: this.state.categories.length, name: categoryName, tasks: []};
        this.setState({
            categories: this.state.categories.concat([newCategory])
        });
    }

    addTask(taskName) {
        var categories = this.state.categories;
        var activeCategory = categories[this.state.activeCategoryIndex];
        var newTask = {isActive: true, name: taskName, key: activeCategory.id + activeCategory.tasks.length};
        activeCategory.tasks.push(newTask);
        this.setState({
            categories: categories
        });
    }

    deleteCategory(index) {
        this.state.categories.splice(index, 1);
        this.setState({
            categories: this.state.categories
        });
    }

    setActiveCategory(index) {
        this.setState({
            activeCategoryIndex: index
        });
    }

}

export default ToDoList;

import React, {Component} from 'react';
import logo from './logo.svg';
import './styles/App.css';
import InputForm from './InputForm.js';
import Category from './Category.js';
import Task from './Task.js';

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
                tasks: [{name: 'Item3', active: true}, {name: 'Item4'}]
            }]
        };
    }

    render() {
        const categories = this.getCategories();
        const tasks = this.getTasks();
        return (
            <div className="App">
                <div className="App-header">
                    <h2>To-do List <img src={logo} className="App-logo" alt="logo"/></h2>
                    <div className="toggle-tasks"><input type="checkbox"/>Show active</div>
                    <div className="search-tasks"><input type="text" placeholder="Search"/><i
                        className="icon-remove-sign"> </i></div>
                </div>
                <div className="App-intro">
                    <div className="sidebar">
                        <InputForm addItem={this.addCategory.bind(this)} placeholder="Add new category"/>
                        <div className="Categories">
                            { categories || []}
                        </div>
                    </div>
                    <div className="content">
                        <InputForm addItem={this.addTask.bind(this)} placeholder="Add new task"/>
                        { tasks[this.state.activeCategoryIndex] || []}
                    </div>
                </div>
            </div>
        );
    }

    addCategory(categoryName) {
        var newCategory = {id: this.state.categories.length, name: categoryName, tasks:[]};
        this.setState({
            categories: this.state.categories.concat([newCategory])
        });
    }

    addTask(taskName) {
        var categories = this.state.categories;
        var activeCategory = categories[this.state.activeCategoryIndex];
        var newTask = {isActive:true, name: taskName, key: activeCategory.id + activeCategory.tasks.length};
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

    showTasks(index) {
        this.setState({
            activeCategoryIndex: index
        });
    }

    getCategories() {
        return this.state.categories.map((cat, index) => {
            return (<Category
                deleteCategory={this.deleteCategory.bind(this, index)}
                key={cat.id}
                name={cat.name}
                showTasks={this.showTasks.bind(this, index)}
            />);
        });
    }

    getTasks() {
        return this.state.categories.map((cat) => {
            return cat.tasks && cat.tasks.map((task, i) => {
                    return (<Task key={cat.id + i} task={task}/>)
                });
        });
    }
}

export default ToDoList;

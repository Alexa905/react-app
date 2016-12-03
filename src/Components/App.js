import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../styles/App.css';
import InputForm from './InputForm.js';
import Header from './Header.js';
import Categories from './Categories.js';

class ToDoList extends Component {
    constructor() {
        super();
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            search: '',
            activeCategoryIndex: null,
            tasks: [{name: 'Item1', active: true, categoryId: 0}, {name: 'Item2', categoryId: 0},
                {categoryId: 1, name: 'Item3', active: true}, {categoryId: 1, name: 'Item4'},
                {categoryId: 2, name: '200', active: true}, {categoryId: 2, name: 'Item2000'},
                {categoryId: 3, name: '300', active: true}, {categoryId: 3, name: 'Item40000'}],
            categories: [{
                id: 0,
                name: 'My first Category'
            }, {
                id: 1,
                name: 'Home tasks',
                childNodes: [{
                    id: 2,
                    parentId: 1,
                    name: 'SubCategory 1'
                }, {
                    id: 3,
                    parentId: 1,
                    name: 'SubCategory 2',
                    childNodes: [{
                        id: 4,
                        parentId: 1,
                        name: 'SubCategory 2-1'
                    }]
                }]
            }
            ],
            editMode: false
        };
    }

    render() {
        this.state.editMode = this.props.location.pathname.indexOf('task') !== -1;
        const children = React.Children.map(this.props.children, (child)=> {
            return React.cloneElement(child, {
                props: this.props,
                categories: this.state.categories,
                tasks: this.state.tasks
            })
        });
        return (
            <div className="App">
                {!this.state.editMode && <Header title='Todo-list'>
                    <div className="toggle-tasks">
                        <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect">
                            <input type="checkbox" defaultValue={false} className="mdl-switch__input"/>
                            <span className="mdl-switch__label"> Show active</span>

                        </label>
                    </div>
                    <div className="search-tasks"><input className="mdl-textfield__input search-input" type="text"
                                                         onChange={this.handleSearch} ref="searchInput"
                                                         placeholder="Search" value={this.state.search}/>
                        {this.state.search && <i onClick={this.clearSearch.bind(this)} className="fa fa-remove"> </i>}
                    </div>
                </Header>}
                {this.state.editMode && <Header title='Edit task'/>}

                <div className="App-intro">
                    <div className="sidebar">
                        {!this.state.editMode &&
                        <InputForm addItem={this.addCategory.bind(this)} placeholder="Add new category"/>}
                        <Categories categories={this.state.categories} addCategory={this.addSubCategory.bind(this)}
                                    deleteCategory={this.deleteCategory.bind(this)}
                                    update={this.updateCategory.bind(this)} editMode={this.state.editMode}/>
                    </div>
                    <div className="content">
                        <div className="content-inner">

                            {children && !this.state.editMode &&
                            <InputForm addItem={this.addTask.bind(this)} placeholder="Add new task"/>}

                            {children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    addCategory(categoryName) {
        var newCategory = {id: Math.random().toString(36).substr(2, 10), name: categoryName};
        this.setState({
            categories: this.state.categories.concat([newCategory])
        });
    }

    handleSearch(e) {
        this.setState({
            search: e.target.value
        });
    }

    clearSearch() {
        this.setState({search: ''});
        ReactDOM.findDOMNode(this.refs.searchInput).focus();
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

    deleteCategory(id) {
        var categories = this.state.categories;
        findCategory(categories);
        function findCategory(categories) {
            categories.forEach(function (cat, index) {
                if (cat.id === id) {
                    categories.splice(index, 1);
                }
                else if (cat.childNodes) {
                    findCategory(cat.childNodes)
                }
            });
        }
        this.setState({
            categories: categories
        });
    }

    updateCategory(id, name) {
        var categories = this.state.categories;
        findCategory(categories);
        function findCategory(categories) {
            categories.forEach(function (cat) {
                if (cat.id === id) {
                    name = !!name ? name : 'new category';
                    cat.name = name;
                }
                else if (cat.childNodes) {
                    findCategory(cat.childNodes)
                }
            });
        }
        this.setState({
            categories: categories
        });
    }

    addSubCategory(id) {
        var categories = this.state.categories;
        findCategory(categories);
        function findCategory(categories) {
            categories.forEach(function (cat) {
                if (cat.id === id) {
                    cat.childNodes = cat.childNodes || [];
                    var newCategory = {id: Math.random().toString(36).substr(2, 10), name: 'new category'};
                    cat.childNodes.push(newCategory);
                }
                else if (cat.childNodes) {
                    findCategory(cat.childNodes)
                }
            });
        }
        this.setState({
            categories: categories
        });
    }

}

export default ToDoList;

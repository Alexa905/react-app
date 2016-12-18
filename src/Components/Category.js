import React from 'react';
import  '../styles/Category.css';
import {Link} from 'react-router';

class Category extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            editMode: false,
            name: ''

        };
    }

    toggle = () => {
        this.setState({visible: !this.state.visible});
    };

    edit() {
        this.setState({
            editMode: true
        });
    }

    deleteCategory(id) {
        this.props.delete(id);
    }

    saveChanges(e, id) {
        var value = e.target.value;
        if (value) {
            this.props.update(id, value);
            this.setState({
                editMode: false
            })
        }
    }

    handleKeyPress(e, id) {
        if (e.charCode === 13) {
            this.saveChanges(e, id);
        }
    }

    add(id) {
        this.props.add(id);
    }

    updateTask(categoryId, task) {
        let updatedTask = Object.assign({}, task, {categoryId});
        this.props.updateTask(updatedTask);
    }

    render() {
        let props = this.props;
        let task = props.editTask;
        let childNodes = props.node.childNodes && props.node.childNodes.map((node, index)=> {
                return <Category delete={this.props.delete}
                                 editTask={this.props.editTask}
                                 updateTask={this.props.updateTask}
                                 add={this.props.add}
                                 update={this.props.update}
                                 key={index}
                                 node={node}/>
            });
        let categoryTools = task ?
            (<span className={(task.categoryId === props.node.id) && 'active'}>{props.node.name}<i
                className="fa fa-hand-o-left" onClick={this.updateTask.bind(this, props.node.id, task)}/></span>) :
            this.state.editMode ? (<input autoFocus type="text" ref="name" defaultValue={props.node.name}
                                          onBlur={e => this.saveChanges(e, props.node.id)}
                                          onKeyPress={e => this.handleKeyPress(e, props.node.id)}/>) :
                (<span><Link activeClassName="active" to={`/category-${props.node.id}`}>
                    <span>{props.node.name}</span> </Link>
                <i onClick={this.deleteCategory.bind(this, props.node.id)} className="fa fa-trash-o"> </i>
                <i className="fa fa-plus" onClick={this.add.bind(this, props.node.id)}> </i>
                <i onClick={this.edit.bind(this)} className="fa fa-pencil-square-o"> </i>
            </span>);

        return (
            <div className="Category">
                {props.node.childNodes &&
                <i className={this.state.visible ? "fa fa-caret-down" : "fa fa-caret-right"} onClick={this.toggle}> </i>}
                {categoryTools}
                <div className='child' style={this.state.visible ? {display: "block"} : {display: "none"}}>
                    {childNodes}
                </div>
            </div>
        );
    }
}

export default Category;

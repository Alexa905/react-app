import React from 'react';
import  '../styles/Category.css';
import {Link} from 'react-router'

class Category extends React.Component {
    constructor() {
        super();
        this.state = {
            editMode: false,
            name: ''
        };
    }

    render() {
        return (
            <li className="Category">
                <div className="Category">
                    {!this.state.editMode && <Link activeClassName="active" to={`/category-${this.props.cat.id}`}><span>{this.props.cat.name}</span></Link>}
                    {!this.state.editMode && <i onClick={this.deleteCategory.bind(this, this.props.index)} className="fa fa-trash-o"> </i>}
                    {!this.state.editMode && <i className="fa fa-plus"> </i> }
                    {!this.state.editMode && <i onClick={this.edit.bind(this)} className="fa fa-pencil-square-o"> </i>}
                    {this.state.editMode && <input type="text" defaultValue={this.props.cat.name} onChange={this.handleChange.bind(this)} onBlur={this.saveChanges.bind(this, this.props.index)}/>}
                </div>
            </li>
        );
    }

    edit() {
        this.setState({
            editMode: true
        })
    }

    deleteCategory(index) {
        this.props.delete(index);
    }

    handleChange(e) {
        console.log(e.target.value)
        this.setState({
            name: e.target.value
        })
    }

    saveChanges(index) {
        this.props.update(index, this.state.name);
        this.setState({
            editMode: false
        })
    }

}


export default Category;

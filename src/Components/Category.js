import React from 'react';
import  '../styles/Category.css';
import {Link} from 'react-router'

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
        })
    }

    deleteCategory(index) {
        this.props.delete(index);
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    saveChanges(id) {
        this.props.update(id, this.state.name);
        this.setState({
            editMode: false
        })
    }

    add(id) {
        this.props.add(id);
    }

    render() {
        var childNodes;
        var classObj;

        if (this.props.node.childNodes != null) {
            childNodes = this.props.node.childNodes.map( (node, index)=> {
                return <Category delete={this.props.delete} add={this.props.add} update={this.props.update}  key={index} node={node}/>
            });

            classObj = {
                togglable: true,
                "togglable-down": this.state.visible,
                "togglable-up": !this.state.visible
            };
        }

        var style;
        if (!this.state.visible) {
            style = {display: "none"};
        }

        return (
            <div className="Category">
                {this.props.node.childNodes &&<i  className="fa fa-caret-down" onClick={this.toggle}> </i>}
                {!this.state.editMode && <Link activeClassName="active" to={`/category-${this.props.node.id}`}> <span>{this.props.node.name}</span></Link>}
                {!this.state.editMode &&
                <i onClick={this.deleteCategory.bind(this, this.props.node.id)} className="fa fa-trash-o"> </i>}
                {!this.state.editMode && <i className="fa fa-plus" onClick={this.add.bind(this, this.props.node.id)}> </i> }
                {!this.state.editMode && <i onClick={this.edit.bind(this)} className="fa fa-pencil-square-o"> </i>}
                {this.state.editMode &&
                <input type="text" defaultValue={this.props.node.name} onChange={this.handleChange.bind(this)}
                       onBlur={this.saveChanges.bind(this, this.props.node.id)}/>}
                <div className='child' style={style}>
                    {childNodes}
                </div>
            </div>
        );
    }


}


export default Category;

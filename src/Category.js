import React from 'react';
import  './styles/Category.css';

class Category extends React.Component {
    constructor() {
        super();
        this.state = {
            contentEditable: false
        };
    }
    render() {
        return (
            <div onClick={this.props.showTasks} className="Category"><span contentEditable="false">{this.props.name}</span>
                <i onClick={this.props.deleteCategory} className="fa fa-trash-o"> </i>
                <i className="fa fa-plus"> </i>
                <i onClick={this.setEdit.bind(this)} className="fa fa-pencil-square-o"> </i>
            </div>
        );
    }

    setEdit() {
        this.setState({
            contentEditable: !this.state.contentEditable
        });
    }
}


// Uncomment properties you need
// FirstComponent.propTypes = {};
// FirstComponent.defaultProps = {};

export default Category;

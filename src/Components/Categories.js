import React from 'react';
import  '../styles/Category.css';
import {Link} from 'react-router'
class Category extends React.Component {
    constructor() {
        super();
        this.state = {
            contentEditable: false
        };
    }

    render() {
        const categories = this.getCategories();
        return (
            <div className="Categories">
                {categories || []}
            </div>
        );
    }

    setEdit() {
    }

    deleteCategory(index) {
        this.props.deleteCategory(index);
    }

    setActive(index) {
        this.props.setActive(index);
    }

    getSubcategories(cat, i) {
        return cat.categories.map((subcat, index) => {
            return (<ul key={cat.id + subcat.name + index}>
                <li className="Category">
                    <Link activeClassName="active" to={`/category-${i}/${index}`}><span>{subcat.name}</span></Link>
                </li>
            </ul>)
        })
    }

    getCategories() {

        return this.props.categories.map((cat, index) => {
            return (<div id={cat.id + index} key={cat.name + index} onClick={this.setActive.bind(this, index)} className="Category">
                <Link activeClassName="active" to={`/category-${index}`}><span>{cat.name}</span></Link>
                {!this.props.editMode && <i onClick={this.deleteCategory.bind(this, index)} className="fa fa-trash-o"> </i>}
                { !this.props.editMode &&  <i className="fa fa-plus"> </i>}
                {!this.props.editMode && <i onClick={this.setEdit.bind(this)} className="fa fa-pencil-square-o"> </i>}
                {cat.categories && cat.categories.length && this.getSubcategories(cat, index)}

            </div>);
        });
    }
}


export default Category;

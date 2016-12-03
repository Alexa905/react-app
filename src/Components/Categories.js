import React from 'react';
import  '../styles/Category.css';
import Category from './Category.js'

class Categories extends React.Component {
    render() {
        const categories = this.getCategories();
        return (
            <div className="Categories">
                {categories || []}
            </div>
        );
    }

    getCategories() {
        return this.props.categories.map((cat, index) => {
            return (
                <Category delete={this.props.deleteCategory} update={this.props.update} add={this.props.addCategory} key={cat.name + index}
                          node={cat} index={index}/>);

        });
    }
}


export default Categories;

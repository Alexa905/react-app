import React from 'react';
import '../styles/ProgressBar.css';
import {connect} from 'react-redux';

const mapStateToProps = ({tasks, categories}) => ({
    tasks: tasks.present, categories: categories.present
});

class ProgressBar extends React.Component {

    render() {
        let allCategories = [];
        let categories = this.props.categories;
        countCategories(categories);
        function countCategories(items) {
            items.forEach((cat) => {
                allCategories.push(cat);
                if (cat.childNodes && cat.childNodes.length) {
                    countCategories(cat.childNodes);
                }
            })
        }
        let tasks = this.props.tasks;
        let categoriesDone = allCategories.filter(cat => {
            let categoryTasks = tasks.filter(task => task.categoryId === cat.id);
            return !categoryTasks.length || categoryTasks.every((task) => task.done);

        });
        let progress = parseInt((100 * (categoriesDone.length / allCategories.length)).toFixed(), 10);
        return (<div className='ProgressBar'>
            <progress max="100" value={progress}/>
        </div>);
    };
}

export default connect(mapStateToProps)(ProgressBar);

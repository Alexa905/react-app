import React from 'react';
import {Link} from 'react-router';
import ReactDOM from 'react-dom';
import '../styles/TaskList.css';

class Task extends React.Component {

    render() {
        const highlight = () => (this.props.item.name.replace(this.props.filter,`<i class="highlighted">${this.props.filter}</i>` ));
        return (
            <div className="Task">
                <input type="checkbox"
                       onChange={this.handleChange.bind(this)}
                       checked={this.props.item.done}
                       ref="checkbox"/>

                <span dangerouslySetInnerHTML={{__html: highlight()}}/>
                <span className="description">{this.props.item.description}</span>
                <Link to={`/task-${this.props.item.id}`}> <i className="fa fa-pencil-square-o"> </i></Link>
            </div>);
    }

    handleChange() {
        const input = ReactDOM.findDOMNode(this.refs.checkbox);
        this.props.update(input.checked);
    }

}
export default Task;

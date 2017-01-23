import React from 'react';
import {Link} from 'react-router';
import ReactDOM from 'react-dom';

class Task extends React.Component {
    render() {
        return (
            <div className="Task">
                <input type="checkbox"
                       onChange={this.handleChange.bind(this)}
                       defaultChecked={this.props.item.done}
                       ref="checkbox"/>

                <span>{this.props.item.name} </span>
                <span className="description">{this.props.item.description} </span>
                <Link to={`/task-${this.props.item.id}`}> <i className="fa fa-pencil-square-o"> </i></Link>
            </div>);
    }

    handleChange() {
        let input = ReactDOM.findDOMNode(this.refs.checkbox);
        this.props.update(input.checked);
    }

}
export default Task;

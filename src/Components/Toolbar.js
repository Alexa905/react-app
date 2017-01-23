import React from 'react';
import {filterTasks, switchState} from '../actions';
import ReactDOM from 'react-dom';
import '../styles/Toolbar.css';

class Toolbar extends React.Component {
    render() {
        return (<div className='toolbar'>
            <div className="toggle-tasks">
                <label className="mdl-switch">
                    <input type="checkbox"
                           defaultValue={false}
                           onChange={e => switchState(e.target.value)}
                           className="mdl-switch__input"/>
                    <span className="mdl-switch__label"> Show done</span>
                </label>
            </div>
            <div className="search-tasks">
                <input className="mdl-textfield__input search-input"
                       type="search"
                       onChange={e => filterTasks(e.target.value)}
                       ref="searchInput"
                       placeholder="Search Task..."/>
                <i onClick={this.clearSearch.bind(this)} className="fa fa-remove"> </i>
            </div>
        </div>);
    };

    clearSearch() {
        let input = ReactDOM.findDOMNode(this.refs.searchInput);
        if (input.value) {
            filterTasks('');
            input.value = '';
            input.focus();
        }
    }
}

export default Toolbar;

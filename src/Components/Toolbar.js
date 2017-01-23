import React from 'react';
import {filterTasks, switchState} from '../actions';
import ReactDOM from 'react-dom';
import '../styles/Toolbar.css';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => ({
    switchState: state => dispatch(switchState(state)),
    onFilter: query => dispatch(filterTasks(query))
});

const mapStateToProps = ({toggleState,taskFilter}) => ({
    toggleState: toggleState.present,
    filter: taskFilter.present
});

class Toolbar extends React.Component {
    render() {
        return (<div className='toolbar'>
            <div className="toggle-tasks">
                <label className="mdl-switch">
                    <input type="checkbox"
                           checked={this.props.toggleState}
                           onChange={e => this.props.switchState(e.target.value)}
                           className="mdl-switch__input"/>
                    <span className="mdl-switch__label"> Show active</span>
                </label>
            </div>
            <div className="search-tasks">
                <input className="mdl-textfield__input search-input"
                       type="search"
                       onChange={e => this.props.onFilter(e.target.value)}
                       ref="searchInput"
                       value={this.props.filter}
                       placeholder="Search Task..."/>
                <i onClick={this.clearSearch.bind(this)} className="fa fa-remove"> </i>
            </div>
        </div>);
    };

    clearSearch() {
        const input = ReactDOM.findDOMNode(this.refs.searchInput);
        if (input.value) {
            this.props.onFilter('');
            input.value = '';
            input.focus();
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);

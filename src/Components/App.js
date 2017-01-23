import React, {Component} from 'react';
import '../styles/App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import store from '../store';

class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            store: store.getState()
        };
    }

    render() {
        store.addChangeListener(this.onChange.bind(this));
        const children = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                store: this.state.store
            })
        );
        return (
            <div className="App">
                <Header store={this.state.store}/>
                <div className="App-intro">
                    <Sidebar store={this.state.store}/>
                    <div className="content">
                        <div className="content-inner">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onChange() {
        this.setState({store: store.getState()});
    }

}

export default ToDoList;

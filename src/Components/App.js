import React, {Component} from 'react';
import '../styles/App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';


class ToDoList extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="App-intro">
                    <Sidebar />
                    <div className="content">
                        <div className="content-inner">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoList;

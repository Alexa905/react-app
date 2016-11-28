import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Tasks from './Components/Tasks';
import EditTask from './Components/EditForm';
import './styles/index.css';
import {Router, Route, browserHistory} from 'react-router'

ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="category-:id" component={Tasks}/>
                <Route path="category-:categoryId/task-:taskId" component={EditTask}/>
                <Route path="category-:id/:subId" component={Tasks}/>
            </Route>
        </Router>
    ), document.getElementById('root')
);


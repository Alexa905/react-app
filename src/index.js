import React from 'react';
import {createStore, combineReducers} from 'redux'
import * as reducers from './reducers';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Tasks from './Components/Tasks';
import EditTask from './Components/EditForm';
import {Provider} from 'react-redux'
import './styles/index.css';
import {Router, Route, browserHistory} from 'react-router';
import undoable from 'redux-undo';

let reducersWithHistory = {};
Object.keys(reducers).forEach(function (key) {
    reducersWithHistory[key] = undoable(reducers[key], {filter: (action) => (action.type !== 'EDIT_TASK')})
});


const store = createStore(combineReducers(reducersWithHistory));

ReactDOM.render((<Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="category-:categoryId" component={Tasks}/>
                <Route path="task-:taskId" component={EditTask}/>
            </Route>
        </Router>
    </Provider>), document.getElementById('root')
);



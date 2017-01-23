import Dispatcher from './dispather';
import {data as state} from './stubData';
import EventEmitter  from './eventEmitter';
let store = new EventEmitter();


store.emitChange = function () {
    this.emit('change');
};

store.addChangeListener = function (listener) {
    this.on('change', listener);
};

store.getState = function () {
    return state;
};

Dispatcher.register(function (action) {
    switch (action.type) {
        case 'ADD_TASK':
            let newTask = Object.assign({id: +new Date(), isActive: true}, action.data);
            state.tasks.unshift(newTask);
            store.emitChange();
            break;
        case 'UPDATE_TASK':
            let taskUpdate = action.data;
            state.tasks.map((task) => (task.id === taskUpdate.id) ?
                Object.assign(task, taskUpdate) : task
            );
            store.emitChange();
            break;
        case 'EDIT_TASK':
            state.editTask = action.data || null;
            store.emitChange();
            break;
        case 'ADD_CATEGORY':
            let newCategory = Object.assign({}, action.data, {
                id: +new Date()
            });
            state.categories.unshift(newCategory);
            store.emitChange();
            break;
        case 'ADD_SUB_CATEGORY':
        function addSubCategory(categories) {
            categories.map(cat => {
                if (cat.id === action.data.id) {
                    cat.childNodes = cat.childNodes || [];
                    cat.childNodes.unshift({id: +new Date(), name: 'new category'})
                }
                else if (cat.childNodes) {
                    addSubCategory(cat.childNodes);
                }
                return cat;
            });
        }
            addSubCategory(state.categories);
            store.emitChange();
            break;

        case 'UPDATE_CATEGORY':
        function updateCategory(categories) {
            categories.map(function (cat) {
                if (cat.id === action.data.id) {
                    cat.name = action.data.name
                }
                else if (cat.childNodes) {
                    updateCategory(cat.childNodes)
                }
                return cat;
            });
        }
            updateCategory(state.categories);
            store.emitChange();
            break;

        case 'DELETE_CATEGORY':

        function deleteCategory(state) {
            state.forEach(function (cat, index) {
                if (cat.id === action.data.id) {
                    state.splice(index, 1);
                }
                else if (cat.childNodes) {
                    deleteCategory(cat.childNodes)
                }
            });
        }
            deleteCategory(state.categories);
        state.tasks.forEach((task, index)=>{
            if (task.categoryId === action.data.id) {
                delete state.tasks[index]
            }
        });
            store.emitChange();
            break;
        case 'TOGGLE_TASK_STATE':
            state.toggleState = !state.toggleState;
            store.emitChange();
            break;
        case 'FILTER_TASKS':
            state.taskFilter = action.data;
            store.emitChange();
            break;
        default:
            return state;
    }

});

export default store;

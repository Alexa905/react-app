import {data} from './stubData';

export const taskFilter = (state, action) => {
    switch (action.type) {
        case 'FILTER_TASKS':
            return action.data;
        default:
            return state || '';
    }
};
export const toggleState = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_TASK_STATE':
            return !state;
        default:
            return state || false;
    }
};

export const editTask = (state, action) => {
    switch (action.type) {
        case 'EDIT_TASK':
            return action.data || null;
        default:
            return state || null;
    }
};
export const tasks = (state, action) => {
    switch (action.type) {
        case 'RECEIVE_DATA':
            return action.data.tasks || state;
        case 'ADD_TASK':
            let newTask = Object.assign({id: +new Date(), isActive: true}, action.data);
            return [newTask].concat(state);
        case 'UPDATE_TASK':
            let taskUpdate = action.data;
            return state.map((task) => (task.id === taskUpdate.id) ?
                Object.assign({}, task, taskUpdate) : task
            );
        default:
            return state || data.tasks;
    }
};

export const categories = (state, action) => {
    switch (action.type) {
        case 'RECEIVE_DATA':
            return action.data.categories || state;
        case 'ADD_CATEGORY':
            let newCategory = Object.assign({}, action.data, {
                id: +new Date()
            });
            return [newCategory].concat(state);
        case 'ADD_SUB_CATEGORY':
        function addSubCategory(categories) {
            return categories.map(cat => {
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
            return addSubCategory(Object.assign([], state));

        case 'UPDATE_CATEGORY':
        function updateCategory(categories) {
            return categories.map(function (cat) {
                if (cat.id === action.data.id) {
                    cat.name = action.data.name
                }
                else if (cat.childNodes) {
                    updateCategory(cat.childNodes)
                }
                return cat;
            });
        }
            return updateCategory(Object.assign([], state));

        case 'DELETE_CATEGORY':
            let categories = Object.assign([], state);

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
            deleteCategory(categories);
            return categories;
        default:
            return state || data.categories;
    }
};



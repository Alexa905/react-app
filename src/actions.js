import Dispatcher from './dispather';

export const addCategory = name => Dispatcher.dispatch({ type: 'ADD_CATEGORY', data: {name} });
export const addSubCategory = id =>  Dispatcher.dispatch({ type: 'ADD_SUB_CATEGORY', data: {id} });
export const deleteCategory = id =>  Dispatcher.dispatch({ type: 'DELETE_CATEGORY', data: {id} });
export const updateCategory = (id, name) =>  Dispatcher.dispatch({ type: 'UPDATE_CATEGORY', data: {id, name} });

export const addTask    = task   => Dispatcher.dispatch({ type: 'ADD_TASK',    data: task   });
export const updateTask = task   => Dispatcher.dispatch({ type: 'UPDATE_TASK', data: task   });

export const filterTasks = query => Dispatcher.dispatch({ type: 'FILTER_TASKS', data: query });
export const switchState = state => Dispatcher.dispatch({ type: 'TOGGLE_TASK_STATE', data: state });
export const setEditTask = task  => Dispatcher.dispatch({ type: 'EDIT_TASK', data: task });



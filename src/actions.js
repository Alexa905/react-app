export const addCategory = name => ({ type: 'ADD_CATEGORY', data: {name} });
export const addSubCategory = id =>  ({ type: 'ADD_SUB_CATEGORY', data: {id} });
export const deleteCategory = id =>  ({ type: 'DELETE_CATEGORY', data: {id} });
export const updateCategory = (id, name) =>  ({ type: 'UPDATE_CATEGORY', data: {id, name} });

export const addTask    = task   => ({ type: 'ADD_TASK',    data: task   });
export const updateTask = task   => ({ type: 'UPDATE_TASK', data: task   });

export const filterTasks = query => ({ type: 'FILTER_TASKS', data: query });
export const switchState = state => ({ type: 'TOGGLE_TASK_STATE', data: state });
export const setEditTask = task  => ({ type: 'EDIT_TASK', data: task });

export const receiveData = data => ({ type: 'RECEIVE_DATA', data: data });

export const fetchData = () => {
  return dispatch => {
    fetch('/api/data')
      .then(res => res.json())
      .then(json => dispatch(receiveData(json)));
  };
};

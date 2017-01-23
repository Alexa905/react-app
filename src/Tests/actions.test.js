
import * as actions from '../actions';

describe('actions', () => {
    it('should create an action to add category', () => {
        const name = 'new category';
        const expectedAction = {data: {name},
            type: 'ADD_CATEGORY'
        };
        expect(actions.addCategory(name)).toEqual(expectedAction)
    });

    it('should create an action to add subCategory', () => {
        const id = 21;
        const expectedAction = {data: {id},
            type: 'ADD_SUB_CATEGORY'
        };
        expect(actions.addSubCategory(id)).toEqual(expectedAction)
    });

    it('should create an action to delete category', () => {
        const id = 21;
        const expectedAction = {data: {id},
            type: 'DELETE_CATEGORY'
        };
        expect(actions.deleteCategory(id)).toEqual(expectedAction)
    });

    it('should create an action to update category', () => {
        const id = 21;
        const expectedAction = {data: {id},
            type: 'UPDATE_CATEGORY'
        };
        expect(actions.updateCategory(id)).toEqual(expectedAction)
    });

    it('should create an action to add task', () => {
        const task = {name:'New Name', categoryId:21};
        const expectedAction = {data: task,
            type: 'ADD_TASK'
        };
        expect(actions.addTask(task)).toEqual(expectedAction)
    });

    it('should create an action to update task', () => {
        const task = {name:'New Name', categoryId: 21};
        const expectedAction = {data: task,
            type: 'UPDATE_TASK'
        };
        expect(actions.updateTask(task)).toEqual(expectedAction)
    });

    it('should create an action to delete tasks', () => {
        const id = 12;
        const expectedAction = {data: id,
            type: 'DELETE_TASKS'
        };
        expect(actions.deleteTasks(id)).toEqual(expectedAction)
    });

    it('should create an action to filter tasks', () => {
        const query = 'Poland';
        const expectedAction = {data: query,
            type: 'FILTER_TASKS'
        };
        expect(actions.filterTasks(query)).toEqual(expectedAction)
    });

    it('should create an action to toggle tasks visible state', () => {
        const showOnlyDoneTasks = true;
        const expectedAction = {data: showOnlyDoneTasks,
            type: 'TOGGLE_TASK_STATE'
        };
        expect(actions.switchState(showOnlyDoneTasks)).toEqual(expectedAction)
    });

    it('should create an action to set task with edit mode', () => {
        const task = {id:12, categoryId: 21, name: 'Visit Europe', done: true};
        const expectedAction = {data: task,
            type: 'EDIT_TASK'
        };
        expect(actions.setEditTask(task)).toEqual(expectedAction)
    });
});
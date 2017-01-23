import * as reducers from '../reducers';
import {data} from '../stubData';

describe('reducers', () => {
    describe('taskFilter reducer', () => {
        it(' should return the initial state', () => {
            expect(
                reducers.taskFilter(undefined, {})
            ).toEqual('')
        });

        it(' should return the data', () => {
            const query = 'Poland'
            expect(
                reducers.taskFilter(undefined, {type: 'FILTER_TASKS', data: query})
            ).toEqual(query)
        });
    });

    describe('toggleState reducer', () => {
        it(' should return the initial state', () => {
            expect(
                reducers.toggleState(undefined, {})
            ).toEqual(false)
        });

        it(' should return the data', () => {
            expect(
                reducers.toggleState(undefined, {type: 'TOGGLE_TASK_STATE', data: true})
            ).toEqual(true)
        });
    });

    describe('editTask reducer', () => {
        it(' should return the initial state', () => {
            expect(
                reducers.editTask(undefined, {})
            ).toEqual(null)
        });

        it(' should return the data', () => {
            const task = {id: 12, categoryId: 21, name: 'Visit Europe', done: true};
            expect(
                reducers.editTask(undefined, {type: 'EDIT_TASK', data: task})
            ).toEqual(task)
        });
    });

    describe('tasks reducer', () => {
        it(' should return the initial state', () => {
            expect(
                reducers.tasks(undefined, {})
            ).toEqual(data.tasks)
        });

        it('should add task', () => {
            const newTask = {id: 12, categoryId: 21, name: 'Visit Europe', done: true};
            const state = [{task: {id: 1}}];
            expect(
                reducers.tasks(state, {type: 'ADD_TASK', data: newTask})
            ).toEqual([newTask].concat(state))
        });

        it('should update task', () => {
            const updatedTask = {id: 12, categoryId: 21, name: 'Visit Europe and Asia', done: true}
            const state = [{id: 12, categoryId: 21, name: 'Visit Europe', done: true}];
            expect(
                reducers.tasks(state, {type: 'UPDATE_TASK', data: updatedTask})
            ).toEqual([updatedTask])
        });

        it('should delete tasks', () => {
            const state = [{id: 12, categoryId: 21, name: 'Visit Europe', done: true}];
            expect(
                reducers.tasks(state, {type: 'DELETE_TASKS', data: 21})
            ).toEqual([undefined])
        });
    });

    describe('categories reducer', () => {
        it(' should return the initial state', () => {
            expect(
                reducers.categories(undefined, {})
            ).toEqual(data.categories)
        });

        it(' should add category', () => {
            const category = {name: 'New', id: 1, childNodes: []};
            expect(
                reducers.categories([], {type: 'ADD_CATEGORY', data: category})
            ).toEqual([category])
        });

        it(' should add subCategory', () => {
            const category = {name: 'New', id: 1, childNodes: []};
            expect(
                (reducers.categories([category], {type: 'ADD_SUB_CATEGORY', data: category}))[0].childNodes[0].name
            ).toEqual('new category')
        });

        it(' should update category', () => {
            const category = {name: 'New', id: 2, childNodes: []};
            const updatedCategory = {name: 'New Name', id: 2};
            const state = [category];
            expect(
                reducers.categories(state, {type: 'UPDATE_CATEGORY', data: updatedCategory})
            ).toEqual([Object.assign({}, category, updatedCategory)])
        });

        it(' should delete category', () => {
            const category = {name: 'New', id: 1, childNodes: []};
            const state = [category];
            expect(
                reducers.categories(state, {type: 'DELETE_CATEGORY', data: {id:1}})
            ).toEqual([])
        });
    });

});